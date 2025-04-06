// import { useState } from "react";
// import { useImmer } from "use-immer";
//
// export default function Task() {
//   const [item, setItem] = useState("");
//   const [items, setItems] = useImmer([]);
//
//   function handleChange(e) {
//     setItem(e.target.value);
//   }
//
//   function handleClick(e) {
//     e.preventDefault();
//     setItems((draft) => {
//       draft.push(item);
//     });
//     setItem("");
//   }
//   return (
//     <div>
//       <h1>Create Task</h1>
//       <form>
//         <input value={item} onChange={handleChange} />
//         <button onClick={handleClick}>Add</button>
//       </form>
//       <h1>List Tasks</h1>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
  const [items, setItems] = useImmer([]);

  // function handleOnSubmit(item) {
  //   setItems((draft) => {
  //     draft.push(item);
  //   });
  // }

  return (
    <div>
      <TaskForm setItems={setItems} />
      <TaskList items={items} />
    </div>
  );
}
