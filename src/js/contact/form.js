import {
  firstNameInput,
  lastNameInput,
  emailAddressInput,
  contactSelect,
  messageTextarea,
  charsCounter,
  contactFormControls,
} from "../main.js";

import handlePopup from "./popup.js";

// Form-related functions

export const setInitialCharsCounter = () => {
  charsCounter.innerHTML = `<span>${messageTextarea.value.length}</span>/${messageTextarea.maxLength}`;
}

export const handleFormClear = (event) => {
  event.preventDefault();

  contactFormControls.forEach((input) => {
    input.value = "";
    clearError(input);
  });
}

export const handleFormSubmit = (event) => {
  event.preventDefault();

  checkForm([firstNameInput, lastNameInput, emailAddressInput, messageTextarea]);
  checkEmailAddress(emailAddressInput);
  checkSelect(contactSelect);
  // Symulacja wysyłania formularza
  setTimeout(handlePopup, 1000);
}

const checkForm = (inputs) => {
  inputs.forEach((input) => {
    input.value === "" ? showError(input, `Поле "${input.previousElementSibling.textContent.slice(0, -2)}" Ошибка`) : clearError(input);
  });
}

const checkEmailAddress = (emailAddressInput) => {
  const regExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  
  if (emailAddressInput.value === "") {
    showError(emailAddressInput, 'Ошибка поля');
  } else if (!regExp.test(emailAddressInput.value)) {
    showError(emailAddressInput, 'Ошибка');
  } else {
    clearError(emailAddressInput);
  }
}

const checkSelect = (contactSelect) => {
  if (contactSelect.value === "") {
    showError(contactSelect, "Ошибка");
  } else {
    clearError(contactSelect);
  }
}

export const handleTextarea = () => {
  charsCounter.innerHTML = `<p class="contact__form-counter"><span>${messageTextarea.value.length}</span>/${messageTextarea.maxLength}</p>`;

  if (messageTextarea.value.length === messageTextarea.maxLength) {
    messageTextarea.value = messageTextarea.value.slice(0, messageTextarea.maxLength + 1);
    showError(messageTextarea, `Ограничение ${messageTextarea.maxLength} знаков.`);
  } else {
    clearError(messageTextarea);
  }
}

const showError = (input, message) => {
  input.style.borderColor = "hsl(0, 100%, 40%)";
  input.parentElement.querySelector(".contact__form-error").textContent = message;
  input.parentElement.querySelector(".contact__form-error").classList.add("contact__form-error--active");
}

const clearError = (input) => {
  input.style.borderColor = "hsl(0, 0%, 25%)";
  input.parentElement.querySelector(".contact__form-error").textContent = "";
  input.parentElement.querySelector(".contact__form-error").classList.remove("contact__form-error--active");
}