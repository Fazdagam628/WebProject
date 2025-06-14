import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate({
      pathname: "/data",
    });
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Ini adalah home</p>
      <button onClick={handleClick}>Go To Data Page</button>
    </div>
  );
}
