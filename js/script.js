// ============================
// DapurKita Landing Page
// ============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Website DapurKita siap 🚀");

});
// ================================
// navbar
// ==============================

const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");

// Ambil semua link di navbar
const navLinks = navbar.querySelectorAll("a");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        // Background Navbar
        navbar.classList.add("bg-white", "shadow-lg");
        navbar.classList.remove("bg-transparent");

        // Logo
        logo.classList.remove("text-white");
        logo.classList.add("text-black");

        // Semua link berubah menjadi hitam
        navLinks.forEach(link => {

            // Jangan ubah link yang memang berwarna primary
            if (!link.classList.contains("text-primary")) {
                link.classList.remove("text-white");
                link.classList.add("text-black");
            }

        });

    } else {

        // Navbar transparan
        navbar.classList.remove("bg-white", "shadow-lg");
        navbar.classList.add("bg-transparent");

        // Logo
        logo.classList.remove("text-black");
        logo.classList.add("text-white");

        // Semua link kembali putih
        navLinks.forEach(link => {

            if (!link.classList.contains("text-primary")) {
                link.classList.remove("text-black");
                link.classList.add("text-white");
            }

        });

    }

});


// promo ===========
new Swiper(".promoSlider", {

    loop: true,

    speed: 900,

    autoplay: {

        delay: 4500,

        disableOnInteraction: false,

    },

    effect: "fade",

    fadeEffect: {

        crossFade: true,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

});