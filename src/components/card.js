// card.js

import { openPopup, closePopup, overlay, esc} from './modal.js';
import { 
  popupConfirm, 
  cardsCollection, 
  formCard, 
  cardName, 
  cardLink, 
  gallery, 
  pictureImage, 
  pictureTitle, 
  popupPicture, 
  galleryCard,
  closeButtons,
  formSubmit,
  addButton
} from './consts.js';

export function deleteCard(cardElement) {
  cardElement.remove();
}

export function handleTrashClick(event) {
  const cardElement = event.target.closest('.card');
  const cardTrash = event.target.closest('.card__trash');
  if (cardTrash) {
    openPopup(popupConfirm);
    formSubmit.addEventListener('click', () => {
      deleteCard(cardElement);
      closePopup(popupConfirm);
    });
  }
}

cardsCollection.addEventListener('click', handleTrashClick);

export function createCard(item) {  
  const clone = galleryCard.cloneNode(true);
  const name = clone.querySelector('.card__title');
  const picture = clone.querySelector('.card__img');
  const like = clone.querySelector('.card__like-button');

  name.innerText = item.name;
  picture.src = item.link;
  picture.alt = item.name;

  like.addEventListener('click', () => {
    like.classList.toggle('card__like-button_checked');
  });

  picture.addEventListener('click', () => {
    openPopup(popupPicture);

    pictureImage.src = item.link;
    pictureImage.alt = item.name;
    pictureTitle.innerText = item.name;
  });

  return clone;
}

export function renderInitialCards(initialCards) {
  initialCards.forEach(it => {
    gallery.appendChild(createCard(it));
  });
}


closeButtons.forEach((button) => {
  button.addEventListener('click', () => {  
      closePopup(button.closest('.popup'));
  });
});
overlay();
esc();
