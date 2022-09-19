import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Hello, Welcome to Cripto Market</h1>
      <p className="subtitle">Get to know the most used Criptos</p>
      <Link to="/criptomonedas" className="link">
        Check out the Criptos
      </Link>
    </div>
  );
};

export default Home;
