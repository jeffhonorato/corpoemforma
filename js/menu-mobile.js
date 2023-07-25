const menuMobile = document.querySelector(".js-menu-mobile");
const navMenu = document.querySelector(".nav__menu");
const body = document.querySelector(".js-body")

menuMobile.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// body.addEventListener("click", () => {
//     if(navMenu.classList.toggle("show")) {
//         return true;
//     }
// })

