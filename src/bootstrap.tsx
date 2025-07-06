import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App.tsx";
import "./styles/index.scss"
import "./registry-wc/register-dt-components";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
