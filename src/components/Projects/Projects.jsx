import React from "react";
import "./Projects.css";
import html from "../../images/stack/HTML.png";
import css from "../../images/icons/CSS.png";
import javascript from "../../images/icons/Javascript.svg";
import react from "../../images/icons/React.png";
import tailwind from "../../images/icons/Tailwind.png";
import nodejs from "../../images/icons/NodeJs.svg";
import expressjs from "../../images/icons/Express.png";
import mongodb from "../../images/icons/MongoDB.svg";
import github from "../../images/icons/Github.svg";

const Projects = () => {
  return (
    <div className="project-section">
      <h1 className="project-section-heading">Projects</h1>

      <div className="project-container">
        <div className="project-detail" id="project1">
          <div className="project-number project-number-left">01</div>
          <div className="project-content project-content-left">
            <div className="skill-container">
              <img className="skill-icon" src={html} alt="html" />
              <img className="skill-icon" src={css} alt="css" />
              <img className="skill-icon" src={javascript} alt="javascript" />
              <img className="skill-icon" src={react} alt="react" />
              <img className="skill-icon" src={tailwind} alt="tailwind" />
              <img className="skill-icon" src={nodejs} alt="nodejs" />
              <img className="skill-icon" src={expressjs} alt="expressjs" />
              <img className="skill-icon" src={mongodb} alt="mongodb" />
              <img className="skill-icon" src={github} alt="mongodb" />
            </div>

            <div className="project-heading">StudyNotion App</div>

            <div className="project-description">
              This is a Full Stack EdTech Application.
            </div>

            <div className="btn-grp">
              <div className="project-btn">
                <a href="https://studynotion-frontend-ho1v2d6dg-jaydeepbariya.vercel.app/">
                  Visit StudyNotion
                </a>
              </div>
              <div className="project-btn">
                <a href="https://www.github.com/jaydeepbariya/studynotion_app">
                  Explore SourceCode
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-detail" id="project2">
          <div className="project-number project-number-left">02</div>
          <div className="project-content project-content-left">
            <div className="skill-container">
              <img className="skill-icon" src={html} alt="html" />
              <img className="skill-icon" src={css} alt="css" />
              <img className="skill-icon" src={tailwind} alt="tailwind" />
            </div>

            <div className="project-heading">Nike Landing Page Clone</div>

            <div className="project-description">
              This is a clone of Nike landing page. Made with HTML, CSS and Tailwind.
            </div>

            <div className="btn-grp">
              <div className="project-btn">
                <a href="https://fastidious-gnome-320c5a.netlify.app/">
                  Visit
                </a>
              </div>
              <div className="project-btn">
                <a href="https://github.com/jaydeepbariya/nike_landing_page_clone">
                  Explore SourceCode
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-detail" id="project3">
          <div className="project-number project-number-left">02</div>
          <div className="project-content project-content-left">
            <div className="skill-container">
              <img className="skill-icon" src={html} alt="html" />
              <img className="skill-icon" src={css} alt="css" />
              <img className="skill-icon" src={tailwind} alt="tailwind" />
            </div>

            <div className="project-heading">Nike Landing Page Clone</div>

            <div className="project-description">
              This is a clone of Nike landing page. Made with HTML, CSS and Tailwind.
            </div>

            <div className="btn-grp">
              <div className="project-btn">
                <a href="https://fastidious-gnome-320c5a.netlify.app/">
                  Visit
                </a>
              </div>
              <div className="project-btn">
                <a href="https://github.com/jaydeepbariya/nike_landing_page_clone">
                  Explore SourceCode
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-detail" id="project4">
          <div className="project-number project-number-left">02</div>
          <div className="project-content project-content-left">
            <div className="skill-container">
              <img className="skill-icon" src={html} alt="html" />
              <img className="skill-icon" src={css} alt="css" />
              <img className="skill-icon" src={tailwind} alt="tailwind" />
            </div>

            <div className="project-heading">Nike Landing Page Clone</div>

            <div className="project-description">
              This is a clone of Nike landing page. Made with HTML, CSS and Tailwind.
            </div>

            <div className="btn-grp">
              <div className="project-btn">
                <a href="https://fastidious-gnome-320c5a.netlify.app/">
                  Visit
                </a>
              </div>
              <div className="project-btn">
                <a href="https://github.com/jaydeepbariya/nike_landing_page_clone">
                  Explore SourceCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
