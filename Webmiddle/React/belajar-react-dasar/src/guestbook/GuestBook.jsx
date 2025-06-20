import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setMessage("");

    nameInput.current.focus();

    alert(`Name : ${name}\nMessage : ${message}`);
  }

  return (
    <>
      <h1>Guest Book</h1>
      <form>
        <GuestBookForm ref={nameInput} name={name} setName={setName} />
        {/* <label htmlFor="name">Name</label>
        <br />
        <input
          ref={nameInput}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
