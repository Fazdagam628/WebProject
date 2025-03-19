import React, { useState } from "react";

const TodoList = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);

  // Fungsi untuk menghapus tugas berdasarkan index
  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTask(index)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  // Daftar tugas awal
  const initialTodos = ["Belajar React", "Ngoding", "Game", "Bersih bersih"];

  return (
    <div>
      <h1>Daftar Tugas Hari Ini</h1>
      <TodoList initialTodos={initialTodos} />
    </div>
  );
};

export default App;
