/*--déclaration de condition*/
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    
} //fin responsive//


// Charge les fichiers JSON contenant les traductions de langue
const translations = {};

// Function to load JSON files
function loadTranslations(lang) {
    fetch(`/translations/${lang}.json`)
    .then(response => response.json())
    .then(data => {
        translations[lang] = data;
        updateLanguage(lang);
    })
    .catch(error => console.error('Error loading translations:', error));
}

// Fonction pour mettre à jour la langue
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
}

// Fonction pour changer de langue
function changeLanguage(language) {
    loadTranslations(language);
}

// Charger les traductions de la langue par défaut au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadTranslations('en'); // Charger les traductions anglaises par défaut
});
