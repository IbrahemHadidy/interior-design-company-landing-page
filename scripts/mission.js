"use strict";

function toggleFaq(element) {
  const faqContent = element.nextElementSibling;
  const expandIcon = element.querySelector(".icon-expand");
  const collapseIcon = element.querySelector(".icon-collapse");

  // Toggle height
  faqContent.classList.toggle("max-h-[200px]");
  faqContent.classList.toggle("max-h-0");

  // Toggle icon visibility
  expandIcon.classList.toggle("opacity-0");
  expandIcon.classList.toggle("opacity-100");

  collapseIcon.classList.toggle("opacity-100");
  collapseIcon.classList.toggle("opacity-0");
}
