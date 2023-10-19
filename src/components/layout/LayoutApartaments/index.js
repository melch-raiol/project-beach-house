import Carrocel from "../../Carrocel";
import "./styles.css";
import { useBanana } from "../../../context/context";

export default function LayoutApartaments() {
  const { contexto, page } = useBanana();
  console.log(page);
  return (
    <div className="container-apartaments" id="apartamentos">
      <h1 className="section-title images-of-houses-text">Apartamentos</h1>
      <div className="fotos-dos-apartamentos">
        <Carrocel />
      </div>
    </div>
  );
}
