document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loadingScreen = document.querySelector(".loadingScreen");
    const body = document.body;
        // Tambahkan kelas no-scroll untuk mencegah scroll
        body.classList.add("no-scroll");

        // Simulasi pemuatan konten
        setTimeout(() => {
            loadingScreen.style.display = "none"; 
            body.classList.remove("no-scroll"); // Hapus kelas no-scroll setelah loading selesai
        }, 3000); // Ganti dengan logika pemuatan data Anda

    // Ambil elemen dari DOM
    const shoppingCart = document.getElementById('shopping-cart');
    const cartContainer = document.getElementById('cart-container');
    const closeCart = document.getElementById('close-cart');

    // Fungsi untuk menampilkan cart-container
    shoppingCart.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah default action dari anchor
        cartContainer.style.right = '0'; // Tampilkan cart-container
    });

    // Fungsi untuk menyembunyikan cart-container
    closeCart.addEventListener('click', function() {
        cartContainer.style.right = '-20rem'; // Sembunyikan cart-container
    });
});

// Fungsi untuk mengatur kategori dan redirect
function product() {
    window.location.href = 'kategori.html';
}

// Contact Us
document.getElementById('sendMessage').addEventListener('click', function() {
    // Ambil nilai dari input
    const name = document.querySelector('input[placeholder="Nama"]').value;
    const email = document.querySelector('input[placeholder="E-Mail"]').value;
    const phone = document.querySelector('input[placeholder="No.HP"]').value;

    // Buat pesan yang akan dikirim
    const message = `Nama: ${name}\nE-Mail: ${email}\nNo.HP: ${phone}`;

    // Ganti nomor telepon di bawah dengan nomor WhatsApp Anda
    const phoneNumber = '081413263843'; // Ganti dengan nomor WhatsApp Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Arahkan ke URL WhatsApp
    window.open(whatsappUrl, '_blank');
});

// Parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.hero h1').css({
        'transform' : 'translate(0px, '+ -wScroll/5 + '%)',
    });

    $('.hero p').css({
        'transform' : 'translate(0px, '+ -wScroll/1.2 + '%)',
    });

    $('.hero a').css({
        'transform' : 'translate(0px, '+ -wScroll/1.2 + '%)',
    });

    // Hero
    if(wScroll > $('.about').offset().top - 450) {
        $('.about').each(function() {
            $('.about img').addClass('muncul');
            $('.about p').addClass('muncul');
            $('.about h3').addClass('muncul');
        });
    };

    // Product
    if(wScroll > $('.product').offset().top - 300) {
        $('.product .col.atas').each(function(i) {
            setTimeout(function() {
                $('.product .col.atas').eq(i).addClass('muncul');
            }, 200 * i);
        });
    };
    if(wScroll > $('.col.bawah').offset().top - 400) {
        $('.product .col.bawah').each(function(i) {
            setTimeout(function() {
                $('.product .col.bawah').eq(i).addClass('muncul');
            }, 200 * i);
        });
    };

});

// Responsive 
const navbar = document.querySelector('.navigation');
    // Menu
    document.querySelector('#menu').
    onclick = (event) => {
        event.preventDefault();
        navbar.classList.toggle('active');
    }
