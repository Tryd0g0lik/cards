import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root");
console.log("[INDEX]");
if (root !== null || root !== undefined) {
  createRoot(root as HTMLDivElement).render(

    <StrictMode>
      <App />
    </StrictMode>

  );
}
