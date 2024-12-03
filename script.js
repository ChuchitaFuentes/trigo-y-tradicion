const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const images = Array.from(track.children);
const imageWidth = images[0].getBoundingClientRect().width;

// Coloca las imágenes en fila
images.forEach((image, index) => {
  image.style.left = `${imageWidth * index}px`;
});

// Función para mover el carrusel
const moveToImage = (track, currentImage, targetImage) => {
  track.style.transform = `translateX(-${targetImage.style.left})`;
  currentImage.classList.remove('current-image');
  targetImage.classList.add('current-image');
};

// Botón Siguiente
nextButton.addEventListener('click', () => {
  const currentImage = track.querySelector('.current-image') || images[0];
  const nextImage = currentImage.nextElementSibling || images[0]; // Ciclo infinito
  moveToImage(track, currentImage, nextImage);
});

// Botón Anterior
prevButton.addEventListener('click', () => {
  const currentImage = track.querySelector('.current-image') || images[0];
  const prevImage =
    currentImage.previousElementSibling || images[images.length - 1]; // Ciclo infinito
  moveToImage(track, currentImage, prevImage);
});
