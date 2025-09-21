// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark/Light mode toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Scroll reveal animations
const revealElements = document.querySelectorAll(".card, section h2, .skills, #hero");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Initial state for animations
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

// Contact Form Alert
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you, ' + document.getElementById('name').value + '! I will get back to you soon.');
  form.reset();
});
