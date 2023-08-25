// validate.js
import{
  openPopup,
  closePopup, 
  overlay, 
  esc
} from "../components/modal.js"
import{
  formList,
  button,
  profile,
  newAvatarLinkInput,
  avatarPopup

} from "./consts.js"
export function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
}

export function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}

export function updateButtonColor(formElement, buttonElement) {
  const isValid = formElement.checkValidity();
  if (isValid) {
    buttonElement.classList.remove('invalid');
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add('invalid');
    buttonElement.disabled = true;
  }
}

export function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      updateButtonColor(formElement, buttonElement);
    });
  });
}

export function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

export function enableValidation() {
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
}

export function toggleButtonState(button, newText, originalText, duration = 3000) {
  if (button) {
    const originalButtonText = button.textContent;
    button.textContent = newText;

    setTimeout(() => {

    }, duration);
  }
}

// Пример использования:



