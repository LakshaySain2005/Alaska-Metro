import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import SmoothScroll from "./SmoothScroll.tsx";
import ScrollProgress from "./ScrollProgress.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <ScrollProgress />
        <App />
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>
);
