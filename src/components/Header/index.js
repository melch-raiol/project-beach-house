import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./styles.css";

export default function Header() {
  const [activedMenu, setActivedMenu] = useState(true);
  const [checkbox, setCheckbox] = useState(true);

  function handleActivedMenu() {
    setActivedMenu(!activedMenu);
    setCheckbox(!checkbox);
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

  return (
    <header className="container-header">
      <img className="logo" src={Logo} />

      <input
        // type="checkbox"
        type={checkbox ? "checkbox" : ""}
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
          <a href="#section-1">
            <li onClick={() => handleActivedMenu()}>Home</li>
          </a>
          <a href="#section-2">
            <li onClick={() => handleActivedMenu()}>About</li>
          </a>
          <a href="#apartamentos">
            <li onClick={() => handleActivedMenu()}>Apartaments</li>
          </a>
          <a href="#section-4">
            <li onClick={() => handleActivedMenu()}>Localization</li>
          </a>
          <a href="#section-5">
            <li onClick={() => handleActivedMenu()}>Contacts</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
