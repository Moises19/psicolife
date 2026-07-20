/* ==========================================================
   PSICOLIFE
   MAIN.JS
   Lumine Studio
========================================================== */

/* ==========================================================
   MOBILE MENU
========================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll(".nav a");

if (menuToggle && nav && menuIcon) {

    menuToggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("nav-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuIcon.src = isOpen
            ? "assets/icons/lucide/x.svg"
            : "assets/icons/lucide/menu.svg";

    });

}

/* ==========================================================
   CERRAR MENÚ AL PULSAR UN ENLACE
========================================================== */

navLinks.forEach(link => {

    /* ==========================================================
   RESET MENU ON DESKTOP
========================================================== */

window.addEventListener("resize", () => {

    console.log(window.innerWidth);

    if (window.innerWidth >= 768) {

        nav.classList.remove("nav-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuIcon.src = "assets/icons/lucide/menu.svg";

    }

});

    link.addEventListener("click", () => {

        nav.classList.remove("nav-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuIcon.src = "assets/icons/lucide/menu.svg";

    });

});