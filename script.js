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
});

function productTopi() {
    localStorage.setItem('clickedSidebarTopi', 'true');
    window.location.href = 'kategori.html'
}
    window.onload = function() {
        if (localStorage.getItem('clickedSidebarTopi') === 'true') {
            sidebarTopi(); 
            localStorage.removeItem('clickedSidebarTopi');
        }
    };
function productKacamata() {
    window.location.href = 'kategori.html'
    localStorage.setItem('clickedSidebarKacamata', 'true');
}
    window.onload = function() {
        if (localStorage.getItem('clickedSidebarKacamata') === 'true') {
            sidebarKacamata(); 
            localStorage.removeItem('clickedSidebarKacamata');
        }
    };
function productJamTangan() {
    window.location.href = 'kategori.html'
    localStorage.setItem('clickedSidebarJamTangan', 'true');
}
    window.onload = function() {
        if (localStorage.getItem('clickedSidebarJamTangan') === 'true') {
            sidebarJamTangan(); 
            localStorage.removeItem('clickedSidebarJamTangan');
        }
    };

// kategori
const jam = document.getElementById('Sidebar-jam');
const topi = document.getElementById('Sidebar-topi');
const normal = document.getElementById('Normal-Sidebar');
const kacamata = document.getElementById('Sidebar-kacamata');
const groupJam = document.querySelectorAll('.Product-JamTangan')
const groupKacamata = document.querySelectorAll('.Product-Kacamata')
const groupTopi = document.querySelectorAll('.Product-Topi')

jam.style.display = 'none';
topi.style.display = 'none';
kacamata.style.display = 'none';

function sidebarTopi() {
    // Menyembunyikan elemen yang tidak diperlukan
    topi.style.display = 'block'; 
    jam.style.display = 'none'; 
    kacamata.style.display = 'none';
    normal.style.display = 'none'; 

    // Menyembunyikan produk lain
    groupJam.forEach(function(product) {
        product.style.display = 'none'; 
    });
    groupKacamata.forEach(function(product) {
        product.style.display = 'none'; 
    });

    // Memunculkan produk topi
    groupTopi.forEach(function(product) {
        product.style.display = 'block'; 
    });
}
function sidebarKacamata() {
    // Menyembunyikan elemen yang tidak diperlukan
    kacamata.style.display = 'block';
    topi.style.display = 'none'; 
    jam.style.display = 'none'; 
    normal.style.display = 'none'; 

    // Menyembunyikan produk lain
    groupJam.forEach(function(product) {
        product.style.display = 'none'; 
    });
    groupTopi.forEach(function(product) {
        product.style.display = 'none'; 
    });

    // Memunculkan produk kacamata
    groupKacamata.forEach(function(product) {
        product.style.display = 'block'; 
    });
}
function sidebarJamTangan() {
    // Menyembunyikan elemen yang tidak diperlukan
    jam.style.display = 'block'; 
    topi.style.display = 'none'; 
    kacamata.style.display = 'none';
    normal.style.display = 'none'; 

    // Menyembunyikan produk lain
    groupTopi.forEach(function(product) {
        product.style.display = 'none'; 
    });
    groupKacamata.forEach(function(product) {
        product.style.display = 'none'; 
    });

    // Memunculkan produk jam tangan
    groupJam.forEach(function(product) {
        product.style.display = 'block'; 
    });
}

function home() {
    // Menyembunyikan elemen yang tidak diperlukan
    kacamata.style.display = 'none';
    topi.style.display = 'none'; 
    jam.style.display = 'none'; 
    normal.style.display = 'block'; 

    groupTopi.forEach(function(product) {
        product.style.display = 'block'; 
    });
    groupKacamata.forEach(function(product) {
        product.style.display = 'block'; 
    });
    groupJam.forEach(function(product) {
        product.style.display = 'block'; 
    });
}