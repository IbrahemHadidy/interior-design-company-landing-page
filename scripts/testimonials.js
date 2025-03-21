"use strict";

let index = 0;
let cards = [];

setTimeout(() => {
  cards = document.querySelectorAll("#testimony-cards > div");
  updateCardVisibility();
}, 1500);

function updateCardVisibility() {
  cards.forEach((card, i) => {
    card.classList.toggle("opacity-100", i === index);
  });
}

function showNextCard() {
  index = (index + 1) % cards.length;
  updateCardVisibility();
}

function showPreviousCard() {
  index = (index - 1 + cards.length) % cards.length;
  updateCardVisibility();
}

// Auto-slide every 6 seconds
setInterval(showNextCard, 6000);
