import Carrocel from "../../Carrocel";
import "./styles.css";

export default function LayoutApartaments() {
  return (
    <div className="container container-apartaments" id="section-3">
      <h1>Imagens das Casas</h1>
      <div className="fotos-dos-apartamentos">
        <Carrocel />
      </div>
    </div>
  );
}
