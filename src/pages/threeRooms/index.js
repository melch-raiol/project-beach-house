import "./styles.css";
import HeaderApartaments from "../../components/HeaderApartaments";
import Footer from "../../components/Footer";

export default function ThreeRooms() {
  return (
    <div>
      <HeaderApartaments />
      <main className="container"></main>
      <h1 className="container-three-rooms">
        fotos do Apartamento 3 Quartos aqui!
      </h1>
      <Footer />
    </div>
  );
}
