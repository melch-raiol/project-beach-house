import Carrocel from "../../Carrocel";
import "./styles.css";

export default function LayoutApartaments() {
  return (
    <div className="container container-apartaments" id="section-3">
      <h1 className="section-title images-of-houses-text">Imagens das Casas</h1>
      <div className="fotos-dos-apartamentos">
        <Carrocel />
      </div>
    </div>
  );
}
