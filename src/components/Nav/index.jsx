import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./styles.css";
import logo from "../../images/logo2.png";

import { getRandomColor } from "../../utils/index";

const animationCS = (isActive) => {
  if (isActive === null) {
    return "";
  } else if (isActive) {
    return "in";
  } else if (!isActive) {
    return "out";
  }
};

const menu = ["Home", "Work", "Talks", "Articles", "Teaching"];

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [mobileMenuActive, setMobileMenuActive] = useState(null);

  const location = useLocation();

  const selectedColor = getRandomColor();

  const onHoverOut = (e) => {
    const thisTab = e.target.text.toLowerCase();
    if (thisTab !== selectedTab) {
      e.target.style.color = "white";
    }
  };

  const onHover = (e) => {
    const thisTab = e.target.text.toLowerCase();

    if (thisTab !== selectedTab) {
      const col = getRandomColor();
      e.target.style.color = col;
      // setSelectedColor(col);
    }
  };

  const handleClick = (e) => {
    setMobileMenuActive(!mobileMenuActive);
  };

  useEffect(() => {
    let newLocation;

    if (location.pathname === "/") {
      newLocation = "home";
    } else {
      newLocation = location.pathname.replace("/", "");
    }

    setSelectedTab(newLocation);
    setMobileMenuActive(false);
  }, [location]);

  return (
    <nav className="navbar">
      <ul className={`nav ${animationCS(mobileMenuActive)}`}>
        <img src={logo} alt="Logo" className="floating-logo" />
        {menu.map((item) => (
          <li className="nav-item" key={item}>
            {item === "Home" ? (
              <NavLink
                exact
                to="/"
                onMouseOver={onHover}
                onMouseOut={onHoverOut}
                activeStyle={{ color: selectedColor }}
              >
                {item}
              </NavLink>
            ) : (
              <NavLink
                to={`/${item.toLowerCase()}`}
                onMouseOver={onHover}
                onMouseOut={onHoverOut}
                activeStyle={{ color: selectedColor }}
              >
                {item}
              </NavLink>
            )}
          </li>
        ))}
        <li className="nav-item">
          <a
            href="https://www.fjcr.studio/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={onHover}
            onMouseOut={onHoverOut}
          >
            Shop
          </a>
        </li>
      </ul>
      <div onClick={handleClick} className="hamburger-menu">
        <div className={`bar b1 ${animationCS(mobileMenuActive)}`}></div>
        <div className={`bar b2 ${animationCS(mobileMenuActive)}`}></div>
        <div className={`bar b3 ${animationCS(mobileMenuActive)}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
