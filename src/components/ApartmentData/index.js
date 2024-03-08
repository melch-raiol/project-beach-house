import "./styles.css";
import Whatsapp from "../../components/Whatsapp";
import SliderApartaments from "../../components/SliderApartaments";

import bedIcon from "../../assets/icons/bed.svg";
import wifiIcon from "../../assets/icons/wifi.svg";
import livingRoomIcon from "../../assets/icons/icons8-sala-de-estar-64.png";
import bathRoomIcon from "../../assets/icons/bathroom.svg";
import privateAreaIcon from "../../assets/icons/privateArea.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";
import personIcon from "../../assets/icons/person.svg";
import grillIcon from "../../assets/icons/grill.svg";

export default function ApartmentData({ apartmentProps, icons }) {
  return (

        <div className="container-ap-details">
          <div className="div-img-buttons">
            <div className="image-ap">
              <SliderApartaments
                imagem01={apartmentProps.images[0]}
                imagem02={apartmentProps.images[1]}
                imagem03={apartmentProps.images[2]}
                imagem04={apartmentProps.images[3]}
              />
            </div>
            <div className="buttons-ap-details">
              <h1>Reservas</h1>
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
            <div className="div-description icon">
              <img src={bedIcon} alt="quarto ícone" />
              <h1> {apartmentProps.info[0].rooms}</h1>
            </div>
            <div className="div-description icon">
              <img src={wifiIcon} alt="" />
              <h1> {apartmentProps.info[0].wiFi}</h1>
            </div>
            <div className="div-description icon">
              <img src={livingRoomIcon} alt="sala ícone" />
              <h1> {apartmentProps.info[0].livingRoom}</h1>
            </div>
            <div className="div-description icon">
              <img src={bathRoomIcon} alt="banheiro ícone" />
              <h1> {apartmentProps.info[0].bathroom}</h1>
            </div>
            <div className="div-description icon private-area">
              <img src={privateAreaIcon} alt="área privada ícone" />
              <h1> {apartmentProps.info[0].privateArea}</h1>
            </div>
            <div className="div-description icon">
              <img src={kitchenIcon} alt="cozinha ícone" />
              <h1> {apartmentProps.info[0].kitchen}</h1>
            </div>
            <div className="div-description icon">
              <img src={personIcon} alt="" />
              <h1>{apartmentProps.info[0].quantityOfPeaple}</h1>
            </div>
            <div className="div-description icon">
              <img src={grillIcon} alt="" />
              <h1>{apartmentProps.info[0].grill}</h1>
            </div>
          </div>
        </div>
      
  );
}
