// consts.js

export const profilePopup = document.querySelector('.profile-popup');
export const popupProfileOpenButton= document.querySelector('.profile__edit-button');
export const popupCloseButton = document.querySelectorAll('.popup__close-button');
export const cardsCollection = document.querySelector('.cards');
export const cards = cardsCollection.children;
export const popupSample = document.querySelector('.popup__sample');
export const popupProfileAddButton = document.querySelector('.profile__add-button');
export const popupCloseForm = document.querySelector('.profile__close-button');
export const popupConfirmButton = document.querySelector('.popup__confirm-button');
export const popupName = document.querySelector('.popup__input-name');
export const popupStatus = document.querySelector('.popup__input-status');
export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');
export const gallery = document.getElementById('gallery');
export const galleryTemplate = document.getElementById('card-template').content;
export const galleryCard = galleryTemplate.querySelector('.card');
export const popupPicture = document.querySelector('#popup-picture');
export const pictureImage = popupPicture.querySelector('#picture-image');
export const pictureTitle = popupPicture.querySelector('#picture-title');
export const formCard = document.getElementById('form-card');
export const cardName = formCard.querySelector('#card-name');
export const cardLink = formCard.querySelector('#card-link');
export const avatarPopup = document.querySelector(".popup__avatar");
export const avatarForm = avatarPopup.querySelector(".popup__avatar_form");
export const newAvatarLinkInput = avatarForm.querySelector("#avatar-link");
export const avatarPopupSubmitButton = avatarForm.querySelector(".form__button");
export const profileAvatar = document.querySelector(".profile__avatar-edit");
export const overlayElements = document.querySelectorAll('.popup__overlay');
export const profile =  document.querySelector(".profile__avatar");
export const popupConfirm = document.querySelector(".popup-confirm");
export const formSubmit = document.querySelector(".form__submit");
export const popupLikeText = document.querySelector(".card__like-text");
export const button = document.querySelector('.popup__save-button');
export const cardAddButton = document.querySelector('.adding_button');
export const cardTemplate = document.querySelector("#card-template").content;
export const formList = Array.from(document.querySelectorAll('.form')); 
export const popupDeleteCard = document.querySelector(".popup_type_delete-card");
export const config = {
  inputSelector: '.form__input', 
  inputErrorClass: 'form__input_type_error', 
  inputErrorActiveClass: 'form__input-error_active', 
  buttonSaveSelector: '.popup__save-button',
  buttonInvalidClass: 'invalid', 
  formList: 'formList'
};

export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];