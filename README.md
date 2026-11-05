🐾 Pawsitive Pet Academy

Pawsitive Pet Academy is a responsive, interactive web application built for a Durban-based pet care education business. This project serves as a digital storefront to drive multi-course sales, capture client leads, and automate the enrollment quoting process.

This project was developed as part of a Higher Certificate group presentation, demonstrating a strong intersection of business logic and front-end web development.

🚀 Live Demo

(You can add a link to GitHub Pages or your live deployment here once hosted)

💼 Business Objectives

Increase Sales: Implemented an automated tiered discount system to incentivize multi-course enrollments (e.g., 5% off for 2 courses, 10% off for 3).

Automate Customer Service: Replaced manual quoting with a dynamic, real-time checkout modal that calculates subtotals, discounts, and final totals.

Lead Generation: Integrated user-friendly contact and feedback forms to capture visitor information for future marketing and outreach.

Brand Professionalism: Transitioned a local business into a modern digital space with a cohesive, responsive UI.

✨ Technical Highlights & Features

Cross-Page State Management: Utilized JavaScript's localStorage to persist a user's shopping cart (pawsitiveCart) across different HTML pages (Short Courses vs. Long Courses) without requiring a backend database.

Dynamic DOM Manipulation: Leveraged custom HTML5 data-* attributes (data-name, data-price) to extract course information and dynamically generate the shopping cart summary and pricing logic.

Custom Interactive UI:

Developed a multi-step checkout modal (Summary ➔ Payment Details ➔ Success Confirmation) that overlays the page without a hard refresh.

Built a custom, smoothly animated CSS/JS Accordion for the "About Us" page FAQ section.

Responsive Design: Extensively used CSS Flexbox and CSS Grid (grid-template-columns: repeat(auto-fit, minmax(...))) alongside media queries to ensure the platform is accessible and visually appealing on mobile, tablet, and desktop devices.

🛠️ Built With

HTML5: Semantic markup and structure.

CSS3: Custom styling, variables, Flexbox, Grid, transitions, and glass-morphism effects.

Vanilla JavaScript (ES6+): DOM manipulation, event handling, and Local Storage integration.

📂 Project Structure

├── CSS/
│   ├── about us.css
│   ├── contact.css
│   ├── course.css
│   ├── global.css      # Core styles, navigation, and footer
│   └── index.css
├── JS/
│   ├── about.js        # Accordion logic
│   ├── checkout.js     # Cart logic, local storage, and modal handling
│   └── contact.js      # Form validation (if applicable)
├── images/             # UI assets and course thumbnails
├── About.html          # Company history, mission, and vision
├── contact.html        # Lead generation and contact info
├── course.html         # Split-screen landing for course types
├── index.html          # Main landing page
├── long-course.html    # Professional 6-month courses
└── short-course.html   # Practical 6-week courses


💻 Getting Started

To run this project locally, you don't need any special server configurations or dependencies.

Clone the repository:

git clone https://github.com/your-username/pawsitive-pet-academy.git


Navigate to the project directory:

cd pawsitive-pet-academy


Open the application:
Simply double-click index.html to open it in your default web browser, or use a tool like Live Server in VS Code for a better development experience.

Created for a Higher Certificate presentation.
