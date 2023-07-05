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

  // function handleHome() {
  //   navigate("/");
  // }

  // function handleAboutUs() {
  //   navigate("/AboutUs");
  // }

  // function handleContact() {
  //   navigate("/Contact");
  // }

  // function handleBook() {
  //   navigate("/Book");
  // }

  // function handleApartments() {
  //   navigate("/Apartments");
  // }

  return (
    <header className="container-header">
      <div className="logo">LOGO</div>

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

      <nav className={activedMenu ? "menu-sandwich" : "nav-header"}>
        <ul className="nav-bar">
          <li>
            <a href="#section-1">Home</a>
          </li>
          <li>
            <a href="#section-2">About</a>
          </li>
          <li>
            <a href="#section-3">Apartaments</a>
          </li>
          <li>
            <a href="#section-4">Localization</a>
          </li>
          <li>
            <a href="#section-5">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
