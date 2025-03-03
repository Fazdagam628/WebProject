const employees = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "QA" },
];

// Menggunakan filter dan map untuk menyederhankan proses
const developers = employees
  .filter(({ role }) => role === "Developer")
  .map(({ name }) => name);

const developerCount = developers.length;

// Menggunakan template literals untuk membuat output lebih elegan
console.log(`Developers: ${developers.join(",")}`);
console.log(`Total Developers: ${developerCount}`);
