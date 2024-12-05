// Exemple de code JavaScript pour une interaction éventuelle
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const profilePhoto = document.querySelector('.profile-photo');

    aboutSection.addEventListener('mouseenter', function() {
        profilePhoto.style.transform = 'scale(1.1)';
        profilePhoto.style.transition = 'transform 0.3s ease';
    });

    aboutSection.addEventListener('mouseleave', function() {
        profilePhoto.style.transform = 'scale(1)';
    });
});
