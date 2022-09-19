import { useParams } from "react-router-dom";
import usePetition from "../../hooks/usePetition";
import CriptoHistory from "./info/CriptoHistorial";
import CriptoInfo from "./info/CriptoInfo";
import "./CriptoPage.css";

const CriptoPage = () => {
  // Get the params from the url
  const params = useParams();
  const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`);
  const [history, cargandoHistory] = usePetition(
    `assets/${params.id}/history?interval=d1`
  );

  if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>;

  return (
    <div className="cripto-page-container">
      {cripto && <CriptoInfo cripto={cripto} />}
      {history && <CriptoHistory history={history} />}
    </div>
  );
};

export default CriptoPage;
