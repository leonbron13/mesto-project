


import { openPopup,
          closePopup          
        } from "./modal.js";
import { cardTemplate, 
  gallery,
  popupPicture,
    pictureImage,
     pictureTitle,
      myId, 
      popupConfirm,
      formSubmit
    } from "../components/consts.js";
import { deleteCard, delLike, addLike } from "./api.js";

function checkButtonLike(button, count, id) {
  if (button.classList.contains('card__like-button_checked')) {
    delLike(id, count)
      .then((item) => {
        count.textContent = item.likes.length;
        button.classList.remove('card__like-button_checked');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  else {
    addLike(id, count)
      .then((item) => {
        count.textContent = item.likes.length;
        button.classList.add('card__like-button_checked');
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

function createCard(item) {

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const elementImage = cardElement.querySelector('.card__img');
  const elementCaption = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__trash');
  const likesCount = cardElement.querySelector('.card__like-text');
  const likeButton = cardElement.querySelector('.card__like-button');


  elementImage.setAttribute('src', item.link);
  elementImage.setAttribute('alt', item.name);
  elementCaption.textContent = item.name;
  likesCount.textContent = item.likes.length;




  item.likes.forEach((i) => {
    if (i._id === myId.id) {
      likeButton.classList.add('card__like-button_checked');
    }
  });

  if (myId.id !== item.owner._id) {
    deleteButton.classList.add('card__trash_hidden')
  }

  deleteButton.addEventListener('click', () => {
    deleteCard(item._id)
      .then(() => {
        openPopup(popupConfirm)
        formSubmit.addEventListener('click', () => {
          deleteButton.closest('.card').remove();
          closePopup(popupConfirm);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  likeButton.addEventListener('click', (evt) => {
    checkButtonLike(evt.target, likesCount, item._id)
  })

  elementImage.addEventListener('click', () => {
    openPopup(popupPicture);
    pictureImage.src = elementImage.src;
    pictureImage.alt = elementImage.alt;
    pictureTitle.textContent = elementCaption.textContent;
  });

  return cardElement;
}

export function addCard(item, container) {
  const cardElement = createCard(item);
  container.prepend(cardElement);
}

export function createInitialCardsBlock(cards) {
  cards.reverse().forEach((item) => {
    addCard(item, gallery);
  });
}