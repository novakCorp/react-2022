import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import App from "./components/App";
import Cuadricula from "./components/Cuadricula";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import CriptoPage from "./components/cripto/CriptoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/criptomonedas" element={<App />}>
        <Route index element={<Cuadricula />} />
        <Route path=":id" element={<CriptoPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
