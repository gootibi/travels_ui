const headerMenu = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger");
const headerBackdrop = document.querySelector(".header-backdrop");
const closeMenu = headerMenu.querySelector(".close-menu");

if (headerMenu && burgerMenu) {
    burgerMenu.addEventListener("click", function() {
        burgerMenu.classList.toggle("is-active");
        headerMenu.classList.toggle("menu-is-active");
        document.body.classList.toggle("overflow-hidden");
    });

    headerBackdrop.addEventListener("click", function() {
        burgerMenu.classList.remove("is-active");
        headerMenu.classList.remove("menu-is-active");
        document.body.classList.remove("overflow-hidden");
    });

    closeMenu.addEventListener("click", function() {
        burgerMenu.classList.remove("is-active");
        headerMenu.classList.remove("menu-is-active");
        document.body.classList.remove("overflow-hidden");
    });
}

window.addEventListener("scroll", function() {
    if (this.scrollY >= 50) {
        headerMenu.classList.add("on-scroll");
    } else {
        headerMenu.classList.remove("on-scroll");
    }
});
