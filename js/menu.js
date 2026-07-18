const menuList = document.getElementById("menu-list");

function renderMenu(data) {
    menuList.innerHTML = "";

    data.forEach((menu) => {
        menuList.innerHTML += `
            <div
    class="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

    <!-- Gambar -->
    <div class="relative overflow-hidden">

        <img
            src="${menu.gambar}"
            alt="${menu.nama}"
            class="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover group-hover:scale-110 transition duration-500">

        <!-- Badge -->
        <span
            class="absolute top-3 left-3 bg-primary text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">

            ${menu.kategori}

        </span>

    </div>

    <!-- Content -->
    <div class="p-5 sm:p-6">

        <h3
            class="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-1">

            ${menu.nama}

        </h3>

        <p
            class="text-sm sm:text-base text-gray-500 mt-3 leading-6 sm:leading-7 line-clamp-2">

            ${menu.deskripsi}

        </p>

        <!-- Harga & Tombol -->
        <div
            class="mt-6 flex flex-row  items-center justify-between gap-4">

            <!-- Harga -->
            <div>

                <p class="text-xs sm:text-sm text-gray-400">
                    Harga
                </p>

                <h4
                    class="text-xl sm:text-2xl font-extrabold text-primary">

                    Rp ${menu.harga.toLocaleString("id-ID")}

                </h4>

            </div>
                <span class="text-gray-700">
                            ⭐ 4.8
                        </span>

        </div>

    </div>

</div>
        `;
    });
}
renderMenu(menus);



// tombol kategori
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Menghilangkan class aktif dari semua tombol
        categoryButtons.forEach((btn) => {
            btn.classList.remove("bg-primary", "text-white");
            btn.classList.add("bg-orange-50", "text-gray-700");
        });

        // Memberi class aktif pada tombol yang diklik
        button.classList.remove("bg-orange-50", "text-gray-700");
        button.classList.add("bg-primary", "text-white");

        // Ambil kategori dari data-category
        const kategori = button.dataset.category;

        // Filter menu
        if (kategori === "semua") {
            renderMenu(menus);
        } else {
            const hasil = menus.filter((menu) => menu.kategori === kategori);
            renderMenu(hasil);
        }

    });
});