import React from "react";
import "./HeroSection.css";
import HeroTypeAnimation from "./HeroTypeAnimation";
import heroImg from "../../images/userAssets/userImg.jpg";
import dots from "../../images/userAssets/dots.png";
import cube from "../../images/userAssets/cube.png";
import circle from "../../images/userAssets/circle.png";
import plus from "../../images/userAssets/plus.png";
import zigzags from "../../images/userAssets/zigzags.png";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p id="greet">Hi!</p>
        <p id="name">Jaydeep Bariya</p>

        <div className="hero-anim">
          <p>I am a </p>
          <HeroTypeAnimation />
        </div>

        <p id="hero-about-text">
          I am a MERN Fullstack Web Developer. I am well aware of React,
          JavaScript, Express and MongoDB.
        </p>

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
          <a href="https://www.twitter.com/jbariya_dev" target="_blank" rel="noreferrer">
            <FaXTwitter size={40} />
          </a>
        </div>

        <div className="btns">
          <div className="hero-btn">
            <a
              href="https://drive.google.com/file/d/1Z3i6DhvcW26Z5L1L-gZdxgTENc8yFhx6/view?usp=sharing"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="hero-btn">
            <a href="#contactme">Let's Connect</a>
          </div>
        </div>
      </div>

      <div className="hero-img">
        <div className="absolute icons icon-dots">
          <img src={dots} alt="dots" />
        </div>
        <div className="absolute icons icon-cube">
          <img src={cube} alt="cube" />
        </div>
        <div className="absolute icons icon-circle">
          <img src={circle} alt="circle" />
        </div>
        <div className="absolute icons icon-zigzags">
          <img src={zigzags} alt="zigzags" />
        </div>
        <div className="absolute icons icon-plus">
          <img src={plus} alt="plus" />
        </div>
        <div className="absolute icons icon-user">
          <img src={heroImg} alt="userImg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
