const headerMenu = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger");
const headerBackdrop = document.querySelector(".header-backdrop");
const closeMenu = headerMenu.querySelector(".close-menu");

if (headerMenu && burgerMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        headerMenu.classList.toggle("menu-is-active");
        document.body.classList.toggle("overflow-hidden");
    });

    headerBackdrop.addEventListener("click", () => {
        burgerMenu.classList.remove("is-active");
        headerMenu.classList.remove("menu-is-active");
        document.body.classList.remove("overflow-hidden");
    });

    closeMenu.addEventListener("click", () => {
        burgerMenu.classList.remove("is-active");
        headerMenu.classList.remove("menu-is-active");
        document.body.classList.remove("overflow-hidden");
    });
}
