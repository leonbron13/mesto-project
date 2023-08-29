import {
  formList,
  config, // импортируйте конфигурационный объект из consts.js
} from "./consts.js";

export function showInputError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass); // используем значение из конфига
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorActiveClass); // используем значение из конфига
}

export function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass); // используем значение из конфига
  errorElement.classList.remove(config.inputErrorActiveClass); // используем значение из конфига
  errorElement.textContent = '';
}

export function updateButtonColor(formElement, buttonElement, config) {
  const isValid = formElement.checkValidity();
  if (isValid) {
    buttonElement.classList.remove(config.buttonInvalidClass); // используем значение из конфига
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(config.buttonInvalidClass); // используем значение из конфига
    buttonElement.disabled = true;
  }
}


export function setEventListeners(formElement, config) {
  updateButtonColor(form, button);
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector)); // используем значение из конфига
  const buttonElement = formElement.querySelector(config.buttonSaveSelector); // используем значение из конфига
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

export function enableValidation(config) {
  const formList = Array.from(document.querySelector(config.formSelector));
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
      button.textContent = originalButtonText;
    }, duration);
  }
}
