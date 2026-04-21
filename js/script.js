document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect
    document.body.classList.add("fade-in");

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.getElementById("nav-list");

    if (menuToggle && navList) {
        menuToggle.addEventListener("click", function () {
            navList.classList.toggle("show");
        });
    }
});
