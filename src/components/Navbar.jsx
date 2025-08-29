import "../stylesheets/basics.css";
import "../stylesheets/navbar.css";
import React from "react";

function Navbar() {
    return (
      <div className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
}

export default Navbar;