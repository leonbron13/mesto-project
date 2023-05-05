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
    console.log(cardElement)
    const cardTitle = document.querySelector('.profile__popup-title');
    const cardImg = document.querySelector('.profile__popup-image');
    let newCardTitle  = cardTitle.value;
    let newCardImg = cardImg.value;
    cardElement.querySelector('.card__title').textContent = newCardTitle;
    cardElement.querySelector('.card__img').src = newCardImg;
    profile.classList.remove('profile__form_opened');


    deletteAction(cardElement)
    likeAction(cardElement)
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

    var cardElement
    trashBtn.addEventListener('click', () =>{
        cards   .classList.remove(cardElement)
        console.log('ПОЧЕМУ НЕ УДАЛЯЕТСЯ')
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


//Обработка формы редактирование профиля
confirmButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    console.log(123)
    popup.classList.remove('popup_opened');
  });
  


addButton.addEventListener('click', addForm);
closeForm.addEventListener('click', formClose);
confirmButton.addEventListener('click', formClose);

////-----------------------------------------------------------------------CARDIMAGE-----------------------------------------------------------------------------//

const imageCollection = document.querySelectorAll('.card__img');
const textCollection = document.querySelectorAll('.card__title');
const imagePopup = document.querySelector('.popup__open-image');
const imgsrc = imagePopup.querySelector('.popup__image');
const closeCard = document.querySelector('.popup__close-button_image');
const imgText = document.querySelector('.popup__subtitle');

for (let i = 0; i < imageCollection.length; i++ ){
    imageCollection[i].addEventListener('click', function(){
        imagePopup.classList.add('popup_opened');
        imgsrc.src = imageCollection[i].src;
        imgText.textContent = textCollection[i].textContent;

    });

}
function cardClose (){
    imagePopup.classList.remove('popup_opened')
};
closeCard.addEventListener('click', cardClose);
//----------------------------------------------------------------------------------------------------
/*function openImage(item) {
    let imageBtn = item.querySelector('.card__img');
    
    imageBtn.addEventListener('click', () => {
        imageBtn.classList.add('popup_opened');
        imgsrc.src = imageBtn.src;
        imgText.textContent = imageBtn.textContent;
    })
          
}
for (let i = 0; i < cards.length; i++) {
    openImage(cards[i])
}
function cardClose (){
    imagePopup.classList.remove('popup_opened')
};
closeCard.addEventListener('click', cardClose);*/









