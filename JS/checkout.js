/* chackout javascript */

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.getElementById('close-modal');
    const submitBtn = document.querySelector('.submit-btn');

    const step1 = document.getElementById('modal-step-1');
    const step2 = document.getElementById('modal-step-2');
    const step3 = document.getElementById('modal-step-3');

    const toPaymentBtn = document.getElementById('to-payment-btn');
    const payNowBtn = document.getElementById('pay-now-btn');
    const finishBtn = document.getElementById('finish-btn');

    const summaryList = document.getElementById('summary-list');
    const summarySubtotal = document.getElementById('summary-subtotal');
    const discountRow = document.getElementById('discount-row');
    const discountPercentSpan = document.getElementById('discount-percent');
    const summaryDiscount = document.getElementById('summary-discount');
    const summaryTotal = document.getElementById('summary-total');

    // 1. Cross-Page Cart: Load & Save logic
    const checkboxes = document.querySelectorAll('.course-checkbox');
    
    // Check local storage to see if courses were already selected
    let savedCart = JSON.parse(localStorage.getItem('pawsitiveCart')) || {};
    
    checkboxes.forEach(box => {
        // If this course is in memory, check the box visually
        if (savedCart[box.id]) {
            box.checked = true;
        }

        // Listen for clicks to update memory
        box.addEventListener('change', () => {
            savedCart = JSON.parse(localStorage.getItem('pawsitiveCart')) || {};
            
            if (box.checked) {
                savedCart[box.id] = {
                    name: box.getAttribute('data-name'),
                    price: parseInt(box.getAttribute('data-price')) || 0
                };
            } else {
                delete savedCart[box.id]; // Remove if unchecked
            }
            
            localStorage.setItem('pawsitiveCart', JSON.stringify(savedCart));
        });
    });

    // 2. Open Modal & Calculate from Memory
    if (submitBtn) {
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            // Read directly from memory so it pulls from both pages
            const currentCart = JSON.parse(localStorage.getItem('pawsitiveCart')) || {};
            const cartKeys = Object.keys(currentCart);

            if (cartKeys.length === 0) {
                alert('Please select at least one course before proceeding!');
                return;
            }

            summaryList.innerHTML = '';
            let subtotal = 0;

            cartKeys.forEach((id) => {
                const item = currentCart[id];
                subtotal += item.price;

                const listItem = document.createElement('li');
                listItem.innerHTML = `<span>${item.name}</span> <span>R${item.price}</span>`;
                summaryList.appendChild(listItem);
            });

            const selectedCount = cartKeys.length;
            let discountPercent = 0;

            if (selectedCount === 2) {
                discountPercent = 0.05; 
            } else if (selectedCount === 3) {
                discountPercent = 0.10; 
            } else if (selectedCount >= 4) {
                discountPercent = 0.15; 
            }

            const discountAmount = subtotal * discountPercent;
            const finalTotal = subtotal - discountAmount; 

            summarySubtotal.textContent = `R${subtotal}`;

            if (discountPercent > 0) {
                discountPercentSpan.textContent = `${discountPercent * 100}%`;
                summaryDiscount.textContent = `-R${Math.round(discountAmount)}`;
                discountRow.classList.remove('hidden');
            } else {
                discountRow.classList.add('hidden');
            }

            summaryTotal.textContent = `R${Math.round(finalTotal)}`;

            step1.classList.remove('hidden');
            step2.classList.add('hidden');
            step3.classList.add('hidden');
            modal.classList.remove('hidden');
        });
    }

    // proceed to payment
    if (toPaymentBtn) {
        toPaymentBtn.addEventListener('click', () => {
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
        });
    }

    // Sucessefull payment
    if (payNowBtn) {
        payNowBtn.addEventListener('click', () => {
            const cardName = document.getElementById('card-name')?.value.trim() || document.getElementById('card-name-long')?.value.trim();
            const cardNum = document.getElementById('card-num')?.value.trim() || document.getElementById('card-num-long')?.value.trim();

            if (!cardName || !cardNum) {
                alert('Please enter a Cardholder Name and Card Number to complete the demo checkout.');
                return;
            }

            step2.classList.add('hidden');
            step3.classList.remove('hidden');
            
            // WIPE MEMORY AFTER PURCHASE SO NEXT DEMO IS FRESH
            localStorage.removeItem('pawsitiveCart');
            checkboxes.forEach(box => box.checked = false);
        });
    }

    // Close Modal Handlers
    const closeModal = () => {
        modal.classList.add('hidden');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (finishBtn) finishBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});