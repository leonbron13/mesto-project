import '../pages/index.css';


const interBlack = new URL('../vendor/fonts/Inter-Black.woff', import.meta.url);
const interBlack2 = new URL('../vendor/fonts/Inter-Black.woff2', import.meta.url);
const interMedium = new URL('../vendor/fonts/Inter-Medium.woff', import.meta.url);
const interMedium2 = new URL('../vendor/fonts/Inter-Medium.woff2', import.meta.url);
const interRegular = new URL('../vendor/fonts/Inter-Regular.woff', import.meta.url);
const interRegular2 = new URL('../vendor/fonts/Inter-Regular.woff2', import.meta.url);

const add = new URL('../images/add.svg', import.meta.url);
const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url);
const arkhyzSvg = new URL('../images/arkhyz.svg', import.meta.url)
const avatar = new URL('../images/avatar.jpg', import.meta.url)
const baikal = new URL('../images/baikal.jpg', import.meta.url)
const chelyabinsk = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url)
const close = new URL('../images/close.svg', import.meta.url)
const dombai = new URL('../images/dombai.jpg', import.meta.url)
const edit = new URL('../images/edit.svg', import.meta.url)
const elbrus = new URL('../images/elbrus.jpg', import.meta.url)
const ivanovo = new URL('../images/ivanovo.jpg', import.meta.url)
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url)
const karachaevo = new URL('../images/karachaevo.jpg', import.meta.url)
const kholmogorsky = new URL('../images/kholmogorsky-rayon.jpg', import.meta.url)
const like_cheched = new URL('../images/like_cheched.svg', import.meta.url)
const like = new URL('../images/like.svg', import.meta.url)
const logo = new URL('../images/logo.svg', import.meta.url)
const trash = new URL('../images/trash.svg', import.meta.url)
const Vector1 = new URL('../images/Vector1.png', import.meta.url)

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'add', image: add },
  { name: 'arkhyz', image: arkhyz },
  { name: 'arkhyzSvg', image: arkhyzSvg },
  { name: 'avatar', image: avatar },
  { name: 'baikal', image: baikal },
  { name: 'chelyabinsk', image: chelyabinsk },
  { name: 'close', image: close },
  { name: 'dombai', image: dombai },
  { name: 'edit', image: edit },
  { name: 'elbrus', image: elbrus },
  { name: 'ivanovo', image: ivanovo },
  { name: 'kamchatka', image: kamchatka },
  { name: 'karachaevo', image: karachaevo },
  { name: 'kholmogorsky', image: kholmogorsky },
  { name: 'like_cheched', image: like_cheched },
  { name: 'like', image: like },
  { name: 'logo', image: logo },
  { name: 'trash', image: trash },
  { name: 'Vector1', image: Vector1 },
  { name: 'interBlack', link: interBlack },
  { name: 'interBlack2', link: interBlack2 },
  { name: 'interMedium', link: interMedium },
  { name: 'interMedium2', link: interMedium2 },
  { name: 'interRegular', link: interRegular },
  { name: 'interRegular2', link: interRegular2 },
]; 


import { 
  deleteCard, 
  handleTrashClick, 
  createCard, 
  renderInitialCards,
} from '../components/card.js';

import { 
  enableValidation,
toggleButtonState
} from '../components/validate.js';

  import {
    initialCards,
    addButton,
    closeForm,
    editButton,
    confirmButton,
    profilePopup,
    popupName,
    popupStatus,
    profileName,
    profileStatus,
    avatarPopupSubmitButton,
    newAvatarLinkInput,
    avatarPopup,
    profile,
    formCard, 
  cardName, 
  cardLink,
  popupSample,
    addingButton,

  } from '../components/consts.js';
  import{
    addForm,
    closeWindow
  } from "../components/utils.js"
  import{
    openPopup,
    closePopup, 
    overlay, 
    esc
  } from "../components/modal.js"

  renderInitialCards(initialCards);
  addButton.addEventListener('click', addForm); 
  closeForm.addEventListener('click', closeWindow);

  formCard.addEventListener('submit', (e) => {
    e.preventDefault();
    
    toggleButtonState(addingButton, 'Сохранение...', 'Сохранить', 2000); 
    setTimeout(() => {
      gallery.prepend(createCard({ name: cardName.value, link: cardLink.value }));
      cardName.value = '';
      cardLink.value = '';
      closePopup(popupSample);
      toggleButtonState(addingButton, 'Сохранить', 'Сохранение...');
    }, 2000); 
    
  });
  


  confirmButton.addEventListener('click', (evt) => {
    evt.preventDefault();



    
    toggleButtonState(confirmButton, 'Сохранение...', 'Сохранить', 2000); 
  setTimeout(() => {
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    closePopup(profilePopup);
    toggleButtonState(confirmButton, 'Сохранить', 'Сохранение...');
  }, 2000); 
    
  });
  

editButton.addEventListener('click', () =>{
  
  popupName.value = profileName.textContent
  popupStatus.value = profileStatus.textContent
  openPopup(profilePopup)
});




avatarPopupSubmitButton.addEventListener('click', () =>{
  toggleButtonState(avatarPopupSubmitButton, 'Сохранение...', 'Сохранить', 2000); 
  setTimeout(() => {
    profile.src = newAvatarLinkInput.value; 
    closePopup(avatarPopup); 
    toggleButtonState(avatarPopupSubmitButton, 'Сохранить', 'Сохранение...');
  }, 2000); 
});


  enableValidation()