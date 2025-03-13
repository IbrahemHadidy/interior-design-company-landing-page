"use strict";

function toggleFaq(element) {
  const faqContent = element.nextElementSibling;
  const isOpen = faqContent.classList.contains("open");

  if (isOpen) {
    faqContent.classList.remove("open");
    element.classList.remove("active");
  } else {
    faqContent.classList.add("open");
    element.classList.add("active");
  }
}
