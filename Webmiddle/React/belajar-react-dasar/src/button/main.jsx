import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AlertButton from "./AlertButton";
import MyButton from "./MyButton";
import Toolbar from "./Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertButton text="click me" message="Button di klik" />

    <MyButton text="Smash me" onSmash={() => alert("You smash me")} />

    <Toolbar
      onClick={(e) => {
        e.stopPropagation(); //Berfungsi agar button tidak ter-trigger 2 kali
        alert("You click toolbar");
      }}
    />
    <SearchForm />
    <SayHelloForm />
  </StrictMode>
);
