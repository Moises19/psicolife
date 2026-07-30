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

/*========================================
    Back To Top
========================================*/

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {

        backToTop.classList.add('show');

    } else {

        backToTop.classList.remove('show');

    }

});

backToTop.addEventListener('click', () => {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });

});