import { useState } from "react";
import img01 from "../../assets/Imags/studio/img-studio-01.jpg";
import img02 from "../../assets/Imags/studio/img-studio-02.jpg";
import img03 from "../../assets/Imags/studio/img-studio-03.jpg";
import img04 from "../../assets/Imags/studio/img-studio-04.jpg";
import BtnBooking from "../../components/BtnBooking";
import BtnWhatsapp from "../../components/BtnWhatsapp";
import EmailModal from "../../components/EmailModal";
import Footer from "../../components/Footer";
import HeaderApartaments from "../../components/HeaderApartaments";
import SliderApartaments from "../../components/SliderApartaments";
import apartments from "../../databases/databases";
import "./styles.css";

export default function Studio() {
  const [emailModal, setEmailModal] = useState(false);

  const emailModalOpen = () => {
    setEmailModal(true);
  };

  return (
    <div className="studio">
      <HeaderApartaments />
      {emailModal ? <EmailModal /> : ""}

      <main className="container-studio">
        <div className="container-Ap-Datails">
          <div className="div-img-buttons">
            <div className="imagem-ap">
              <SliderApartaments
                imagem01={img01}
                imagem02={img02}
                imagem03={img03}
                imagem04={img04}
              />
            </div>
            <div className="buttons-ap-details">
              <h1>Reservas aqui</h1>
              <a
                target="_blank"
                href="https://wa.me/5547997551106?text=Ol%C3%A1%21"
                rel="noreferrer"
              >
                <BtnWhatsapp />
              </a>
              <BtnBooking />
              <button
                className="btn-reservas btn-email"
                onClick={() => emailModalOpen()}
              >
                Email
              </button>
            </div>
          </div>
          <div className="descriptions-ap-details">
            <h1>Apartamento {apartments[3].name}</h1>
            <h1>Quartos: {apartments[3].info[0].rooms}</h1>
            <h1>wifi: {apartments[3].info[0].wiFi}</h1>
            <h1>sala: {apartments[3].info[0].livingRoom}</h1>
            <h1>Banheiro: {apartments[3].info[0].bathroom}</h1>
            <h1>Área privada: {apartments[3].info[0].privateArea}</h1>
            <h1>Cozinha: {apartments[3].info[0].kitchen}</h1>
            <h1>
              Quantidade de pessoas: {apartments[3].info[0].quantityOfPeaple}
            </h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
