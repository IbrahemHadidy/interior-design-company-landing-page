"use strict";

function toggleFaq(element) {
  const faqContent = element.nextElementSibling;
  const isOpen = faqContent.classList.contains("max-h-[200px]");
  const expandIcon = element.querySelector("#icon-expand");
  const collapseIcon = element.querySelector("#icon-collapse");

  if (isOpen) {
    faqContent.classList.remove("max-h-[200px]");
    faqContent.classList.add("max-h-0");

    expandIcon.classList.remove("opacity-0");
    expandIcon.classList.add("opacity-100");

    collapseIcon.classList.remove("opacity-100");
    collapseIcon.classList.add("opacity-0");
  } else {
    faqContent.classList.remove("max-h-0");
    faqContent.classList.add("max-h-[200px]");

    expandIcon.classList.remove("opacity-100");
    expandIcon.classList.add("opacity-0");

    collapseIcon.classList.remove("opacity-0");
    collapseIcon.classList.add("opacity-100");
  }
}
