document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        // Validation simple des champs du formulaire
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Tous les champs sont obligatoires !");
        } else {
            alert("Merci pour votre message. Je vous répondrai dès que possible.");
            contactForm.reset(); // Réinitialiser le formulaire
        }
    });
});
