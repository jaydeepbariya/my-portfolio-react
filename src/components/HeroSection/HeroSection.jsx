import React from 'react';
import './HeroSection.css';
import HeroTypeAnimation from './HeroTypeAnimation';
import heroImg from '../../images/userAssets/userImg.jpg';
import dots from '../../images/userAssets/dots.png';
import cube from '../../images/userAssets/cube.png';
import circle from '../../images/userAssets/circle.png';
import plus from '../../images/userAssets/plus.png';
import zigzags from '../../images/userAssets/zigzags.png';

const HeroSection = () => {

  const hireMe = () => {

  }

  return (
    <div className='hero'>
        <div className='hero-text'>
          
          <p id='greet'>Hi!</p>
          <p id='name'>Jaydeep Bariya</p>
          
          <div className='hero-anim'>
            <p>I am a </p>
            <HeroTypeAnimation />
          </div>

          <p id='hero-about-text'>I am a MERN Fullstack Web Developer. I am well aware of React, JavaScript, Express and MongoDB.</p>
        
        <div className='hero-btn'>
          <button><a href='#contact'>Hire Me</a></button>
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
  )
}

export default HeroSection