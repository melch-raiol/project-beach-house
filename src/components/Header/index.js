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
          <li>Home</li>
          <li>About</li>
          <li>Rooms</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
