import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-blue.jpeg";
import "./styles.css";

export default function Header() {
  const navigate = useNavigate();

  function navagation() {
    navigate("/");
  }

  return (
    <header className="container-header">
      <img className="logo" src={Logo} />

      <nav className="nav-header">
        <ul className="nav-bar">
          <a href="#section-1">
            <li onClick={() => navagation()}>Voltar</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
