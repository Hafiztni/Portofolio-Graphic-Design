// --- Clock (WITA = UTC+8, tanpa detik) ---
function updateClock() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wita = new Date(utc + (3600000 * 8)); // UTC + 8
  const hours = String(wita.getHours()).padStart(2, "0");
  const minutes = String(wita.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes} WITA (UTC+8)`;
  const clockEl = document.getElementById("clock");
  if (clockEl) clockEl.textContent = timeString;
}

// update tiap menit
setInterval(updateClock, 60000);
updateClock();



const phoneNumber = "6281383203964"; // ganti dengan nomor kamu (pakai format internasional tanpa +)

document.getElementById("joinBtn").addEventListener("click", () => {
  const pesan = document.getElementById("pesan").value;
  const message = document.getElementById("message");

  if (pesan === "") {
    message.textContent = "Silakan tulis pesan dulu.";
    message.style.color = "red";
  } else {
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(pesan)}`;
    window.open(waLink, "_blank"); // buka WhatsApp
    document.getElementById("pesan").value = "";
    message.textContent = "Pesan kamu sedang diarahkan ke WhatsApp...";
    message.style.color = "#00ffcc";
  }
});

// Efek tombol
const joinBtn = document.getElementById("joinBtn");
let timeout;

joinBtn.addEventListener("mousedown", () => {
  joinBtn.classList.add("active");
  clearTimeout(timeout);
});

joinBtn.addEventListener("mouseup", () => {
  timeout = setTimeout(() => {
    joinBtn.classList.remove("active");
  }, 2000);
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
document.querySelector("a[href='#cv']").addEventListener("click", (e) => {
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


// FAQ Dropdown
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Animasi muncul pertanyaan bertahap
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((q, index) => {
  setTimeout(() => {
    q.classList.add("visible");
  }, index * 4000); // jeda 4 detik antar pertanyaan
});
