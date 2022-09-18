import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Hello, Welcome to Cripto Market</h1>
      <p>Get to know the most used Criptos</p>
      <Link to="/criptomonedas">Ver Criptos</Link>
    </>
  );
};

export default Home;
