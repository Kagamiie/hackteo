import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Weather from './pages/Weather'
import Map from "./components/Map";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Weather />
    <Map></Map>
  </StrictMode>,
);
