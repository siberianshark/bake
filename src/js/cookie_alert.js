import { cookieAlertBox } from "./main.js";

export const generateCookieAlert = () => {
  const cookieAlertHTML = `
    <!-- Cookie alert -->
      <div class="cookie-alert" role="alert" aria-label="cookies">
        <!-- Container -->
        <div class="container">
          <!-- Cookie alert heading -->
          <h2 class="cookie-alert__heading">S</h2> 
          <!-- Cookie alert heading -->
          <!-- Cookie alert message -->
          <p class="cookie-alert__message">cookies.</p>
          <p class="cookie-alert__message">K</p>
          <p class="cookie-alert__message"></p>
          <!-- Cookie alert message -->
          <!-- Cookie alert button -->
          <button type="button" class="cookie-alert__button" aria-label="#">1</button>
          <!-- Cookie alert button -->
        </div> 
        <!-- Container -->
      </div> 
    <!-- Cookie alert -->
  `;

  document.body.insertAdjacentHTML("afterbegin", cookieAlertHTML);
}

export const checkCookie = () => {
  const cookieAccepted = localStorage.getItem("cookieAccepted");

  if (cookieAccepted === "true") {
    cookieAlertBox.remove();
  } else {
    cookieAlertBox.setAttribute("tabindex", "-1");
    cookieAlertBox.focus();
  }
}

export const handleCookieAlert = () => {
  localStorage.setItem("cookieAccepted", "true");
  cookieAlertBox.remove();
}