const crossFlip = document.querySelectorAll(".directors-profile");


crossFlip.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});


