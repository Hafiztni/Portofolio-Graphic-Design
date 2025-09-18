const container = document.querySelector('.container');
const text = container.querySelector('.text');

container.addEventListener('click', () => {
  // mulai animasi fingerprint
  container.classList.add('active');

  // Setelah fingerprint animasi jalan (6 detik), ganti ke SUCCESS
  setTimeout(() => {
    text.textContent = "SUCCESS";
    document.body.classList.add("success-bg");

    // Setelah 3 detik dari munculnya SUCCESS, redirect ke index.html
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);

  }, 5000); // sesuai durasi animasi Container (6s)
});