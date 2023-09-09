import React from 'react';
import "./Footer.css";
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div class="footer-section">
    <div class="footer-faded-text">Jaydeep Bariya</div>

    <div class="footer-navlinks">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contactme">Contact Me</a>
    </div>

    <div class="social-links">
      <a href='https://www.github.com/jaydeepbariya' target='_blank'><AiFillGithub size={40} /></a>
      <a href='https://www.instagram.com/jsbariya_5' target='_blank'><AiFillInstagram size={40} /></a>
      <a href='https://www.linkedin.com/in/jaydeepbariya' target='_blank'><AiFillLinkedin size={40} /></a>
    </div>
  </div>
  )
}

export default Footer