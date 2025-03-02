document.addEventListener("DOMContentLoaded", () => {
    feather.replace(); // Panggil feather.replace() di sini
    const loadingScreen = document.querySelector(".loadingScreen");
    const body = document.body;

    // Tambahkan kelas no-scroll untuk mencegah scroll
    body.classList.add("no-scroll");

    // Simulasi pemuatan konten
    setTimeout(() => {
        loadingScreen.style.display = "none"; 
        body.classList.remove("no-scroll"); // Hapus kelas no-scroll setelah loading selesai
    }, 3000); // Ganti dengan logika pemuatan data Anda
});

// SHOPPING CART
const cart = document.querySelector('.shopping-cart-buy');
document.querySelector('#shopping-cart').onclick = (event) => {
    cart.style.right = '0';
    event.preventDefault();
    document.querySelector('#close-shopping-cart-buy').onclick = () => {
        cart.style.right = '-300%'; 
    };
}

// Responsive 
const navbar = document.querySelector('.navigation');
const sidebar = document.querySelector('.sidebar')
    // Menu
    document.querySelector('#menu').
    onclick = (event) => {
        event.preventDefault();
        navbar.classList.toggle('active');
    }
    document.querySelector('.filter').
    onclick = (event) => {
        event.preventDefault();
        sidebar.style.right = '0';
        event.preventDefault();
        document.querySelector('#close-icon').onclick = () => {
            sidebar.style.right = '-100%'; 
        };
    }

