/* =====================================
   ELEMENTOS
===================================== */

const menuBtn = document.querySelector(".menu-hamburguer");
const mobileMenu = document.querySelector(".nav-mobile");
const links = document.querySelectorAll(".nav-mobile .nav-link");


/* =====================================
   ABRIR / FECHAR MENU
===================================== */

menuBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    menuBtn.classList.toggle("change");
    mobileMenu.classList.toggle("active");

});


/* =====================================
   FECHAR AO CLICAR FORA
===================================== */

document.addEventListener("click", () => {

    closeMenu();

});


/* impede fechar clicando dentro */
mobileMenu.addEventListener("click", (event) => {
    event.stopPropagation();
});


/* =====================================
   LINKS MOBILE
===================================== */

links.forEach(link => {

    link.addEventListener("click", () => {

        resetLinks();
        link.classList.add("active");

        closeMenu();

    });

});


/* =====================================
   FUNÇÕES AUXILIARES
===================================== */

function closeMenu() {
    menuBtn.classList.remove("change");
    mobileMenu.classList.remove("active");
    resetLinks();
}

function resetLinks() {
    links.forEach(link =>
        link.classList.remove("active")
    );
}

