import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* 🔧 FIX: ResizeObserver error (Chart.js / Recharts) */
const ResizeObserverFix = window.ResizeObserver;
window.ResizeObserver = class extends ResizeObserverFix {
  constructor(callback) {
    super((entries, observer) => {
      window.requestAnimationFrame(() => {
        callback(entries, observer);
      });
    });
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
