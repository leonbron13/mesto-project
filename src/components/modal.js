// modal.js
import {overlayElements } from './consts.js'

export function openPopup(item) {
    item.classList.add('popup_opened');
    document.addEventListener('keydown',  closeByEsc)
  }
  export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',  closeByEsc)
  }
  export function closeByEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
    }
} 
  export function setCloseByOverlayListeners() {
    overlayElements.forEach((overlay) => {
      overlay.addEventListener('mousedown', () => {
        const popup = overlay.closest('.popup');
        closePopup(popup);
      });
    });
  }
  
  