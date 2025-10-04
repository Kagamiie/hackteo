import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import MapPinDrop from "./components/Map";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
    <MapPinDrop />
  </StrictMode>,
);
