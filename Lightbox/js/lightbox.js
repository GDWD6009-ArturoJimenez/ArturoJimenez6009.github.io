let lightboxContainer = document.getElementById ('lightboxContainer');
let lightboxBackground = document.getElementById (' lightboxBackground');
let lightbox = document.getElementById ('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

function openLightbox(){
  lightboxContainer.classList.add('display');

  lightbox.src = this.src;
}
let ImageGallery = document.getElementsByClassName
("ImageGallery");

for (let i = 0; i < ImageGallery.length; i++) {
  let ImageGallerys = ImageGallery[i];
  ImageGallerys.onclick = openLightbox;
  }


function closeLightbox(){
  lightboxContainer.classList.remove('display')
  lightbox.src = "";
}

let closers = document.getElementsByClassName('closer');










// let coffeeImage = document.getElementById ('coffeeImage1');
// coffeeImage.onclick = openLightbox;

// let coffeeImage = document.getElementById ('coffeeImage2');
// coffeeImage.onclick = openLightbox;

// let coffeeImage = document.getElementById ('coffeeImage3');
// coffeeImage.onclick = openLightbox;

// let coffeeImage = document.getElementById ('coffeeImage4');
// coffeeImage.onclick = openLightbox;

// let coffeeImage = document.getElementById ('coffeeImag5');
// coffeeImage.onclick = openLightbox;

// let coffeeImage = document.getElementById ('coffeeImage6');
// coffeeImage.onclick = openLightbox;

// let coffeeImage = document.getElementById ('coffeeImage7');
// coffeeImage.onclick = openLightbox;


// lightboxBackground.onclick = closeLightbox;
// lightboxCloser.onclick = closeLightbox;