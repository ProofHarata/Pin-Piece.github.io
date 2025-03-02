document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        activeSidebar: '', // State untuk menyimpan sidebar yang aktif
        currentType: '', // State untuk menyimpan tipe produk yang ditampilkan
        items: [
            // Produk Jam Tangan
            { id: 1, name: 'Deepsea D-Blue', img: 'jamtangan (1).jpg', price: 207000, type: 'jamtangan' },
            { id: 2, name: 'Raymond Wail', img: 'jamtangan (2).jpg', price: 325000, type: 'jamtangan' },
            { id: 3, name: 'Jam Tangan PhiLipe Ricci', img: 'jamtangan (3).jpg', price: 150000, type: 'jamtangan' },

            // Produk Kacamata
            { id: 4, name: 'Kacamata Bulat', img: 'kacamata (1).jpg', price: 108000, type: 'kacamata' },
            { id: 5, name: 'Robins - Anti Radiasi', img: 'kacamata (2).jpg', price: 159000, type: 'kacamata' },
            { id: 6, name: 'Aviantor Vintage', img: 'kacamata (3).jpg', price: 150000, type: 'kacamata' },

            // Produk Cincin
            { id: 7, name: 'Lark & Berry Fine', img: 'cincin (1).png', price: 188000, type: 'cincin' },
            { id: 8, name: 'Nomor Keberuntungan', img: 'cincin (2).png', price: 758000, type: 'cincin' },
            { id: 9, name: 'Opal Signet', img: 'cincin (3).png', price: 250000, type: 'cincin' },

            // Produk Gelang
            { id: 10, name: 'Perpetuity Couple', img: 'gelang (1).png', price: 144000, type: 'gelang' },
            { id: 11, name: 'rantai pria', img: 'gelang (2).png', price: 272000, type: 'gelang' },
            { id: 12, name: 'Nama Kustom', img: 'gelang (3).png', price: 450000, type: 'gelang' },

            // Produk Kalung
            { id: 13, name: 'Emas Dengan Liontin Buku', img: 'kalung (1).png', price: 195000, type: 'kalung' },
            { id: 14, name: 'Astra Gold', img: 'kalung (2).png', price: 630000, type: 'kalung' },
            { id: 15, name: 'liontin berbentuk kompas', img: 'kalung (3).png', price: 589000, type: 'kalung' },

            // Produk Topi
            { id: 16, name: 'Snapback Nike', img: 'topi (1).jpg', price: 220000, type: 'topi' },
            { id: 17, name: 'Trucker Lidah Pendek', img: 'topi (2).jpg', price: 60000, type: 'topi' },
            { id: 18, name: 'Topi RVCA', img: 'topi (3).jpg', price: 50000, type: 'topi' },
        ],
        setActiveSidebar(type) {
            this.activeSidebar = type; // Set activeSidebar sesuai tipe yang dipilih
            this.currentType = type; // Set currentType untuk menampilkan produk yang sesuai
        },
        home() {
            this.activeSidebar = ''; // Reset activeSidebar untuk menampilkan Normal-Sidebar
            this.currentType = ''; // Reset currentType untuk menampilkan semua produk
        }
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const cartItem = this.items.find((item) => item.id === newItem.id);
            if (!cartItem) {
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;
            } else {
                this.items = this.items.map((item) => {
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
            console.log(this.total);
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id);
            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cartItem.quantity === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});

// Form Validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener("keyup", function() {
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].value.length !== 0) {
            checkoutButton.classList.remove("disabled");
            checkoutButton.classList.add("disabled");
        } else {
            return false;
        }
    }

    checkoutButton.disabled = false;
    checkoutButton.classList.remove("disabled");
});

// Kirim Data Ketika Tombol checkout Diklik
checkoutButton.addEventListener('click', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    // const message = formatMessage(objData);
    // console.log(objData)
    // window.open('http://wa.me/6281413263843?text=' + encodeURIComponent(message));

    // Minta transaction token menggunakan ajax / fetch
    try {
        const respons = await fetch('php/placeOrder.php', {
            method: 'POST',
            body: data,
        });
        const token = await respons.text();
        // console.log(token);
        window.snap.pay(token);
    } catch(err) {
        console.log(err.massage);
    }
});

// Format Pesan WhatsApp
const formatMessage = (obj) => {
    return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No HP: ${obj.phone}
Data Pesanan
    ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)})`).join('\n')}
TOTAL: ${rupiah(obj.total)}
Terima Kasih.`;
};

// Konversi Ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};



