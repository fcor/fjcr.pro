import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ContactOverlay from "../ContactOverlay";
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
  const [contactOpen, setContactOpen] = useState(false);
  const contactButtonRef = useRef(null);
  const hamburgerRef = useRef(null);
  const returnFocusRef = useRef(null);
  const contactOverlayRef = useRef(null);

  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenuActive((active) => !active);
  };

  useEffect(() => {
    setMobileMenuActive(false);
    setContactOpen(false);
  }, [location]);

  const openContact = () => {
    returnFocusRef.current = window.matchMedia("(max-width: 800px)").matches
      ? hamburgerRef.current
      : contactButtonRef.current;
    setMobileMenuActive(false);
    setContactOpen(true);
  };

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`chrome-container ${styles.inner}`}>
          <NavLink to="/" className={styles.brand}>
            Fabio J. Cortés
          </NavLink>

          <div className={`${styles.menu} ${animationCS(mobileMenuActive)}`}>
            <div className={styles.mobileNavGroup}>
              <NavLink to="/" className={styles.mobileBrand} aria-label="Home">
                FJCR
              </NavLink>

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

              <button
                ref={contactButtonRef}
                type="button"
                className={`${styles.contact} sticker tilt-r`}
                onClick={openContact}
                aria-haspopup="dialog"
                aria-expanded={contactOpen}
              >
                Contact
              </button>
            </div>

            <p className={styles.mobileMotto}>Never waver, never falter.</p>
          </div>

          <button
            ref={hamburgerRef}
            type="button"
            onClick={toggleMenu}
            className={styles.hamburger}
            aria-label={mobileMenuActive ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={Boolean(mobileMenuActive)}
          >
            <div className={`${styles.bar} ${styles.b1} ${animationCS(mobileMenuActive)}`}></div>
            <div className={`${styles.bar} ${styles.b2} ${animationCS(mobileMenuActive)}`}></div>
            <div className={`${styles.bar} ${styles.b3} ${animationCS(mobileMenuActive)}`}></div>
          </button>
        </div>
      </nav>

      <CSSTransition
        nodeRef={contactOverlayRef}
        in={contactOpen}
        timeout={180}
        classNames={{
          enter: styles.contactFadeEnter,
          enterActive: styles.contactFadeEnterActive,
          exit: styles.contactFadeExit,
          exitActive: styles.contactFadeExitActive,
        }}
        unmountOnExit
      >
        <ContactOverlay
          nodeRef={contactOverlayRef}
          onClose={closeContact}
          returnFocusRef={returnFocusRef}
        />
      </CSSTransition>
    </>
  );
};

export default Navbar;
