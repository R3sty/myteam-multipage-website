const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
});