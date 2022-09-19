import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import App from "./components/App";
import Cuadricula from "./components/Cuadricula";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import CriptoPage from "./components/cripto/CriptoPage";
import Perfil from "./components/usuarios/Perfil";
import Login from "./components/usuarios/Login";
import { UserContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<CriptoPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
);
