"use strict";

// Function to dynamically load HTML sections
function loadsection(selector, filePath) {
  const element = document.querySelector(selector);

  if (!element) {
    console.error(`Element ${selector} not found`);
    return;
  }

  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      element.outerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Load sections
loadsection("header", "./sections/header.html");
loadsection("footer", "./sections/footer.html");

loadsection("#hero", "./sections/hero.html");
loadsection("#services", "./sections/services.html");
loadsection("#mission", "./sections/mission.html");
loadsection("#our-approach", "./sections/our-approach.html");
loadsection("#our-values", "./sections/our-values.html");
loadsection("#testimonials", "./sections/testimonials.html");
loadsection("#subscription", "./sections/subscription.html");

setTimeout(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
}, 500);