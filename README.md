# Pawsitive Pet Academy

A responsive front-end web application built for a pet care education center based in Durban. This project was developed as a Portfolio of Evidence submission for the Higher Certificate in Mobile Application and Web Development at Emeris.

## 🎯 Business Objectives
* **Automated Sales & Upselling:** Features a dynamic checkout system that automatically calculates and applies tiered discounts (5% for 2 courses, 10% for 3, 15% for 4+) to encourage multi-course enrollment.
* **Lead Generation:** Includes dedicated contact and feedback forms to capture customer inquiries and drive future marketing.
* **Digital Presence:** Transitions a local physical business into a modern, 24/7 accessible digital space.

## 💻 Technical Highlights
* **Cross-Page Cart State:** Utilizes JavaScript `localStorage` to persist user cart selections (Short & Long Courses) seamlessly across different HTML pages.
* **Dynamic DOM Manipulation:** Extracts pricing and course data directly from custom HTML data attributes (`data-name`, `data-price`) to render the checkout summary.
* **Responsive UI Design:** Built with CSS Flexbox and Grid to ensure full adaptability across desktop, tablet, and mobile screens.
* **Interactive Elements:** Features a custom CSS-driven Accordion for the "About Us" section and a multi-step JavaScript modal overlay for the demo checkout process.

## 🗂️ Project Structure
* `index.html` - Landing page and business overview
* `course.html` - Course selection split screen
* `short-course.html` / `long-course.html` - Course catalogs with selection checkboxes
* `About.html` - Company history and mission featuring an interactive accordion
* `contact.html` - Contact information and inquiry forms
* `/CSS/` - Modular stylesheets (`global.css`, `index.css`, `course.css`, `about us.css`, `contact.css`)
* `/JS/` - Interactive logic (`checkout.js`, `about.js`, `contact.js`)
* `/images/` - Site assets and branding

## 🚀 How to Run
1. Clone or download this repository.
2. Open `index.html` in any modern web browser to view the site.
3. Navigate to the Courses section to test the dynamic checkout and `localStorage` cart functionality.
