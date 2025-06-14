import { useNavigate } from "react-router";

export default function Data() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <div>
      <h1>Data</h1>
      <p>Ini adalah data</p>
      <button onClick={handleClick}>Back</button>
    </div>
  );
}
