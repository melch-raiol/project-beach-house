import Carrocel from "../../Carrocel";
import "./styles.css";

export default function LayoutApartaments() {
  return (
    <div className="container-apartaments" id="apartamentos">
      <h1 className="section-title images-of-houses-text">Apartamentos</h1>
      <div className="fotos-dos-apartamentos">
        <Carrocel />
      </div>
    </div>
  );
}
