const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Fungsi untuk mengganti mode dark/light
function toggleDarkMode() {
  body.classList.toggle("dark-mode");

  // Simpan status dark mode di localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "true");
    toggleButton.checked = true; // Set checkbox ke posisi aktif
  } else {
    localStorage.setItem("darkMode", "false");
    toggleButton.checked = false; // Set checkbox ke posisi tidak aktif
  }
}

// Saat halaman dimuat, cek status dark mode di localStorage
window.onload = function () {
  const darkMode = localStorage.getItem("darkMode");

  // Jika dark mode diaktifkan, tambahkan kelas 'dark-mode' ke body
  if (darkMode === "true") {
    body.classList.add("dark-mode");
    toggleButton.checked = true; // Set checkbox ke posisi aktif
  } else {
    toggleButton.checked = false; // Set checkbox ke posisi tidak aktif
  }
};

// Event listener untuk switch dark mode
toggleButton.addEventListener("change", toggleDarkMode);
