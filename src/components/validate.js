import {
  formList,
  config
} from "./consts.js";

export function showInputError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorActiveClass);
}

export function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.inputErrorActiveClass);
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
 


export function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.buttonSaveSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      updateButtonColor(formElement, buttonElement);
    });
    updateButtonColor(formElement, buttonElement);
  });
}

export function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

export function enableValidation(config) {
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
}

export function toggleButtonState(button, newText, originalText, duration = 3000) {
  if (button) {
    const originalButtonText = button.textContent;
    button.textContent = newText;

    setTimeout(() => {
      button.textContent = originalButtonText;
    }, duration);
  }
}

