import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//Components
import App from "./App";

//Styles
import "./index.css";

import CartCtxProvider from "./components/Cart/CartContext/CartCtxProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartCtxProvider>
      <App />
    </CartCtxProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
