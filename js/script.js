// Mobile hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth fade-in for content
document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("main");
  mainContent.style.opacity = 0;
  setTimeout(() => { mainContent.style.transition = "opacity 1s"; mainContent.style.opacity = 1; }, 100);
});
