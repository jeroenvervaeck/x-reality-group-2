import React from "react";
import ReactDOM from "react-dom";
import App from "App";

import "./cursor.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="cursor"></div>
  </React.StrictMode>,
  document.getElementById("root")
);
