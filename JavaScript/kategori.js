// kategori
const jam = document.getElementById('Sidebar-jam');
const topi = document.getElementById('Sidebar-topi');
const normal = document.getElementById('Normal-Sidebar');
const gelang = document.getElementById('Sidebar-gelang');
const kalung = document.getElementById('Sidebar-kalung');
const cincin = document.getElementById('Sidebar-cincin');
const kacamata = document.getElementById('Sidebar-kacamata');
const groupTopi = document.querySelectorAll('.Product-Topi');
const groupGelang = document.querySelectorAll('.Product-Gelang');
const groupKalung = document.querySelectorAll('.Product-Kalung');
const groupCincin = document.querySelectorAll('.Product-Cincin');
const groupJam = document.querySelectorAll('.Product-JamTangan');
const groupKacamata = document.querySelectorAll('.Product-Kacamata');

jam.style.display = 'none';
topi.style.display = 'none';
kacamata.style.display = 'none';
gelang.style.display = 'none';
kalung.style.display = 'none';
cincin.style.display = 'none';

function sidebarTopi() {
    // Menyembunyikan elemen yang tidak diperlukan
    topi.style.display = 'block'; 
    gelang.style.display = 'none';
    kalung.style.display = 'none';
    cincin.style.display = 'none';
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
    groupKalung.forEach(function(product) { 
        product.style.display = 'none';
    });
    groupCincin.forEach(function(product) {
        product.style.display = 'none';
    });
    groupGelang.forEach(function(product) {
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
    gelang.style.display = 'none';
    kalung.style.display = 'none';
    cincin.style.display = 'none';
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
    groupKalung.forEach(function(product) { 
        product.style.display = 'none';
    });
    groupCincin.forEach(function(product) {
        product.style.display = 'none';
    });
    groupGelang.forEach(function(product) {
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
    gelang.style.display = 'none';
    kalung.style.display = 'none';
    cincin.style.display = 'none';
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
    groupKalung.forEach(function(product) { 
        product.style.display = 'none';
    });
    groupCincin.forEach(function(product) {
        product.style.display = 'none';
    });
    groupGelang.forEach(function(product) {
        product.style.display = 'none';
    });

    // Memunculkan produk jam tangan
    groupJam.forEach(function(product) {
        product.style.display = 'block'; 
    });
}
function sidebarGelang() {
    // Menyembunyikan elemen yang tidak diperlukan
    gelang.style.display = 'block';
    kalung.style.display = 'none';
    cincin.style.display = 'none';
    jam.style.display = 'none'; 
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
    groupJam.forEach(function(product) {
        product.style.display = 'none'; 
    });
    groupKalung.forEach(function(product) { 
        product.style.display = 'none';
    });
    groupCincin.forEach(function(product) {
        product.style.display = 'none';
    });

    // Memunculkan produk jam tangan
    groupGelang.forEach(function(product) {
        product.style.display = 'block';
    });
}
function sidebarKalung() {
    // Menyembunyikan elemen yang tidak diperlukan
    kalung.style.display = 'block';
    gelang.style.display = 'none';
    cincin.style.display = 'none';
    jam.style.display = 'none'; 
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
    groupJam.forEach(function(product) {
        product.style.display = 'none'; 
    });
    groupCincin.forEach(function(product) {
        product.style.display = 'none';
    });
    groupGelang.forEach(function(product) {
        product.style.display = 'none';
    });
    
    // Memunculkan produk jam tangan
    groupKalung.forEach(function(product) { 
        product.style.display = 'block';
    });
}
function sidebarCincin() {
    // Menyembunyikan elemen yang tidak diperlukan
    cincin.style.display = 'block';
    gelang.style.display = 'none';
    kalung.style.display = 'none';
    jam.style.display = 'none'; 
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
    groupJam.forEach(function(product) {
        product.style.display = 'none'; 
    });
    groupKalung.forEach(function(product) { 
        product.style.display = 'none';
    });
    groupGelang.forEach(function(product) {
        product.style.display = 'none';
    });
    
    // Memunculkan produk jam tangan
    groupCincin.forEach(function(product) {
        product.style.display = 'block';
    });
}

function home() {
    // Menyembunyikan elemen yang tidak diperlukan
    normal.style.display = 'block'; 
    cincin.style.display = 'none';
    gelang.style.display = 'none';
    kalung.style.display = 'none';
    kacamata.style.display = 'none';
    topi.style.display = 'none'; 
    jam.style.display = 'none'; 

    groupTopi.forEach(function(product) {
        product.style.display = 'block'; 
    });
    groupKacamata.forEach(function(product) {
        product.style.display = 'block'; 
    });
    groupJam.forEach(function(product) {
        product.style.display = 'block'; 
    });
    groupKalung.forEach(function(product) { 
        product.style.display = 'block';
    });
    groupGelang.forEach(function(product) {
        product.style.display = 'block';
    });
    groupCincin.forEach(function(product) {
        product.style.display = 'block';
    });
}
function setProductId(button) {
    const productId = button.getAttribute('data-product-id');
    const productIdField = document.getElementById('product-id');
    
    // Ambil nilai yang sudah ada di field
    const existingIds = productIdField.value.split(',').map(id => id.trim());
    
    // Tambahkan ID baru jika belum ada
    if (!existingIds.includes(productId)) {
        // Jika field kosong, tambahkan ID tanpa koma
        if (productIdField.value.trim() === '') {
            productIdField.value = productId;
        } else {
            // Jika tidak kosong, tambahkan ID dengan koma
            productIdField.value += ', ' + productId;
        }
    }
}

// SHOPPING CART
const cart = document.querySelector('.shopping-cart-buy')
document.querySelector('#shopping-cart').onclick = () => {
    cart.classList.toggle('active')
}

// FORM PEMBELIAN
document.getElementById('btn-whatsapp').onclick = function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value; // Menambahkan email
    var productId = document.getElementById('product-id').value; // Menambahkan ID produk
    var address = document.getElementById('address').value;

    // Membuat pesan untuk WhatsApp
    var message = "Pembelian :" + 
                "\nNama: " + name + 
                "\nNomor Telepon: " + phone + 
                "\nEmail: " + email + // Menambahkan email ke pesan
                "\nID Produk: " + productId + // Menambahkan ID produk ke pesan
                "\nAlamat: " + address;

    // Membuat URL WhatsApp
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=6281413263843&text=' + encodeURIComponent(message);
    
    // Membuka URL WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
};

//RATING BINTANG
feather.replace();

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', function(event) {
                event.preventDefault(); // Mencegah link default

                // Menghapus kelas 'selected' dari semua bintang
                document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
                
                // Menambahkan kelas 'selected' pada bintang yang dipilih
                this.classList.add('selected');
                
                // Menandai semua bintang sebelumnya sebagai terisi
                let currentStar = this;
                while (currentStar = currentStar.previousElementSibling) {
                    currentStar.classList.add('selected');
                }
            });
        });
    });