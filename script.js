// ================== THEME TOGGLE ==================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ================== CONTACT FORM VALIDATION ==================
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let number = document.getElementById("number").value.trim();
  let course = document.getElementById("course").value.trim();

  if (name && email && number && course) {
    alert("✅ Message Sent Successfully!");
    this.reset();
  } else {
    alert("❌ Please fill all fields!");
  }
});

// ================== NAVBAR SCROLL EFFECT ==================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ================== SMOOTH SCROLL ==================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ================== HERO BUTTON ACTION ==================
document.querySelector(".hero .btn").addEventListener("click", () => {
  document.querySelector("#courses").scrollIntoView({
    behavior: "smooth"
  });
});
