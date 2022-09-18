import { useEffect, useState } from "react";
import axios from "axios";
import Cripto from "./cripto/Cripto";
import "./Cuadricula.css";

function Cuadricula() {
  // calling the environment variable
  const API_URL = process.env.REACT_APP_URL;
  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`).then((response) => {
      setCriptos(response.data.data);
    });
  }, []);

  if (!criptos) {
    return <span>Cargando...</span>;
  }

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
          <Cripto
            id={id}
            key={id}
            name={name}
            priceUsd={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
          />
        ))}
      </div>
    </div>
  );
}

export default Cuadricula;
