const buttons = document.querySelectorAll(".cross-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".directors-profile")
          .classList.toggle("active");
  });
});

const closeBtn = document.querySelectorAll(".btn-close");

closeBtn.forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".directors-profile")
          .classList.toggle("active");
  });
});