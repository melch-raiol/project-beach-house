import ImgWhatsapp from "../../assets/whatsapp-icon.png";
import "./styles.css";

export default function Whatsapp() {
  return (
    <div className="container-whatsapp">
      <a
        className="logo-whatsapp"
        target="_blank"
        href="https://wa.me/5547997551106?text=Ol%C3%A1%21"
      >
        <img className="img-whatsapp" src={ImgWhatsapp} />
      </a>
    </div>
  );
}
