import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

const animationCS = (isActive) => {
  if (isActive === null) {
    return "";
  }
  return isActive ? styles.in : styles.out;
};

const menu = ["Work", "Talks", "About"];

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(null);

  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenuActive((active) => !active);
  };

  useEffect(() => {
    setMobileMenuActive(false);
  }, [location]);

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Fabio J. Cortés
      </NavLink>

      <div className={`${styles.menu} ${animationCS(mobileMenuActive)}`}>
        <ul className={`${styles.center} sticker tilt-l`}>
          {menu.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Placeholder — will open a full-screen contact overlay later. */}
        <button type="button" className={`${styles.contact} sticker tilt-r`}>
          Contact
        </button>
      </div>

      <div onClick={toggleMenu} className={styles.hamburger}>
        <div className={`${styles.bar} ${styles.b1} ${animationCS(mobileMenuActive)}`}></div>
        <div className={`${styles.bar} ${styles.b2} ${animationCS(mobileMenuActive)}`}></div>
        <div className={`${styles.bar} ${styles.b3} ${animationCS(mobileMenuActive)}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
