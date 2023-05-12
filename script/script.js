//--------------------------------------------------------CONSTS-----------------------------------
const popup = document.querySelector('.popup'); 
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const cardsCollection = document.querySelector('.cards');
const cards = cardsCollection.children;
const popupSample = document.querySelector('.popup__sample');
const addButton = document.querySelector('.profile__add-button'); 
const closeForm = document.querySelector('.profile__close-button');
const confirmButton = document.querySelector('.popup__confirm-button');
const popupName = document.querySelector('.popup__input-name');
const popupStatus = document.querySelector('.popup__input-status');
const profileName = document.querySelector('.profile__name');
const profileStatus= document.querySelector('.profile__status');
const gallery = document.getElementById('gallery');
const galleryTemplate = document.getElementById('card-template').content;
const galleryCard = galleryTemplate.querySelector('.card');
const popupPicture = document.querySelector('#popup-picture');
const pictureImage = popupPicture.querySelector('#picture-image');
const pictureTitle = popupPicture.querySelector('#picture-title');
const formCard = document.getElementById('form-card');
const cardName = formCard.querySelector('#card-name');
const cardLink = formCard.querySelector('#card-link');

const initialCards = [
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

//------------------------------------------------CLOSE-----------------------------------------
function closePopup (popup){
    popup.classList.remove('popup_opened');
};

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
      closePopup(button.closest('.popup'));
  });
});

//--------------------------------------------------OPEN--------------------------------------

function openPopup(item) {
    item.classList.add('popup_opened');
    
};

editButton.addEventListener('click', () =>{
    openPopup(popup)
});
////-----------------------------------------------------------------------CREATECARD-----------------------------------------------------------------------------//

function createCard (item) {
  let clone = galleryCard.cloneNode(true);
  let name = clone.querySelector('.card__title');
  let picture = clone.querySelector('.card__img');
  let trash = clone.querySelector('.card__trash');
  let like = clone.querySelector('.card__like-button');

  name.innerText = item.name;
  picture.src = item.link;
  picture.alt = item.name;

  trash.addEventListener('click', (e) => {
      clone.remove();
  });

  like.addEventListener('click', (e) => {
    like.classList.toggle('card__like-button_checked');
  });

  picture.addEventListener('click', (e) => {
    openPopup(popupPicture);

    pictureImage.src = item.link;
    pictureImage.alt = item.name;
    pictureTitle.innerText = item.name;
  });

  return clone;
};
//----------------------------------------------------------------------------CARDS---------------------------------
initialCards.forEach(it => {
  gallery.appendChild(createCard(it));
});

formCard.addEventListener('submit', (e) => {
  e.preventDefault();

  gallery.prepend(createCard({ name: cardName.value, link: cardLink.value }));
  cardName.value = '';
  cardLink.value = '';

  popupSample.classList.remove('popup__sample_opened');
});


////-----------------------------------------------------------------------EDITFORM-----------------------------------------------------------------------------//

function addForm (){
    popupSample.classList.add('popup__sample_opened');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
};
function closeWindow (){
    popupSample.classList.remove('popup__sample_opened');
};

confirmButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    closePopup(popup);
  });
  
addButton.addEventListener('click', addForm);
closeForm.addEventListener('click', closeWindow);

