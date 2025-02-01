function submitEmail() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        redirectToLanding();
    } else {
        alert('Please enter a valid email address.');
    }
}

function redirectToLanding() {
    window.location.href = "https://www.greencart.ai/en/landing";
}

// Utility function to validate email format
function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern check
    return pattern.test(email);
}
