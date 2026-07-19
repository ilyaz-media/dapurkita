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
const menuLinks = document.querySelectorAll(".menu-link");
const menuButton = document.getElementById("menuButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        // Navbar
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-white", "shadow-lg");

        // Logo
        logo.classList.remove("text-white");
        logo.classList.add("text-black");

        // Menu
        menuLinks.forEach(link => {
            link.classList.remove("text-white");
            link.classList.add("text-black");
        });

        // Hamburger
        menuButton.classList.remove("text-white");
        menuButton.classList.add("text-black");

    } else {

        // Navbar
        navbar.classList.remove("bg-white", "shadow-lg");
        navbar.classList.add("bg-transparent");

        // Logo
        logo.classList.remove("text-black");
        logo.classList.add("text-white");

        // Menu
        menuLinks.forEach(link => {
            link.classList.remove("text-black");
            link.classList.add("text-white");
        });

        // Hamburger
        menuButton.classList.remove("text-black");
        menuButton.classList.add("text-white");

    }

});

// ================================
// Mobile Menu
// ================================

const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Buka menu
menuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");
});

// Tutup menu
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("right-0");
    mobileMenu.classList.add("right-[-100%]");
});

// Tutup menu saat link dipilih
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("right-0");
        mobileMenu.classList.add("right-[-100%]");
    });
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



// booking
function bookingWA() {

    const nama = document.getElementById("nama").value.trim();
    const wa = document.getElementById("wa").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const jam = document.getElementById("jam").value;
    const orang = document.getElementById("orang").value;
    const catatan = document.getElementById("catatan").value.trim();

    if (
        nama === "" ||
        wa === "" ||
        tanggal === "" ||
        jam === "" ||
        orang === "Pilih jumlah tamu"
    ) {
        alert("Silakan lengkapi semua data terlebih dahulu.");
        return;
    }

    const pesan =
`Halo, saya ingin melakukan reservasi meja.

👤 Nama : ${nama}
📱 WhatsApp : ${wa}
📅 Tanggal : ${tanggal}
⏰ Jam : ${jam}
👥 Jumlah Tamu : ${orang}
📝 Catatan : ${catatan || "-"}

Mohon konfirmasi reservasi saya.
Terima kasih.`;

    const nomorWA = "6282129546021";

    const url =
        `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}