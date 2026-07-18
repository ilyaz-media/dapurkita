const menuList = document.getElementById("menu-list");

function renderMenu(data) {
    menuList.innerHTML = "";

    data.forEach((menu) => {
        menuList.innerHTML += `
            <div class="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                <!-- Gambar -->
                <div class="relative overflow-hidden">
                    <img
                        src="${menu.gambar}"
                        alt="${menu.nama}"
                        class="w-full h-40 object-cover group-hover:scale-110 transition duration-500">

                    <!-- Badge Kategori -->
                    <span
                        class="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                        ${menu.kategori}
                    </span>
                </div>

                <!-- Content -->
                <div class="p-6">

                    <h3 class="text-2xl font-bold text-gray-900">
                        ${menu.nama}
                    </h3>

                    <p class="text-gray-500 mt-3 leading-7 line-clamp-2">
                        ${menu.deskripsi}
                    </p>

                    <div class="mt-6 flex items-center justify-between">

                        <div>
                            <p class="text-sm text-gray-400">
                                Harga
                            </p>

                            <h4 class="text-2xl font-extrabold text-primary">
                                Rp ${menu.harga.toLocaleString("id-ID")}
                            </h4>
                        </div>

                        <button
                            class="bg-primary hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg">

                            <i class="fa-solid fa-cart-shopping mr-2"></i>
                            Pesan

                        </button>

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
        if (kategori === "Semua") {
            renderMenu(menus);
        } else {
            const hasil = menus.filter((menu) => menu.kategori === kategori);
            renderMenu(hasil);
        }

    });
});