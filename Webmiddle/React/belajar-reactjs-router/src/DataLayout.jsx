import { NavLink, Outlet, useLocation } from "react-router";
import "./data.css";

export default function DataLayout() {
  const location = useLocation();
  return (
    <>
      <div>
        <h1>This is Header</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/data/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/data/products/search">Products Search</NavLink>
          </li>
          <li>
            <NavLink to="/data/sellers">Sellers</NavLink>
          </li>
          <li>
            <NavLink to="/data/customer">Customer</NavLink>
            <li>
              <NavLink
                to={{
                  pathname: "/data/products",
                  search: "?category=shoes",
                  hash: "#top",
                }}
              >
                Products
              </NavLink>
            </li>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <p>This is Content</p>
        <p>
          Link Location : {location.pathname}
          {location.search}
          {location.hash}
        </p>
      </div>
    </>
  );
}
