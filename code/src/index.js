import React from "react";
import ReactDOM from "react-dom";
import App from "App";

import "./cursor.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="cursor">&#8982; </div>
  </React.StrictMode>,
  document.getElementById("root")
);
