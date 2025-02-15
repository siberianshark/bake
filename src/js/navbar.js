import { navbarLinksContainer, toggleButton, overlay } from "./main.js";

export const toggleNavbarMenu = () => {
  toggleButton.classList.toggle("navbar__burger-icon--active");
  navbarLinksContainer.classList.toggle("navbar__links--active");
  overlay.classList.toggle("navbar__overlay--active");

  if (navbarLinksContainer.classList.contains("navbar__links--active")) {
    toggleButton.setAttribute("aria-expanded", "true");
    toggleButton.setAttribute("aria-label", "menu");
  } else {
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-label", "menu");
  }
}

export const closeNavbarMenu = () => {
  overlay.classList.remove("navbar__overlay--active");
  toggleButton.classList.remove("navbar__burger-icon--active");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "menu");
  navbarLinksContainer.classList.remove("navbar__links--active");
}