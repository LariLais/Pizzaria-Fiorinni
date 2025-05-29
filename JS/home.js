// Lista de imagens do carrossel
const images = [
  "/IMAGES/carousel1.jpg",
  "/IMAGES/carousel2.jpg",
  "/IMAGES/carousel3.jpg",
];

let currentIndex = 0;

const imageElement = document.getElementById("image_carousel");
const leftArrow = document.getElementById("arrowleft");
const rightArrow = document.getElementById("arrowright");

function updateImage() {
  imageElement.src = images[currentIndex];
}

// Avançar
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Voltar
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}, 3000); // troca a cada 5 segundos
