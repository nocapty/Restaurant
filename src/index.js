import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import App component
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App component is wrapped in Router already */}
  </React.StrictMode>,
  document.getElementById("root")
);
