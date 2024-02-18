import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/input.css";
import "./styles/reset.css";
import "./socket";
import { axios_instance } from "./axios_instance";

axios_instance.get("/").then((res) => console.log(res.data));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
