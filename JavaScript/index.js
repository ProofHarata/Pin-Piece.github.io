document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen dari DOM
    const shoppingCart = document.getElementById('shopping-cart');
    const cartContainer = document.getElementById('cart-container');
    const closeCart = document.getElementById('close-cart');

    // Fungsi untuk menampilkan cart-container
    shoppingCart.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah default action dari anchor
        cartContainer.style.display = 'block'; // Tampilkan cart-container
    });

    // Fungsi untuk menyembunyikan cart-container
    closeCart.addEventListener('click', function() {
        cartContainer.style.display = 'none'; // Sembunyikan cart-container
    });

    // Memeriksa localStorage saat halaman dimuat
    if (localStorage.getItem('clickedSidebarTopi') === 'true') {
        sidebarTopi(); 
        localStorage.removeItem('clickedSidebarTopi');
    } else if (localStorage.getItem('clickedSidebarKacamata') === 'true') {
        sidebarKacamata(); 
        localStorage.removeItem('clickedSidebarKacamata');
    } else if (localStorage.getItem('clickedSidebarJamTangan') === 'true') {
        sidebarJamTangan(); 
        localStorage.removeItem('clickedSidebarJamTangan');
    }
});

// Fungsi untuk mengatur kategori dan redirect
function product() {
    window.location.href = 'kategori.html';
}