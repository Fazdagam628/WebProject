import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    console.info("Call Handle Click");
    setLoad(true);
  }

  useEffect(() => {
    console.log("Call Use Effect with []");
  }, []);

  useEffect(() => {
    console.info("Call Use Effect");

    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data = await  response.json();
      setProducts(data);
    }
    if (load) {
      fetchProducts();
    }

    return () => {
      console.log("Call Use Effect Cleanup");
    };
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Product</button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
}
