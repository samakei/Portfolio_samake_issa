/*--déclaration de condition*/
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    
} //fin responsive//

// Fonction pour charger et afficher les traductions
function chargerTraduction(lang) {
  fetch(lang + 'Data.json')
    .then(response => response.json())
    .then(traductions => {
      Object.keys(traductions).forEach(cle => {
        const elements = document.querySelectorAll('[data-translate="' + cle + '"]');
        elements.forEach(element => {
          element.textContent = traductions[cle];
        });
      });
    })
    .catch(error => console.error('Erreur lors du chargement des traductions:', error));
}

// Ajoutez un écouteur d'événements pour chaque drapeau ou option de langue
document.querySelector('#drapeau-fr').addEventListener('click', () => chargerTraduction('fr'));
document.querySelector('#drapeau-en').addEventListener('click', () => chargerTraduction('en'));
// Ajoutez des écouteurs d'événements pour chaque nouveau drapeau




