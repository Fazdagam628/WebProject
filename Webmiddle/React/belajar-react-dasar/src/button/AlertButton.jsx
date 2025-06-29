import { useRef } from "react";

export default function AlertButton({ text, message }) {
  const counter = useRef(0);
  function handleClick(e) {
    // console.info(e);
    console.info(e.target);
    // console.info(e.type);
    alert(`${message} ${counter.current++}`);
  }

  return <button onClick={handleClick}>{text}</button>;
}
