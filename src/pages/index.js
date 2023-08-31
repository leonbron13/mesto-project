import '../pages/index.css';
import { enableValidation } from '../components/validate.js';
import { editProfile, addCardServer, changeAvatar, getCards, getProfile} from '../components/api.js';
import { closePopup,
    openPopup, 
    setCloseByOverlayListeners, 
   } from "../components/modal.js";
import { addCard, createInitialCardsBlock } from "../components/card.js";
import { newAvatarLinkInput,
formChangeElement,
popupProfileOpenButton,
profileAvatar,
popupProfileAddButton,
formEditElement, 
formAddCardElement,
profilePopup,
popupAddCard,
   cardName,
    cardLink,
     gallery,
      popupSample,
       popupName, 
        popupStatus,
         profileName,
          profileStatus,
           profile,
             cardAddButton,
              myId,
               avatarPopup,
                avatarPopupSubmitButton, 
                config,
                popupCloseButton
              } from '../components/consts.js';


profileAvatar.addEventListener('click', () => {
  openPopup(avatarPopup);
})
popupCloseButton.forEach((button) => {
  button.addEventListener('click', () => {  
      closePopup(button.closest('.popup'));
  });
});
setCloseByOverlayListeners()
popupProfileOpenButton.addEventListener('click', () => {
  openPopup(profilePopup);
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
});
popupProfileAddButton.addEventListener('click', () => { openPopup(popupAddCard); });

formEditElement.addEventListener('submit', handleProfileFormSubmit);
formAddCardElement.addEventListener('submit', handleAddCardFormSubmit);
formChangeElement.addEventListener('submit', handleChangeAvatarFormSubmit);

Promise.all([getProfile(), getCards()])
  .then(([profileData, cardsData]) => {
    myId.id = profileData._id;
    renderProfile(profileData.name, profileData.about, profileData.avatar);
    createInitialCardsBlock(cardsData);
  })
  .catch((err) => {
    console.log(err);
  });
  
enableValidation(config);
              
function createCardObject() {
  const card = {};
  card.name = cardName.value;
  card.link = cardLink.value;
  return card;
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(evt.submitter, true);
  const body = {};
  body.name = popupName.value;
  body.about = popupStatus.value;

  editProfile(body)
    .then((data) => {
      profileName.textContent = data.name;
      profileStatus.textContent = data.about;
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(evt.submitter, false);
    })
}

export function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(evt.submitter, true);
  addCardServer(createCardObject())
    .then((data) => {
      addCard({ name: data.name, link: data.link, owner: data.owner, likes: data.likes, _id: data._id }, gallery)
      evt.target.reset();
      cardAddButton.classList.add("invalid");
      cardAddButton.disabled = true;
      closePopup(popupSample);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(evt.submitter, false);
    })
}

export function handleChangeAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(evt.submitter, true);
  const body = {};
  body.avatar = newAvatarLinkInput.value;
  changeAvatar(body)
    .then((data) => {
      profile.src = data.avatar;
      evt.target.reset();
      
      avatarPopupSubmitButton.classList.add("invalid");
      avatarPopupSubmitButton.disabled = true;
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(evt.submitter, false);
    })
}

export function renderProfile(name, popupStatus, url) {
  profileName.textContent = name;
  profileStatus.textContent = popupStatus;
  profile.src = url;
}

function renderLoading(button, isLoading) {
  if(isLoading) {
    button.textContent = "Сохранение...";
  }
  else {
    button.textContent = "Сохранить";
  }
}




















