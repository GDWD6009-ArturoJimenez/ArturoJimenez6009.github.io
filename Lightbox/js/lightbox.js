let lightboxContainer = document.getElementById ('lightboxContainer');
let lightboxBackground = document.getElementById (' lightboxBackground');
let lightbox = document.getElementById ('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

function openLightbox(){
  lightboxContainer.classList.add('display');

  lightbox.src = this.src;
}


let coffeeImage = document.getElementById ('coffeeImage1');

coffeeImage.onclick = openLightbox;