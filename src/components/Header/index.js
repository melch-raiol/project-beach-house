import { useEffect, useState } from "react";
import Logo from "../../assets/logo-blue.jpeg";
import "./styles.css";

function Header() {
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

  return (
    <header className="container-header">
      <img className="logo" src={Logo} />

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
          <li onClick={() => handleActivedMenu()}>
            <a href="#section-1">Home</a>
          </li>
          <li onClick={() => handleActivedMenu()}>
            <a href="#section-2">About</a>
          </li>
          <li onClick={() => handleActivedMenu()}>
            <a href="#section-3">Apartaments</a>
          </li>
          <li onClick={() => handleActivedMenu()}>
            <a href="#section-4">Localization</a>
          </li>
          <li onClick={() => handleActivedMenu()}>
            <a href="#section-5">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
