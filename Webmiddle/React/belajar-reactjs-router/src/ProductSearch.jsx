import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  const [searchparams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState(searchparams.get("search") || "");

  function handleSearch() {
    if (search) {
      navigate({
        pathname: "/data/products/search",
        search: `?search=${search}`,
      });
    }
  }

  return (
    <>
      <h1>Search Products</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>Your result : {searchparams.get("search")}</p>
    </>
  );
}
