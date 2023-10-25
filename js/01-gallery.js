import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="../images/small-container-haulage-freight.jpg" width="800" height="600">
`)

instance.show()
debugger;
{
	/*
	 * Prevents the lightbox from closing when clicking its background.
	 */
	closable: true,
	/*
	 * One or more space separated classes to be added to the basicLightbox element.
	 */
	className: 'gallery__item',
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {}
}