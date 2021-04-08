import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const colors = ["#C699F7", "#7EBAFF", "#9CEF9D", "#E34B30"];
const menu = ["Home", "Projects", "Talks", "Articles", "Teaching"];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("");
  
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

  useEffect(() => {
    let newLocation;

    if (location.pathname === "/") {
      newLocation = "home";
    } else {
      newLocation = location.pathname.replace("/", "");
    }

    setSelectedTab(newLocation);
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="nav">
        {menu.map((item) => (
          <li key={item}>
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
      </ul>
    </nav>
  );
};

export default Navbar;
