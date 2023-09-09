import React from 'react';
import './Skills.css';
import html from "../../images/stack/HTML.png";
import css from "../../images/icons/CSS.png";
import javascript from "../../images/icons/Javascript.svg";
import react from "../../images/icons/React.png";
import tailwind from "../../images/icons/Tailwind.png";
import nodejs from "../../images/icons/NodeJs.svg";
import expressjs from "../../images/icons/Express.png";
import mongodb from "../../images/icons/MongoDB.svg";
import github from "../../images/icons/Github.svg";
import redux from "../../images/icons/redux.png";
import sql from "../../images/icons/sql.jpg";
import springboot from "../../images/icons/springboot.png";
import java from "../../images/icons/java.png";
import blob from "../../images/userAssets/blobvector.png";


const Skills = () => {
  return (
    <div class="skill-section" id="skills">
        
    <div class="faded-text-skill">Skills</div>

    <div class="skill-section-left">
      <div class="skill-heading">
        <span>M</span>e And<br />
        MyTech Stack
      </div>

      <div class="skill-subheading">
        <p class="skill-subheading-para">My name is Jaydeep Bariya, I have been working as Systems Engineer at Infosys Limited for 1.5 Years. I work as a Full Stack Developer. </p>
        <p class="skill-subheading-para">I am having knowledge of MERN Stack. I have working knowledge of Java, Spring boot and SQL. </p>
        <p class="skill-subheading-para">I am excited to connect with you. </p>
      </div>
    </div>

    <div class="skill-section-right">
      <img src={blob} alt="blob" class="blob" />
      
      <img src={html} alt="html" class="skills-icon" />
      <img src={css} alt="css" class="skills-icon" />
      <img src={javascript} alt="javascript" class="skills-icon" />
      <img src={tailwind} alt="tailwind" class="skills-icon" />
      <img src={react} alt="react" class="skills-icon" />
      <img src={redux} alt="redux" class="skills-icon" />
      <img src={nodejs} alt="nodejs" class="skills-icon" />
      <img src={expressjs} alt="expressjs" class="skills-icon" />
      <img src={mongodb} alt="mongodb" class="skills-icon" />
      <img src={sql} alt="sql" class="skills-icon" />
      <img src={java} alt="java" class="skills-icon" />
      <img src={springboot} alt="springboot" class="skills-icon" />
    </div>
    
  </div>
  )
}

export default Skills