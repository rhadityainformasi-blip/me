// Animasi reveal saat scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .gallery figure");
  reveals.forEach((el, i) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
      el.style.animationDelay = `${i * 0.2}s`;
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Lightbox zoom sertifikat
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const figures = document.querySelectorAll('.gallery figure img');

figures.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;   // ambil gambar yang diklik
    lightbox.classList.add('active'); // tampilkan lightbox
  });
});

// Klik di area lightbox = tutup
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
});

