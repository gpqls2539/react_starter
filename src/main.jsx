import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Sub from "./Sub.jsx";
import Counter from "./Counter.jsx";
import NestingBox from "./NestingBox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Sub />
    <Counter /> */}
    <NestingBox />
  </StrictMode>
);
