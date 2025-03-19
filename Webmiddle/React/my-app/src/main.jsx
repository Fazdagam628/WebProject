import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import UserProfile from "./UserProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Greeting name="Dani" /> */}
    {/* <UserProfile name="Dani" age={18} hobbies={["Coding", "Gaming", "Anime"]} /> */}
  </StrictMode>
);
