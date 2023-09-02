import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const HeroTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'MERN Stack Developer',
        1000,
        'FrontEnd Developer',
        1000, 
        'BackEnd Developer',
        1000,
        'FullStack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5rem', display: 'inline-block',color:"#3333ff" }}
      repeat={Infinity}
    />
  )
}

export default HeroTypeAnimation