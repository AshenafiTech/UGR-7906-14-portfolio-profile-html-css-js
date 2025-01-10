// contact.js

// Theme toggler
const themeBtn = document.querySelector('.theme-btn');
let isDarkMode = false;

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  themeBtn.innerHTML = isDarkMode
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-adjust"></i>';
});

// Form validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.querySelector('input[placeholder="YOUR NAME"]');
  const email = contactForm.querySelector('input[placeholder="YOUR EMAIL"]');
  const subject = contactForm.querySelector('input[placeholder="ENTER SUBJECT"]');
  const message = contactForm.querySelector('textarea');

  if (!name.value || !email.value || !subject.value || !message.value) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});

// Smooth scroll for navigation
const controls = document.querySelectorAll('.control a');
controls.forEach((control) => {
  control.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.closest('a').getAttribute('href').substring(2);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
