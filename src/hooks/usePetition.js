import axios from "axios";
import { useState, useEffect } from "react";

const usePetition = (endpoint) => {
  const API_URL = process.env.REACT_APP_URL;
  const [data, setData] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        setData(data.data.data);
        setCargando(false);
      })
      .catch((e) => {
        setCargando(false);
        console.error(e);
      });
  }, []);

  return [data, cargando];
};

export default usePetition;
