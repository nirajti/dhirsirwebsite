```javascript
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically update copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();


// IMPORTANT:
// Replace this with your actual business email.
const BUSINESS_EMAIL = "your-email@example.com";


// Candidate registration form
document.getElementById("candidateForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
        return;
    }

    if (BUSINESS_EMAIL === "your-email@example.com") {
        document.getElementById("candidateStatus").textContent =
            "Please add your business email in script.js before submitting applications.";
        return;
    }

    const data = new FormData(form);

    const subject = encodeURIComponent(
        "Job Application - " + data.get("name")
    );

    const body = encodeURIComponent(
        "JOB SEEKER APPLICATION\n\n" +
        "Name: " + data.get("name") + "\n" +
        "Mobile: " + data.get("phone") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Experience: " + data.get("experience") + "\n" +
        "Industry: " + data.get("sector") + "\n" +
        "Location: " + data.get("location") + "\n" +
        "Profile: " + data.get("profile")
    );

    window.location.href =
        `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

    document.getElementById("candidateStatus").textContent =
        "Your email app should open. Please review and send the application.";
});


// Employer enquiry form
document.getElementById("employerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
        return;
    }

    if (BUSINESS_EMAIL === "your-email@example.com") {
        document.getElementById("employerStatus").textContent =
            "Please add your business email in script.js before submitting enquiries.";
        return;
    }

    const data = new FormData(form);

    const subject = encodeURIComponent(
        "Hiring Enquiry - " + data.get("company")
    );

    const body = encodeURIComponent(
        "EMPLOYER HIRING ENQUIRY\n\n" +
        "Company: " + data.get("company") + "\n" +
        "Contact Person: " + data.get("contact") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Phone: " + data.get("phone") + "\n" +
        "Requirement: " + data.get("requirement")
    );

    window.location.href =
        `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

    document.getElementById("employerStatus").textContent =
        "Your email app should open. Please review and send the enquiry.";
});
```
