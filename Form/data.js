// Ambil elemen-elemen dari DOM
let form = document.getElementById("form");

// Elemen untuk FORM REGISTER
let registrasi = document.getElementById("registrasi");
let garis = document.getElementById("garis");
let text1 = document.getElementById("text1");
let userR = document.getElementById("userR");
let passR = document.getElementById("lockR");
let mail = document.getElementById("mail");
let daftarButton = document.getElementById("daftarButton");
let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");
let emailInput = document.getElementById("emailInput")

// Elemen untuk FORM LOGIN
let regis = document.getElementById("regis");
let text = document.getElementById("text");
let login = document.getElementById("login");
let garis1 = document.getElementById("garis1");
let user = document.getElementById("user");
let pass = document.getElementById("lock");
let loginButton = document.getElementById("loginButton");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

// Fungsi untuk menyembunyikan dan menampilkan elemen
function toggleDisplay(elements, display) {
    elements.forEach(element => {
        element.style.display = display;
    });
}

// Inisialisasi tampilan awal
toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1, emailInput, userR, passR, mail], "none");

// Fungsi untuk menampilkan form registrasi
function formRegis() {
    toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1, emailInput, userR, passR, mail], "block");
    toggleDisplay([text, login, garis1, loginButton, usernameInput, passwordInput, user, pass], "none");
}

// Fungsi untuk menampilkan form login
function formLogin() {
    toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1, emailInput, userR, passR, mail], "none");
    toggleDisplay([text, login, garis1, loginButton, usernameInput, passwordInput, user, pass], "block");
}

// Fungsi untuk mendaftar
function onDaftar() {
    localStorage.setItem("username", userInput.value);
    localStorage.setItem("password", passInput.value);

    // Sembunyikan form registrasi dan tampilkan form login
    toggleDisplay([registrasi, garis, userInput, passInput, daftarButton, text1, emailInput, userR, passR, mail], "none");
    toggleDisplay([text, login, garis1, loginButton, usernameInput, passwordInput, user, pass], "block");
    
    alert("Anda Telah Terdaftar");
}

// Fungsi untuk login
function onLogin() {
    if (usernameInput.value == userInput.value && passwordInput.value == passInput.value) {
        // Redirect to another page if login is successful
        window.location.href = '../index.html'; 
    } else {
        alert('Invalid username or password');
    }
}