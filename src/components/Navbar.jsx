import "../stylesheets/basics.css";
import "../stylesheets/navbar.css";
import { useState } from "react";
import React from "react";
import { VscLightbulb } from "../../node_modules/react-icons/vsc/index";

function Navbar() {

  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }
  
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={toggleTheme} className="btn" id="theme_btn">
          {theme === "dark" ? "Change to light theme" : "Change to dark theme"}
        </button>
      </div>
    );
}

export default Navbar;