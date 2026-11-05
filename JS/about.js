// Accordion functionality with smooth animations
document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        // Accesibilty setup
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');

        // Main toggle even for bot mouse and keyboard clicks
        header.addEventListener('click', function () {
            // Find parent accordion
            const accordionItem = this.parentElement;

            // Toggles only the clicked item only
            accordionItem.classList.toggle('active');

            // Update aria for screen readers
            const isExpanded = accordionItem.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });


        // Keyboard accessibility trigeer
        header.addEventListener('keydown', function (e) {
            if (e.key == 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }

        });
    });
});

