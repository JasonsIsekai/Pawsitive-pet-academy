document.addEventListener("DOMContentLoaded", () => {
   
    const stars = document.querySelectorAll(".star-rating span");
    let currentRating = 0;

    if (stars.length > 0) {
        stars.forEach((star, index) => {
            // Hover effect
            star.addEventListener("mouseover", () => {
                resetStars();
                highlightStars(index);
            });

            // Remove hover effect if not clicked
            star.addEventListener("mouseleave", () => {
                resetStars();
                highlightStars(currentRating - 1);
            });

            // Click to set rating
            star.addEventListener("click", () => {
                currentRating = index + 1;
                highlightStars(currentRating - 1);
            });
        });
    }

    
    const forms = document.querySelectorAll("form");

    forms.forEach((form, index) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page refresh

            // Basic validation check
            const inputs = form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");
            let isValid = true;

            inputs.forEach(input => {
                if (input.hasAttribute("required") && input.value.trim() === "") {
                    isValid = false;
                    input.style.borderColor = "#ff6b6b";
                } else {
                    input.style.borderColor = "#7c624e";
                }
            });

            if (!isValid) {
                alert("Please fill in all required fields before submitting.");
                return;
            }

            // Success feedback message based on which form was submitted
            if (index === 0) {
                alert("Thank you! Your feedback has been submitted successfully.");
            } else {
                alert("Thank you! We have received your contact details and will get in touch soon.");
            }

            form.reset();
            if (index === 0) {
                currentRating = 0;
                resetStars();
            }
        });
    });
});