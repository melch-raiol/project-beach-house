import { useParams } from "react-router-dom";
import "./styles.css";
import HeaderApartaments from "../../components/HeaderApartaments";
import Footer from "../../components/Footer";
import ApartmentData from "../../components/ApartmentData";
import apartments from "../../databases/databases";

export default function Test() {
  const { page } = useParams();

  return (
    <div className="container-test">
      <HeaderApartaments />
      <div className="container-hero">
        {page === "studio" ? (
          <ApartmentData apartmentProps={apartments[3]} icons={apartments[4]} />
        ) : null}
        {page === "quatro_quartos_quintal" ? (
          <ApartmentData apartmentProps={apartments[0]} icons={apartments[4]} />
        ) : null}
        {page === "quatro_quartos_deck" ? (
          <ApartmentData apartmentProps={apartments[1]} icons={apartments[4]} />
        ) : null}
        {page === "tres_quartos" ? (
          <ApartmentData apartmentProps={apartments[2]} icons={apartments[4]} />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
