// Exemple d'effet de survol pour les projets dans le portfolio
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.color = '#0056b3';
        });

        link.addEventListener('mouseleave', function() {
            link.style.color = '#007BFF';
        });
    });
});
