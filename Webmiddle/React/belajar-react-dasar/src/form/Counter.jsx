// // Contoh salah
// export default function Counter() {
//   let counter = 0;
//   return (
//     <div>
//       <button
//         onClick={() => {
//           counter++;
//           console.log(counter);
//         }}
//       >
//         Increament
//       </button>
//
//       <h1>Counter : {counter}</h1>
//     </div>
//   );
// }

import { useState } from "react";

// Contoh benar

export default function Counter() {
  let [counter, setCounter] = useState(0);

  console.info(`Render Counter ${counter}`);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          // setCounter((c) => c + 1);
          // setCounter((c) => c + 1);
          // setCounter((c) => c + 1);
          console.log(counter);
        }}
      >
        Increament
      </button>

      <h1>Counter : {counter}</h1>
    </div>
  );
}
