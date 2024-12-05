// Sélection du bouton "En savoir plus"
const learnMoreBtn = document.getElementById("learnMoreBtn");

// Fonction pour faire défiler la page vers la section des compétences
learnMoreBtn.addEventListener("click", () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});
