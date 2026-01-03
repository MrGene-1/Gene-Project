// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('mobile-menu');
  if (nav.classList.contains('mobile-menu')) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('mobile-menu')) {
      menuToggle.classList.remove('active');
      nav.classList.remove('mobile-menu');
      nav.style.display = 'none';
    }
  });
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});