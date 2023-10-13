import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-blue.jpeg";
import "./styles.css";

export default function Header({ title }) {
  const navigate = useNavigate();

  function navagation() {
    navigate("/");
  }

  return (
    <header className="container-header">
      <img className="logo" src={Logo} />

      <nav>
        <ul className="ul-header-apartament">
          <li>
            <a href="#section-1">
              <li onClick={() => navagation()}>Voltar</li>
            </a>
          </li>
          <li>
            <h2>{title}</h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}
