// Basic interactivity: mobile nav toggle, header scroll, year, animations
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const shown = navList.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', shown ? 'true' : 'false');
    });
  }

  /* ---------- Header color on scroll ---------- */
  const header = document.querySelector('header');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /* ---------- Contact form (demo only) ---------- */
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  if (form && msg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        msg.textContent = 'Συμπλήρωσε όλα τα πεδία.';
        msg.style.color = 'crimson';
        return;
      }

      msg.style.color = 'green';
      msg.textContent = 'Ευχαριστούμε! Το μήνυμά σου στάλθηκε (demo).';

      form.reset();
      setTimeout(() => {
        msg.textContent = '';
      }, 4000);
    });
  }

});

/* ---------- Fade-in sections when in viewport ---------- */
const sections = document.querySelectorAll('.section');

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    }
  });
}, { threshold: 0.12 });

sections.forEach(section => obs.observe(section));