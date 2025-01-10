// Select the theme toggle button
const themeBtn = document.querySelector('.theme-btn');

// Toggle dark mode
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update the icon dynamically
  const icon = themeBtn.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-adjust', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-adjust');
  }
});

// Highlight the active navigation button
const controls = document.querySelectorAll('.control');
controls.forEach(control => {
  control.addEventListener('click', () => {
    // Remove active-btn from all buttons
    controls.forEach(btn => btn.classList.remove('active-btn'));
    // Add active-btn to the clicked button
    control.classList.add('active-btn');
  });
});

// Add hover effect for blog cards
const blogCards = document.querySelectorAll('.blog');
blogCards.forEach(blog => {
  blog.addEventListener('mouseover', () => {
    blog.querySelector('figcaption').style.opacity = '1';
  });

  blog.addEventListener('mouseout', () => {
    blog.querySelector('figcaption').style.opacity = '0.8';
  });
});
