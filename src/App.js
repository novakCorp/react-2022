import { useEffect, useState } from "react";
import axios from "axios";
import CriptoItems from "./components/CriptoItems";
import "./App.css";

function App() {
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
    <div className="App">
      <h1>Lista de criptomonedas</h1>
      <ol className="list-container">
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>
            <CriptoItems name={name} priceUsd={priceUsd} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
