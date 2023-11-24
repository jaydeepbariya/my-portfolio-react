import React from "react";
import "./Skills.css";
import blob from "../../images/userAssets/blobvector.png";
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  return (
    <div class="skill-section" id="skills">
      <div class="faded-text-skill">Skills</div>

      <div class="skill-section-left">
        <div class="skill-heading">
          <span>M</span>e And
          <br />
          My Tech Stack
        </div>

        <div class="skill-subheading">
          <p class="skill-subheading-para">
            My name is Jaydeep Bariya, working as Full Stack Developer at
            Infosys Limited, Pune.{" "}
          </p>
          <p class="skill-subheading-para">
            I am having knowledge of MERN Stack. Also, I have knowledge of Java,
            Springboot and SQL.
          </p>
          <p class="skill-subheading-para">
            Everyday I learn new things and improve. I am excited to connect
            with you.
          </p>
        </div>
      </div>

      <div class="skill-section-right">
        <img src={blob} alt="blob" class="blob" />

        <div className="skill-section">
          <div className="skill-section-frontend">
            <div className="skill-card">
              <FaHtml5 size={40} />
              <p>HTML</p>
            </div>

            <div className="skill-card">
              <FaCss3Alt size={40} />
              <p>CSS</p>
            </div>

            <div className="skill-card">
              <FaJs size={40} />
              <p>Javascript</p>
            </div>

            <div className="skill-card">
              <SiTailwindcss size={40} />
              <p>Tailwind</p>
            </div>

            <div className="skill-card">
              <FaReact size={40} />
              <p>React</p>
            </div>

            <div className="skill-card">
              <SiRedux size={40} />
              <p>Redux</p>
            </div>
          </div>

          <div className="skill-section-backend">
            <div className="skill-card">
              <FaNodeJs size={40} />
              <p>NodeJs</p>
            </div>
            
            <div className="skill-card">
              <SiExpress size={40} />
              <p>Express</p>
            </div>

            <div className="skill-card">
              <FaJava size={40} />
              <p>Java</p>
            </div>

            <div className="skill-card">
              <SiSpringboot size={40} />
              <p>Springboot</p>
            </div>
          </div>

          <div className="skill-section-database">
            <div className="skill-card">
              <SiMongodb size={40} />
              <p>MongoDB</p>
            </div>

            <div className="skill-card">
              <SiMysql size={40} />
              <p>MySQL</p>
            </div>
          </div>

          <div className="skill-section-tools">
            <div className="skill-card">
              <SiGithub size={40} />
              <p>Github</p>
            </div>

            <div className="skill-card">
              <SiVisualstudiocode size={40} />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
