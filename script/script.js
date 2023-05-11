const popup = document.querySelector('.popup'); 
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
function popupOpened (){
    popup.classList.add('popup_opened');
};
function popupClose (){
    popup.classList.remove('popup_opened');
};

editButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClose);
////-----------------------------------------------------------------------EDITINFORM-----------------------------------------------------------------------------//
const saveButton = document.querySelector('.adding_button');
const cardsContainer = document.querySelector('.cards');


function addCard(titleValue, imageValue){
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    ;cardElement.querySelector('.card__img').src = imageValue;
    cardElement.querySelector('.card__title').textContent = titleValue

    cardsContainer.append(cardElement);
}

saveButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); 
    const cardTitle = document.querySelector('.profile__popup-title');
    const cardImg = document.querySelector('.profile__popup-image');
    let newCardTitle  = cardTitle.value;
    let newCardImg = cardImg.value;
    cardElement.querySelector('.card__title').textContent = newCardTitle;
    cardElement.querySelector('.card__img').src = newCardImg;
    profile.classList.remove('profile__form_opened');

    openImage(cardElement);
    deletteAction(cardElement);
    likeAction(cardElement);
    cardsContainer.insertBefore(cardElement, cardsContainer.firstChild);
    
  });
////-----------------------------------------------------------------------LIKES-----------------------------------------------------------------------------//

const cardsCollection = document.querySelector('.cards')
let cards = cardsCollection.children;

function likeAction(item) {
    let likeBtn = item.querySelector('.card__like-button');
    
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('card__like-button_checked');
    })
          
}
for (let i = 0; i < cards.length; i++) {
    likeAction(cards[i])

}
////-----------------------------------------------------------------------CARDDELETE-----------------------------------------------------------------------------//

function deletteAction(item){
    let trashBtn = item.querySelector('.card__trash')  

    trashBtn.addEventListener('click', () =>{
        item.remove();
    })
}

for (let i = 0; i < cards.length; i++){
    deletteAction(cards[i])
}



////-----------------------------------------------------------------------EDITFORM-----------------------------------------------------------------------------//
const profile = document.querySelector('.profile__form')
const addButton = document.querySelector('.profile__add-button'); 
const closeForm = document.querySelector('.profile__close-button');
const confirmButton = document.querySelector('.popup__confirm-button')
let popupName = document.querySelector('.popup__input-name')
let popupStatus = document.querySelector('.popup__input-status')
let profileName = document.querySelector('.profile__name')
let profileStatus= document.querySelector('.profile__status')


function addForm (){
    profile.classList.add('profile__form_opened');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
};
function formClose (){
    profile.classList.remove('profile__form_opened');
};


//Обработка формы редактирования профиля
confirmButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    popup.classList.remove('popup_opened');
  });
  


addButton.addEventListener('click', addForm);
closeForm.addEventListener('click', formClose);
confirmButton.addEventListener('click', formClose);

////-----------------------------------------------------------------------CARDIMAGE-----------------------------------------------------------------------------//
/*
const image = document.querySelector('.card__img');
const text = document.querySelector('.card__title');
const imagePopup = document.querySelector('.popup__open-image');
const imgsrc = imagePopup.querySelector('.popup__image');
const closeCard = document.querySelector('.popup__close-button_image');
const imgText = document.querySelector('.popup__subtitle');

for (let i = 0; i < imageCollection.length; i++ ){
    imageCollection[i].addEventListener('click', function(){
        imagePopup.classList.add('popup_opened');
        imgsrc.src = image.src;
        imgText.textContent = text.textContent;

    });

}
function cardClose (){
    imagePopup.classList.remove('popup_opened')
};
closeCard.addEventListener('click', cardClose);*/
//----------------------------------------------------------------------------------------------------
const closeCard = document.querySelector('.popup__close-button_image');
const imagePopup = document.querySelector('.popup__open-image');
const imgsrc = imagePopup.querySelector('.popup__image');

function openImage(item) {
    let imgbtn = item.querySelector('.card__img');
    let image = item.querySelector('.card__img');
    let cardTitle = item.querySelector('.card__title');
    let cardSubtitle = document.querySelector('.popup__subtitle'); 
    
    imgbtn.addEventListener('click', () => {
        imagePopup.classList.add('popup_opened');
        for (let i = 0; i < cards.length; i++) {
            let openImage = image.src;
            let openValue = cardTitle.textContent;
            cardSubtitle.textContent = openValue;
            imgsrc.src = openImage;
        }
    })
        
}
for (let i = 0; i < cards.length; i++) {
    openImage(cards[i]);
}

function cardClose() {
    imagePopup.classList.remove('popup_opened');
};

closeCard.addEventListener('click', cardClose);
