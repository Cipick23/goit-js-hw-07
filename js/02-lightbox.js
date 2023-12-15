import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
let modalInstance;

galleryItems.forEach(item => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('gallery__item')
  listItemEl.innerHTML = `
    <a 
      class='gallery__link' 
      href='${item.original}'
    >
    <img
		navText='['←','→']'
      class='gallery__image'
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
    </a>`;
  listEl.append(listItemEl);
});

listEl.addEventListener('click', openImageInLightbox);

function openImageInLightbox(event) {
  const clickedOn = event.target;
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  modalInstance = basicLightbox.create(
    `<img 
    width='1400' 
    height='900' 
    src='${clickedOn.dataset.source}'/>`);
  modalInstance.show();
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalInstance) {
    modalInstance.close();
  }
});

const galleryLinks = document.querySelectorAll('.gallery__link');

const lightbox = new SimpleLightbox(galleryLinks, {});