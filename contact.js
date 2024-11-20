function validateForm() {
    // Get the values entered in the form fields and remove extra spaces
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear all previous error messages
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("phone-error").innerText = "";
    document.getElementById("message-error").innerText = "";

    // Assume the form is valid at the start
    let isValid = true;

    // Check if the name is empty
    if (!name) {
        document.getElementById("name-error").innerText = "Name is required.";
        isValid = false; // Mark the form as invalid
    }

    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pattern for a valid email
    if (!email) {
        document.getElementById("email-error").innerText = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) { // Check if email matches the pattern
        document.getElementById("email-error").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Check if the phone number is valid
    const phoneRegex = /^\d+$/; // Phone number should only contain digits
    if (!phone) {
        document.getElementById("phone-error").innerText = "Phone number is required.";
        isValid = false;
    } else if (!phoneRegex.test(phone)) { // Check if phone contains only digits
        document.getElementById("phone-error").innerText = "Phone number must contain only digits.";
        isValid = false;
    }

    // Check if the message is empty
    if (!message) {
        document.getElementById("message-error").innerText = "Message is required.";
        isValid = false;
    }

    // If all fields are valid, show a success message
    if (isValid) {
        alert("Form submitted successfully!");
    }
}
