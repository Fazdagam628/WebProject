import { useParams } from "react-router";

export default function ProductDetail() {
  const params = useParams();

  return (
    <div>
      <h1>
        Product Detail {params.userId}, {params.addressId}
      </h1>
      <p>Ini adalah Product Detail Address</p>
    </div>
  );
}
