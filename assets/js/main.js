'use strict';

// Initialize AOS (on-scroll animations)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true,
    duration: 700,
    easing: 'ease-out-cubic',
    offset: 80,
  });
});

// Year in footer
(function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Lenis smooth scroll
let lenis;
window.addEventListener('load', () => {
  lenis = new Lenis({
    smoothWheel: true,
    wheelMultiplier: 0.9,
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});

// GSAP animations
window.addEventListener('load', () => {
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    // Header reveal on scroll
    const header = document.querySelector('.site-header');
    if (header) {
      let last = 0;
      window.addEventListener('scroll', () => {
        const y = window.scrollY || 0;
        if (y > last && y > 120) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
        last = y;
      });
    }

    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach((btn) => {
      const strength = 18;
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: relX / strength, y: relY / strength, duration: 0.3, ease: 'power3.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'power3.out' });
      });
    });

    // Section entrance parallax
    gsap.utils.toArray('.section').forEach((sec) => {
      gsap.from(sec, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
        },
      });
    });
  }
});

// Hover glow follow on timeline cards
document.addEventListener('pointermove', (e) => {
  document.querySelectorAll('.timeline-item, .project-card').forEach((card) => {
    const rect = card.getBoundingClientRect();
    const within = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!within) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  });
});

// Mobile menu toggle
(function mobileMenu() {
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if (menu.hasAttribute('hidden')) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
  });

  // Close on click
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.setAttribute('hidden', '')));
})();

// Smooth scroll to anchors (fallback when Lenis is disabled)
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length > 1) {
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      if (lenis) {
        lenis.scrollTo(top);
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }
});
