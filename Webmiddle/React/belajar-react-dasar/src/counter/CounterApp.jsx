import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {/* {show2 ? <Counter name="Fazda" /> : <Counter name="Maul" />} */}
      {/* {show2 ? <Counter name="Fazda" /> : <p>Hilang</p>} */}
      {/* {show2 ? (
        <div>
        <Counter name="Budi" />
        </div>
      ) : (
        <section>
        <Counter name="Eko" />
        </section>
        )} */}
      {/* {show2 && <Counter name="Budi" />}
      {!show2 && <Counter name="Eko" />} */}
      {/* Ideal way for resetting state */}
      {show2 ? (
        <Counter key="Fazda" name="Fazda" />
      ) : (
        <Counter key="Maul" name="Maul" />
      )}
      <input type="checkbox" checked={show2} onChange={handleChange} />
      Tampilkan Counter 2
    </div>
  );
}
