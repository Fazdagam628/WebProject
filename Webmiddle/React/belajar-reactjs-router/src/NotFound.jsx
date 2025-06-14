import { useParams } from "react-router";

export default function NotFound() {
  const params = useParams();
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found : {params["*"]}</p>
    </div>
  );
}
