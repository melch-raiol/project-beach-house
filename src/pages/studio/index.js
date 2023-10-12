import img01 from "../../assets/Imags/studio/img-studio-01.jpg";
import img02 from "../../assets/Imags/studio/img-studio-02.jpg";
import img03 from "../../assets/Imags/studio/img-studio-03.jpg";
import img04 from "../../assets/Imags/studio/img-studio-04.jpg";

import bedIcon from "../../assets/icons/bed.svg";
import wifiIcon from "../../assets/icons/wifi.svg";
import livingRoomIcon from "../../assets/icons/icons8-sala-de-estar-64.png";
import bathRoom from "../../assets/icons/bathroom.svg";
import privateArea from "../../assets/icons/privateArea.svg";
import kitchen from "../../assets/icons/kitchen.svg";
import person from "../../assets/icons/person.svg";

import Footer from "../../components/Footer";
import HeaderApartaments from "../../components/HeaderApartaments";
import SliderApartaments from "../../components/SliderApartaments";
import apartments from "../../databases/databases";
import "./styles.css";
import Whatsapp from "../../components/Whatsapp";

export default function Studio() {
  return (
    <div className="studio">
      <HeaderApartaments />
      <Whatsapp />
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
              <div className="div-btn-reservation">
                <a
                  target="_blank"
                  href="https://wa.me/5547997551106?text=Ol%C3%A1%21"
                  rel="noreferrer"
                >
                  <button className="btn-reservas btn-whatsapp">
                    Whatsapp
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://www.airbnb.com.br/rooms/46407357?_set_bev_on_new_domain=1697134254_OGMwZDVjYTg1ZTRl&source_impression_id=p3_1697134255_AW0QZCt4TSD90oru"
                  rel="noreferrer"
                >
                  <button className="btn-reservas btn-airbnb">Airbnb</button>
                </a>
              </div>
            </div>
          </div>
          <div className="descriptions-ap-details">
            <div className="div-description apartament-title">
              <h1>Apartamento {apartments[3].name}</h1>
            </div>
            <div className="div-description icon">
              <img src={bedIcon} alt="quarto ícone" />
              <h1> {apartments[3].info[0].rooms}</h1>
            </div>
            <div className="div-description icon">
              <img src={wifiIcon} alt="" />
              <h1> {apartments[3].info[0].wiFi}</h1>
            </div>
            <div className="div-description icon">
              <img src={livingRoomIcon} alt="sala ícone" />
              <h1> {apartments[3].info[0].livingRoom}</h1>
            </div>
            <div className="div-description icon">
              <img src={bathRoom} alt="banheiro ícone" />
              <h1> {apartments[3].info[0].bathroom}</h1>
            </div>
            <div className="div-description icon private-area">
              <img src={privateArea} alt="área privada ícone" />
              <h1> {apartments[3].info[0].privateArea}</h1>
            </div>
            <div className="div-description icon">
              <img src={kitchen} alt="cozinha ícone" />
              <h1> {apartments[3].info[0].kitchen}</h1>
            </div>
            <div className="div-description icon">
              <img src={person} alt="" />
              <h1>{apartments[3].info[0].quantityOfPeaple}</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
