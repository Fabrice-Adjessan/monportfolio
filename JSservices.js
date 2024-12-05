// Exemple d'interaction JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        service.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f0f0f0'; // Change la couleur au survol
        });
        
        service.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#fff'; // Restaure la couleur d'origine
        });
    });
});
