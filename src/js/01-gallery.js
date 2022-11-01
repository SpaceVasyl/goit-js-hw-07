import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPhoto = document.querySelector(".gallery");
const items = galleryItems;

function createGalleryItems(items) {
    return items.map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");
}

const addEls = createGalleryItems(galleryItems);
galleryPhoto.innerHTML = addEls;

galleryPhoto.addEventListener('click', imageLoop);

function imageLoop(event) {
    if (event.target === galleryPhoto) {
        return;
    }
     event.preventDefault();
    basicLightbox.create(`<img width="1400" height="900" src="${event.target.dataset.source}">`).show();
}