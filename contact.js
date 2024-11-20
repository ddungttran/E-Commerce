function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous error messages
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("phone-error").innerText = "";
    document.getElementById("message-error").innerText = "";

    let isValid = true;

    // Name validation
    if (!name) {
        document.getElementById("name-error").innerText = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById("email-error").innerText = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("email-error").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\d+$/;
    if (!phone) {
        document.getElementById("phone-error").innerText = "Phone number is required.";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById("phone-error").innerText = "Phone number must contain only digits.";
        isValid = false;
    }

    // Message validation
    if (!message) {
        document.getElementById("message-error").innerText = "Message is required.";
        isValid = false;
    }

    // Display a success message if the form is valid
    if (isValid) {
        alert("Form submitted successfully!");
    }
}
