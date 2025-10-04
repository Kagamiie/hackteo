import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Weather from './pages/Weather'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Weather />
  </StrictMode>,
);
