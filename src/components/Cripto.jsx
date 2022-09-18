import "../Cripto.css";

const Cripto = ({ name, priceUsd, symbol, changePercent24Hr }) => {
  return (
    <div className="cripto">
      <h3>{name}</h3>
      <div className="info">
        <p>
          <span className="label">Price:</span>
          {parseFloat(priceUsd).toFixed(4)}
        </p>
        <p>
          <span className="label">Code:</span>
          {symbol}
        </p>
        <p>
          <span className="label">Variation:</span>
          <span
            className={
              parseFloat(changePercent24Hr) > 0 ? "positive" : "negative"
            }
          >
            {parseFloat(changePercent24Hr).toFixed(3)}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cripto;
