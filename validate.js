document.getElementById("signupForm").addEventListener("submit", function (e) {
    const formFields = {
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email: document.getElementById("email").value.trim(),
    };
    
    const errorMessage = document.getElementById("error-message");
  
    // Validation rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check for errors
    let errors = [];
  
    if (!formFields.firstName) {
      errors.push("First Name is required.");
    }
  
    if (!formFields.lastName) {
      errors.push("Last Name is required.");
    }
  
    if (!emailRegex.test(formFields.email)) {
      errors.push("A valid Email Address is required.");
    }
  
    // Handle validation result
    if (errors.length > 0) {
      e.preventDefault(); // Prevent form submission
      errorMessage.style.display = "block";
      errorMessage.innerHTML = errors.join("<br>"); // Show all errors
    } else {
      errorMessage.style.display = "none"; // Clear error message
    }
  });
  