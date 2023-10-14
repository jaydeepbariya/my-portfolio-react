import React from "react";
import './Navbar.css';
import navbarLogo from "../../images/userAssets/NavLogo.jpg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-section">
        <img src={navbarLogo} alt="navbar-logo" id="navbar-img" width={40} height={40} />
        <p>aydeep Bariya</p>
      </div>

      <ul className="navlinks">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contactme">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
