// modal.js
import {overlayElements, profileAvatar, avatarPopup, avatarForm, newAvatarLinkInput, avatarPopupSubmitButton, } from './consts.js'

export function openPopup(item) {
    item.classList.add('popup_opened');
  }
  
  export function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }
  
  export function overlay() {
    overlayElements.forEach((overlay) => {
      overlay.addEventListener('click', () => {
        const popup = overlay.closest('.popup');
        closePopup(popup);
      });
    });
  }
  
  export function esc() {
    document.addEventListener('keydown', (evt) => {
      const openedPopup = document.querySelector('.popup_opened');
      if (openedPopup && evt.key === 'Escape') {
        closePopup(openedPopup);
      }
    });
  }
  profileAvatar.addEventListener('click', (evt) =>{
    openPopup(avatarPopup)
  })