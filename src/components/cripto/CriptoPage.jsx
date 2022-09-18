import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CriptoPage = () => {
  // Get the params from the url
  const params = useParams();
  const API_URL = process.env.REACT_APP_URL;
  const [cripto, setCripto] = useState({});
  const [history, setHistory] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${API_URL}assets/${params.id}`);
    setCripto(response.data.data);
  };

  async function getHistory() {
    const response = await axios.get(
      `${API_URL}assets/${params.id}/history?interval=d1`
    );
    setHistory(response.data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <h1>This is the cripto page: {params.id}</h1>
      <div>
        <p>Name: {cripto.name}</p>
        <p>Rank: {cripto.rank}</p>
        <p>Supply: {cripto.supply}</p>
        <p>Price: {cripto.priceUsd}</p>
      </div>
      <h2>HISTORIAL</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({ date, priceUsd, time }) => (
            <tr key={time}>
              <td>{date}</td>
              <td>{priceUsd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CriptoPage;
