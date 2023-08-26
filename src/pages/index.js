import '../pages/index.css';
import { 
  createCard, 
  renderInitialCards,
} from '../components/card.js';

import { 
  enableValidation,
toggleButtonState
} from '../components/validate.js';

  import {
    initialCards,
    popupProfileAddButton,
    popupCloseForm,
    popupProfileOpenButton,
    popupConfirmButton,
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
    cardAddButton,
    popupCloseButton,
    profileAvatar,
    

  } from '../components/consts.js';
  
  import{
    openPopup,
    closePopup, 
    overlay, 
    closeByEsc
  } from "../components/modal.js"




  renderInitialCards(initialCards);
  
  formCard.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    toggleButtonState(cardAddButton, 'Сохранение...', 'Сохранить', 2000); 
    setTimeout(() => {
      gallery.prepend(createCard({ name: cardName.value, link: cardLink.value }));
      cardName.value = '';
      cardLink.value = '';
      closePopup(popupSample);
      toggleButtonState(cardAddButton, 'Сохранить', 'Сохранение...');
      
      cardAddButton.classList.add("invalid")
      cardAddButton.disabled = true;
    }, 2000); 
    
  });
  


  popupConfirmButton.addEventListener('click', (evt) => {
    evt.preventDefault();



    
    toggleButtonState(popupConfirmButton, 'Сохранение...', 'Сохранить', 2000); 
  setTimeout(() => {
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    closePopup(profilePopup);
    toggleButtonState(popupConfirmButton, 'Сохранить', 'Сохранение...');
    popupConfirmButton.classList.add("invalid")
    popupConfirmButton.disabled = true;
  }, 2000); 
    
  });
  

popupProfileOpenButton.addEventListener('click', () =>{
  
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
    avatarPopupSubmitButton.classList.add("invalid")
    avatarPopupSubmitButton.disabled = true;
  }, 2000); 
});

popupCloseButton.forEach((button) => {
  button.addEventListener('click', () => {  
      closePopup(button.closest('.popup'));
  });
});
overlay();
document.addEventListener('keydown',  closeByEsc)

profileAvatar.addEventListener('click', (evt) =>{
  openPopup(avatarPopup)
})
  enableValidation()

  popupProfileAddButton.addEventListener('click', () => openPopup(popupSample)); 
  popupCloseForm.addEventListener('click', () => closePopup(popupSample));




