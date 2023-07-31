const menuMobile = document.querySelector(".js-menu-mobile");
const navMenu = document.querySelector(".nav__menu");
const body = document.querySelector(".js-body")

menuMobile.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// body.addEventListener("click", (e) => {
//     if(e.target.id=="js-body" || e.target.id=="js-ico-menu-mobile") {
//         navMenu.classList.remove("show");
//     };
// });

