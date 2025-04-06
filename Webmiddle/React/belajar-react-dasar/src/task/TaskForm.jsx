import { useState } from "react";

export default function TaskForm({ setItems }) {
  const [item, setitem] = useState("");

  function handleChange(e) {
    setitem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItems((draft) => {
      draft.push(item);
    });
    setitem("");
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
