"use strict";

let menuBtn, closeBtn, menu;

function setSelectors() {
  menuBtn = document.querySelector("#mobile-menu-button");
  closeBtn = document.querySelector("#close-menu-button");
  menu = document.querySelector("#mobile-menu");
}

setTimeout(() => {
  setSelectors();

  if (menuBtn && closeBtn && menu) {
    // Open Menu
    menuBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      menu.classList.remove("hidden-menu");
      menu.classList.add("visible-menu");
    });

    // Close Menu
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("visible-menu");
      menu.classList.add("hidden-menu");
    });

    // Click outside to close menu
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("visible-menu");
        menu.classList.add("hidden-menu");
      }
    });

    // Prevent clicks inside menu from closing it
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
}, 500);
