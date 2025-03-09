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
    menuBtn.addEventListener("click", () => {
      menu.classList.remove("translate-x-full");
      menu.classList.add("translate-x-0");
    });

    // Close Menu
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("translate-x-0");
      menu.classList.add("translate-x-full");
    });

    // Click outside to close menu
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.add("translate-x-full");
      }
    });
  }
}, 500);
