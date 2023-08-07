import ImgFacebook from "../../assets/facebook.png";
import ImgInstagram from "../../assets/instagram.png";
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
