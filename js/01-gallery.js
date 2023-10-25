import * as basicLightbox from 'basiclightbox';

const gallery = document.querySelector('.gallery');

const galleryItems = [
    {
        source: './images/container-rainbow.jpg',
        alt: 'Container Haulage Freight',
    },
    {
        source: './images/rchids-flower.jpg',
        alt: 'Hokkaido Flower',
    },
    {
        source: './images/aerial-beach-view.jpg',
        alt: 'Aerial Beach View',
    },
    {
        source: './images/flower-blooms.jpg',
        alt: 'Flower Blooms',
    },
    {
        source: './images/alpine-mountains.jpg',
        alt: 'Alpine Mountains',
    },
    {
        source: './images/mountain-lake-sailing.jpg',
        alt: 'Mountain Lake Sailing',
    },
    {
        source: './images/spring-meadows.jpg',
        alt: 'Alpine Spring Meadows',
    },
    {
        source: './images/nature-landscape.jpg',
        alt: 'Nature Landscape',
    },
    {
        source: './images/lighthouse-coast-sea.jpg',
        alt: 'Lighthouse Coast Sea',
    },
];

function createGalleryItem(item) {
    const listItem = document.createElement('li');
    listItem.className = 'gallery__item';

    const link = document.createElement('a');
    link.href = item.source;
    link.className = 'gallery__link';

    const image = document.createElement('img');
    image.src = `./images/small-${item.source}`;
    image.setAttribute('data-source', item.source);
    image.alt = item.alt;
    image.className = 'gallery__image';

    link.appendChild(image);
    listItem.appendChild(link);

    return listItem;
}

function openModal(event) {
    event.preventDefault();
    const source = event.target.getAttribute('data-source');
    const modal = basicLightbox.create(`<img src="${source}" alt="Image description">`);
    modal.show();
}

galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    galleryItem.addEventListener('click', openModal);
    gallery.appendChild(galleryItem);
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        basicLightbox.close();
    }
});