// utils.js

import { openPopup, closePopup } from './modal.js';
import { popupSample } from './consts.js';

export function addForm() {
  openPopup(popupSample);
}

export function closeWindow() {
  closePopup(popupSample);
}
