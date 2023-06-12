import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const [activedMenu, setActivedMenu] = useState(true);

  function handleActivedMenu() {
    setActivedMenu(!activedMenu);
  }

  useEffect(() => {
    const verifyWindowWidth = () => {
      if (window.innerWidth < 600) {
        setActivedMenu(!activedMenu);
      } else {
        setActivedMenu(false);
      }
    };

    verifyWindowWidth();
    window.addEventListener("resize", verifyWindowWidth);
    return () => {
      window.removeEventListener("resize", verifyWindowWidth);
    };
  }, []);

  function handleHome() {
    navigate("/");
  }

  function handleAboutUs() {
    navigate("/AboutUs");
  }

  function handleContact() {
    navigate("/Contact");
  }

  function handleBook() {
    navigate("/Book");
  }

  function handleApartments() {
    navigate("/Apartments");
  }

  return (
    <header className="container-header">
      <input
        type="checkbox"
        id="checkbox-menu"
        onClick={() => handleActivedMenu()}
      />
      <label className="menu" htmlFor="checkbox-menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="logo">LOGO</div>
      <nav className={activedMenu ? "menu-sandwich" : "nav-header"}>
        <div className="nav-header-options" onClick={() => handleHome()}>
          Home
        </div>
        <div className="nav-header-options" onClick={() => handleAboutUs()}>
          Sobre Somos
        </div>
        <div className="nav-header-options" onClick={() => handleApartments()}>
          Apartamentos
        </div>
        <div className="nav-header-options" onClick={() => handleContact()}>
          Contato
        </div>
      </nav>
      <div className="social-midia-icons">
        <div className="nav-header-options" onClick={() => handleBook()}>
          Reservas
        </div>
      </div>
    </header>
  );
}

export default Header;
