document.addEventListener("DOMContentLoaded", () => {
    // Theme toggler
    const themeBtn = document.querySelector(".theme-btn");
    const body = document.body;
    themeBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
    });
  
    // Active navigation
    const controls = document.querySelectorAll(".control");
    controls.forEach(control => {
      control.addEventListener("click", () => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        control.classList.add("active-btn");
      });
    });
  
    // Smooth scrolling
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  