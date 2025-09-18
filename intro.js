// Jam real-time
function updateClock() {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Join Button
document.getElementById("joinBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (email === "") {
    message.textContent = "Please enter your email.";
    message.style.color = "red";
  } else {
    message.textContent = `Thanks for joining! Invitation will be sent to ${email}`;
    message.style.color = "#00ffcc";
    document.getElementById("email").value = "";
  }
});

// Portfolio Popup
document.querySelectorAll(".portfolio-item img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const previewImg = document.createElement("img");
    previewImg.src = img.src;
    previewImg.alt = img.alt;
    overlay.appendChild(previewImg);
    document.body.appendChild(overlay);

    setTimeout(() => overlay.classList.add("active"), 10);

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => overlay.remove(), 300);
    });
  });
});

// Scroll halus ke portfolio
document.getElementById("supportLink").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Fade-in portfolio
const items = document.querySelectorAll(".portfolio-item");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });
items.forEach(item => observer.observe(item));

// Hero title masuk/keluar
const heroTitle = document.querySelector(".hero-title");
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroTitle.classList.add("visible");
    } else {
      heroTitle.classList.remove("visible");
    }
  });
}, { threshold: 0.5 });
heroObserver.observe(heroTitle);


// Smooth scroll ke CV
document.querySelector("a[href='#']").addEventListener("click", (e) => {
  if (e.target.textContent === "CV") {
    e.preventDefault();
    document.getElementById("cv").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});

// Smooth scroll ke Contact
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.textContent === "Contact") {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});

// Smooth scroll ke Cv
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.textContent === "CV") {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("cv").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});

const joinBtn = document.getElementById("joinBtn");
let timeout;

joinBtn.addEventListener("mousedown", () => {
  joinBtn.classList.add("active");

  // Reset timer kalau diklik berkali-kali
  clearTimeout(timeout);
});

joinBtn.addEventListener("mouseup", () => {
  // Tunggu 2 detik sebelum hilangkan aurora
  timeout = setTimeout(() => {
    joinBtn.classList.remove("active");
  }, 2000);
});
