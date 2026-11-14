const menuToggle = document.querySelector(".menu-toggle");
const headerMenu = document.getElementById("header-menu");

menuToggle.addEventListener("click", function () {
    const isOpen = headerMenu.classList.toggle("is-open");

    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});