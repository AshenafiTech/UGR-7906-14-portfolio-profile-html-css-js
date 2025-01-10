// JavaScript for Portfolio Page

// Theme toggle functionality
const themeBtn = document.querySelector('.theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const themeIcon = themeBtn.querySelector('i');
  themeIcon.classList.toggle('fas');
  themeIcon.classList.toggle('far');
});

// Navigation button active state
const controls = document.querySelectorAll('.control');
controls.forEach((control) => {
  control.addEventListener('click', () => {
    controls.forEach((btn) => btn.classList.remove('active-btn'));
    control.classList.add('active-btn');
  });
});

// Portfolio item interactions (if needed)
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const figcaption = item.querySelector('figcaption');
    figcaption.style.opacity = '1';
  });
  item.addEventListener('mouseleave', () => {
    const figcaption = item.querySelector('figcaption');
    figcaption.style.opacity = '0';
  });
});

// Placeholder for additional dynamic content (e.g., loading projects dynamically)
// function loadPortfolioItems() {
//   // Fetch or dynamically add portfolio items here.
// }
// loadPortfolioItems();
