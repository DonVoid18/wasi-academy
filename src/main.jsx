import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "typeface-roboto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
document.body.style.fontFamily = "Roboto, sans-serif";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/web-ieee-frontend">
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
