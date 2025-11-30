/**
 * Fungsi untuk menampilkan notifikasi toast sederhana.
 * @param {string} produkNama Nama produk yang ditambahkan.
 */
function tambahKeKeranjang(produkNama) {
    const toast = document.getElementById('toast-notif');
    const message = document.getElementById('toast-msg');
    
    // Isi pesan dengan nama produk
    message.textContent = `${produkNama} berhasil masuk ke keranjang!`;

    // 1. Tampilkan notifikasi
    toast.classList.add('show');

    // 2. Atur agar notifikasi hilang setelah 2 detik
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000); 
}