// Sélectionnez le bouton et l'élément main__dashboardContainer
const button = document.querySelector('.main__buttonDash');
const container = document.querySelector('.main__dashboardContainer');
const openImageUrl = './assets/icons/upArrow.svg';
const closedImageUrl = './assets/icons/downArrow.svg';
const image = button.querySelector('img');
// Ajoutez un gestionnaire d'événements au bouton
button.addEventListener('click', () => {
  // Basculez entre les classes open et closed sur l'élément main__dashboardContainer
  container.classList.toggle('open');
  container.classList.toggle('closed');
  if (container.classList.contains('open')) {
    // Si le conteneur est ouvert, changez l'URL de l'image en closedImageUrl
    image.src = openImageUrl;
  } else {
    // Si le conteneur est fermé, changez l'URL de l'image en openImageUrl
    image.src = closedImageUrl;
  }
});