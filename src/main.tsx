import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"; // optional if you’re using this

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);