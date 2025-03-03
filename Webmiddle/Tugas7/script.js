// Seleksi elemen yang dibutuhkan
const tableBody = document.getElementById("tableBody");
const refreshButton = document.getElementById("refreshButton");
const errorDiv = document.getElementById("error");

// Fungsi untuk mengambil data dari API
async function fetchData() {
  try {
    // Hapus pesan error sebelumnya
    errorDiv.classList.add("hidden");
    errorDiv.textContent = "";

    // Panggil API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parsing Data JSON
    const data = await response.json();

    // bersihkan tabel
    tableBody.innerHTML = "";

    // Masukkan data ke dalam tabel
    data.forEach((user, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
            `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    // Tampilkan pesan error
    errorDiv.textContent =
      "Terjadi kesalahan saat mengambil data: " + error.message;
    errorDiv.classList.remove("hidden");
  }
}

// Tambahkan event listener untuk button refresh
refreshButton.addEventListener("click", fetchData);

// Panggil fungsi fetchData untuk pertama kali
fetchData();
