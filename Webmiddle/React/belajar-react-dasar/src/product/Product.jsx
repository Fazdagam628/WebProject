export default function Product({ product }) {
  return (
    <div>
      <h2>
        {product.id} : {product.name}
      </h2>
      <p>Haga : {product.price}</p>
    </div>
  );
}
