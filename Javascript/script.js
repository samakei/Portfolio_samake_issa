/*--déclaration de condition*/
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    
} //fin responsive//


/// Fonction permettant d'afficher l'écran du chargeur //Tranductions plus loader animation avec opacity//
function showLoaderOverlay() {
    document.getElementById('loader-overlay').style.display = 'block';
}

// Fonction permettant de masquer la couche de chargement
function hideLoaderOverlay() {
    document.getElementById('loader-overlay').style.display = 'none';
}

// Fonction de chargement des fichiers JSON
function loadTranslations(lang) {
    showLoaderOverlay(); // Afficher l'overlay de chargement

    setTimeout(() => {
        hideLoaderOverlay(); // Masquer l'overlay après 1 secondes
    }, 1000);

    fetch(`/translations/${lang}.json`)
    .then(response => response.json())
    .then(data => {
        loadTranslations[lang] = data;
        updateLanguage(lang);
    })
    .catch(error => console.error('Erreur lors du chargement des traductions :', error));
}


// Fonction de mise à jour de la langue
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = loadTranslations[lang][key];
    });
}

// Fonction de changement de langue
function changeLanguage(language) {
    loadTranslations(language);
}

// Chargement des traductions des langues par défaut au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadTranslations('fr'); // Chargement des traductions en anglais par défaut
});
//fin//