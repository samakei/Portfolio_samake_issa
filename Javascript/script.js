/*--déclaration de condition*/
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    
} //fin responsive//


// Load JSON files containing language translations
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

// Function to update language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
}

// Function to change language
function changeLanguage(language) {
    loadTranslations(language);
}

// Load default language translations on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTranslations('en'); // Load English translations by default
});
