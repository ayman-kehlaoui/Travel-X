const images = [
  "images/australia.jpg",
  "images/london.jpg",
  "images/pexels-mag-photography-1501456-30532030.jpg",
  "images/pexels-njeromin-35031358.jpg",
  "images/pexels-solyartphotos-15863589.jpg",
  "images/pexels-thales13-23385438.jpg",
];

let currentIndex = 0;
const currentBg = document.querySelector(".hero-bg");
const nextBg = document.querySelector(".hero-bg-next");

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  const nextImageUrl = images[currentIndex];

  nextBg.style.backgroundImage = `url('${nextImageUrl}')`;
  nextBg.style.opacity = "1";
  currentBg.style.opacity = "0";

  setTimeout(() => {
    currentBg.style.backgroundImage = `url('${nextImageUrl}')`;
    currentBg.style.opacity = "1";
    nextBg.style.opacity = "0";
  }, 1500); 
}

setInterval(changeBackground, 6000); 
