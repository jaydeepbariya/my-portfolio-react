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

      <div className="download-cv">
        <a href="https://drive.google.com/file/d/1Z3i6DhvcW26Z5L1L-gZdxgTENc8yFhx6/view?usp=sharing" download={true} target="_blank" rel="noreferrer">Download CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
