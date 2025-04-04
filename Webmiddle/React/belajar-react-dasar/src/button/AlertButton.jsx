export default function AlertButton({ text, message }) {
  function handleClick(e) {
    // console.info(e);
    console.info(e.target);
    // console.info(e.type);
    alert(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}
