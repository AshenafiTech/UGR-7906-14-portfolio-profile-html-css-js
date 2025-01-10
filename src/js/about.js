// Theme Toggle
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Highlight Active Navigation
const controls = document.querySelectorAll('.control');
controls.forEach((control) => {
  control.addEventListener('click', () => {
    controls.forEach((btn) => btn.classList.remove('active-btn'));
    control.classList.add('active-btn');
  });
});

// Play/Pause All Videos
const videos = document.querySelectorAll('.video');
const playPauseBtn = document.createElement('button');
playPauseBtn.textContent = 'Play/Pause All Videos';
playPauseBtn.addEventListener('click', () => {
  videos.forEach((video) => {
    if (video.paused) video.play();
    else video.pause();
  });
});
document.querySelector('.right').prepend(playPauseBtn);

// Add Skill Dynamically
const addSkillBtn = document.getElementById('add-skill-btn');
addSkillBtn.addEventListener('click', () => {
  const newSkill = prompt('Enter a new skill:');
  if (newSkill) {
    const newRow = document.createElement('tr');
    newRow.className = 'skill';
    newRow.innerHTML = `<td>${newSkill}</td>`;
    document.querySelector('.skills tbody').appendChild(newRow);
  }
});
