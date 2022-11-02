import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPhoto = document.querySelector(".gallery");
const items = galleryItems;

function createGalleryItems(items) {
    return items.map((item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join("");
}


galleryPhoto.innerHTML = createGalleryItems(galleryItems);
const lightbox = new SimpleLightbox(".gallery__item", { captionsData: "alt" , captionDelay: 250} );

// const addEls = createGalleryItems(galleryItems);
// galleryPhoto.innerHTML = addEls;


// galleryPhoto.addEventListener('click', imageLoop);

// function imageLoop(event) { 
//     event.preventDefault();
//     if (event.target === galleryPhoto) {
//         return;
//     }
    
    
// }