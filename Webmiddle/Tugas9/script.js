// Elemen HTML
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearTasks = document.getElementById("clearTasks");

// Ambil tugas dari local storage
const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("tasks")) || [];

//   Tampilkan daftar tugas
const renderTasks = () => {
  taskList.innerHTML = ""; // Bersihkan daftar tugas
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task, index) => {
    // Buat elemen li
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center p-2 bg-gray-100 rounded shadow";

    //   Isi teks tugas
    li.innerHTML = `
      <span>${task}</span>
      <button 
        class="text-red-500 hover:text-red-700" 
        onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li);
  });
};

// Tambah tugas baru
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Simpan ke Local Storage
    taskInput.value = ""; // Kosongkan input
    renderTasks(); // Perbarui daftar
  }
});

// Hapus tugas tertentu
const deleteTask = (index) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice(index, 1); // Hapus tugas dari array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // mencari data tasks di Local Storage
  renderTasks(); // Perbarui daftar
};

// Handler untuk menghapus semua tugas
clearTasks.addEventListener("click", () => {
  localStorage.clear("tasks"); // Hapus data tasks dari Local Storage
  renderTasks(); // Perbarui daftar
});
// Tampilkan tugas saat halaman dimuat
document.addEventListener("DOMContentLoaded", renderTasks);
