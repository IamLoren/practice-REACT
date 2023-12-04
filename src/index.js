import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./SharedUI/Global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
