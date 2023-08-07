const PopupCard = document.getElementById('popup-card');
const Container = document.querySelector('#image-container');
const closeButton = document.querySelector('.close-button');
const comparisonSlider = document.querySelector ('.comparison-slider');

comparisonSlider.addEventListener('input', (e) => {
	Container.style.setProperty('--position', `${e.target.value}%`);
});

closeButton.addEventListener('click', () => {
	const popupCard = document.getElementById('popup-card');
	popupCard.classList.remove('show');
	popupCard.classList.add('hide');
});


