import React from "react";
import "./Footer.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div class="footer-section">
      <div class="footer-faded-text">Jaydeep Bariya</div>

      <div class="footer-navlinks">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contactme">Contact</a>
      </div>

      <div class="social-links">
        <a href="https://www.github.com/jaydeepbariya" target="_blank" rel="noreferrer">
          <AiFillGithub size={40} />
        </a>
        <a href="https://www.instagram.com/jsbariya_5" target="_blank" rel="noreferrer">
          <AiFillInstagram size={40} />
        </a>
        <a href="https://www.linkedin.com/in/jaydeepbariya" target="_blank" rel="noreferrer">
          <AiFillLinkedin size={40} />
        </a>
        <a
          href="https://www.twitter.com/jbariya_dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter size={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
