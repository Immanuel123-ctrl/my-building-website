const signupForm = document.getElementById("signupForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const message = document.getElementById("message");


signupForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const nameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;


    // Check full name
    if (nameValue === "") {

        message.textContent = "Please enter your full name.";
        message.style.color = "red";

        return;
    }


    // Check email
    if (emailValue === "") {

        message.textContent = "Please enter your email address.";
        message.style.color = "red";

        return;
    }


    // Check password length
    if (passwordValue.length !== 8) {

        message.textContent = "Password must be exactly 8 characters.";
        message.style.color = "red";

        return;
    }


    // Check if passwords match
    if (passwordValue !== confirmPasswordValue) {

        message.textContent = "Passwords do not match.";
        message.style.color = "red";

        return;
    }


    // Save user's name and email temporarily
    localStorage.setItem("userName", nameValue);
    localStorage.setItem("userEmail", emailValue);


    // Show success message
    message.textContent = "Account created successfully!";
    message.style.color = "green";


    // Wait 1.5 seconds and go to homepage
    setTimeout(function() {

        window.location.href = "homepage.html";

    }, 1500);

});