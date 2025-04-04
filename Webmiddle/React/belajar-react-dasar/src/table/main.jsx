import { createRoot } from "react-dom/client";
import Row from "./Row";
import { StrictMode } from "react";
import Table from "./Table";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Table />
  </StrictMode>
);
