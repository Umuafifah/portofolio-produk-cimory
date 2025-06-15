// Memastikan kode dijalankan setelah seluruh DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menandai link navigasi yang sedang aktif
    function setActiveNavLink() {
        const navLinks = document.querySelectorAll('nav ul li a'); // Mendapatkan semua link di navigasi
        const currentPath = window.location.pathname; // Mendapatkan path URL saat ini, misalnya "/index.html" atau "/"

        navLinks.forEach(link => {
            // Hapus kelas aktif sebelumnya dari semua link
            link.classList.remove('text-secondary-blue', 'font-bold');
            link.classList.add('text-primary-blue', 'font-semibold'); // Kembalikan ke gaya default
            
            // Cek apakah href link cocok dengan path saat ini
            // Menggunakan includes untuk menangani kasus seperti "/" atau "/index.html"
            // Atau jika ada link menu_original.html, dll.
            if (link.href.includes(currentPath) && currentPath !== '/') {
                link.classList.add('text-secondary-blue', 'font-bold'); // Tambahkan kelas aktif
                link.classList.remove('text-primary-blue', 'font-semibold'); // Hapus kelas default
            } else if (currentPath === '/' && link.href.includes('index.html')) {
                 // Kasus khusus untuk halaman beranda (index.html) jika path hanya "/"
                link.classList.add('text-secondary-blue', 'font-bold'); // Tambahkan kelas aktif
                link.classList.remove('text-primary-blue', 'font-semibold'); // Hapus kelas default
            }
        });
    }

    // Panggil fungsi ini saat DOM dimuat
    setActiveNavLink();

    // Handling form kontak sederhana
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form melakukan submit standar (reload halaman)

            // Ambil nilai dari input form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Lakukan validasi sederhana
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Semua kolom harus diisi!'); // Gunakan alert sebagai contoh, lebih baik pakai modal kustom
                return;
            }

            console.log('Form Submitted!');
            console.log('Nama:', name);
            console.log('Email:', email);
            console.log('Pesan:', message);

            // Tampilkan pesan sukses kepada pengguna (bisa diganti dengan modal pop-up yang lebih menarik)
            alert('Pesan Anda telah berhasil dikirim! Terima kasih.'); // Gunakan alert sebagai contoh

            // Reset form
            contactForm.reset();
        });
    }

    // Contoh fungsi navigasi (tetap seperti yang Anda berikan, bisa digunakan secara programatis)
    function navigateTo(pageUrl) {
        window.location.href = pageUrl;
    }
});
