// VALIDASI KONTAK
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let info = document.getElementById("infoKontak");

    if (name === "" || email === "" || message === "") {
        info.style.color = "red";
        info.innerHTML = "Semua field wajib diisi!";
    } else {
        info.style.color = "green";
        info.innerHTML = `Terima kasih ${name}, pesan Anda berhasil dikirim.`;
        document.getElementById("contactForm").reset();
    }
});

// ANIMASI SAAT SCROLL
const faders = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

const toggle = document.getElementById("darkToggle");

// CEK MODE TERSIMPAN
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});