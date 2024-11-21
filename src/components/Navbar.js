import React from "react";
import '../assets/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">Sai Kumar Reddy</a>
        <ul>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
