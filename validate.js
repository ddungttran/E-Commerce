document.getElementById("signupForm").addEventListener("submit", validateForm);

function validateForm(e) {
    // Gather form fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    // Reference error message container
    const errorMessage = document.getElementById("error-message");

    // Clear previous error messages
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";

    // Initialize validation flag and error array
    let isValid = true;
    let errors = [];

    // Validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate first name
    if (!firstName) {
        errors.push("First Name is required.");
        isValid = false;
    }

    // Validate last name
    if (!lastName) {
        errors.push("Last Name is required.");
        isValid = false;
    }

    // Validate email
    if (!email) {
        errors.push("Email is required.");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        errors.push("A valid Email Address is required.");
        isValid = false;
    }

    // Display errors or allow form submission
    if (!isValid) {
        e.preventDefault(); // Prevent form submission
        errorMessage.style.display = "block";
        errorMessage.innerHTML = errors.join("<br>");
    }
}
