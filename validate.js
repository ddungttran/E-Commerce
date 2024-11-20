// Attach the validateForm function to the form's submit event
document.getElementById("signupForm").addEventListener("submit", validateForm);

function validateForm(e) {
    // Get the values entered in the form fields and remove extra spaces
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    // Get the element where error messages will be displayed
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessage.style.display = "none"; // Hide the error message container
    errorMessage.innerHTML = ""; // Remove any previous error text

    // Assume the form is valid to start
    let isValid = true;

    // Create an array to collect error messages
    let errors = [];

    // Define the pattern for a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the first name is empty
    if (!firstName) {
        errors.push("First Name is required."); // Add error message
        isValid = false; // Mark the form as invalid
    }

    // Check if the last name is empty
    if (!lastName) {
        errors.push("Last Name is required."); // Add error message
        isValid = false;
    }

    // Check if the email is empty or invalid
    if (!email) {
        errors.push("Email is required."); // Add error message
        isValid = false;
    } else if (!emailRegex.test(email)) { // Check if email matches the pattern
        errors.push("A valid Email Address is required."); // Add error message
        isValid = false;
    }

    // If there are errors, show them and stop the form submission
    if (!isValid) {
        e.preventDefault(); // Stop the form from submitting
        errorMessage.style.display = "block"; // Show the error message container
        errorMessage.innerHTML = errors.join("<br>"); // Display errors as a list
    }
}
