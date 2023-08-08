import ImgFacebook from "../../assets/facebook_733547.png";
import ImgInstagram from "../../assets/instagram_1409946.png";
import WhatsappFooter from "../../assets/whatsapp-icon.png";
import "./styles.css";

function Footer() {
  return (
    <footer className="container-footer">
      <div className="div-footer">
        <div className="address-footer">
          <span>Endereço:</span>
          <span>Rua Chincharro, 309 - Centro, Bombinhas / SC</span>
        </div>
        <div className="social-midia-icons">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100064833496849"
            rel="noreferrer"
          >
            <img className="social-midia-icons-facebook" src={ImgFacebook} />
          </a>
          <a
            target="_blank"
            href="https://wa.me/5547997551106?text=Ol%C3%A1%21"
            rel="noreferrer"
          >
            <img className="social-midia-icons-facebook" src={WhatsappFooter} />
          </a>

          <a
            target="_blank"
            href="https://instagram.com/casas_da_sepultura.oficial?igshid=ZDdkNTZiNTM="
            rel="noreferrer"
          >
            <img className="social-midia-icons-intagram" src={ImgInstagram} />
          </a>
        </div>
      </div>
      <div className="startup">startup</div>
    </footer>
  );
}

export default Footer;
