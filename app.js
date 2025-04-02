

(function () {

      // Navigation Controls
      [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Theme Toggle Button
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Initialize EmailJS
// Initialize EmailJS
emailjs.init("hOlw2xTG0UCAHSaII"); // Replace with your Public Key

// Handle Send Button Click
document.getElementById("sendMailBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form action

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Validate input fields
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_3crp2yc", "template_wrdyiho", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(response => {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Reset form fields
    })
    .catch(error => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS Error:", error);
    });
});

  
})();
