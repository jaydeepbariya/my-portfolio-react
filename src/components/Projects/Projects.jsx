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
import redux from "../../images/icons/redux.png";

const Projects = () => {
  return (
    <div className="project-section" id="projects">
      <h1 className="project-section-heading">Projects</h1>

      <div className="project-container">
        <div className="project-group">
          <p className="project-group-heading">MERN Full Stack</p>

          <div className="project-group-cards">
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
                    <a
                      href="https://studynotion-frontend-ho1v2d6dg-jaydeepbariya.vercel.app/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://www.github.com/jaydeepbariya/studynotion_app"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="project-group-heading">ReactJS</p>

          <div className="project-group-cards">
            <div className="project-detail" id="project21">
              <div className="project-number project-number-left">01</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={css} alt="css" />
                  <img className="skill-icon" src={javascript} alt="javascript" />
                  <img className="skill-icon" src={react} alt="react" />
                  <img className="skill-icon" src={redux} alt="redux" />
                </div>

                <div className="project-heading">ShoppingCart App</div>

                <div className="project-description">
                  Shopping Cart Application with React and Redux.
                </div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://shopping-cart-redux-gilt.vercel.app/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://www.github.com/jaydeepbariya/ShoppingCartRedux"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="project-group-heading">HTML, CSS and JavaScript</p>

          <div className="project-group-cards">
            <div className="project-detail" id="project31">
              <div className="project-number project-number-left">01</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={css} alt="css" />
                  <img className="skill-icon" src={javascript} alt="javascript" />
                </div>

                <div className="project-heading">WeatherApp</div>

                <div className="project-description"></div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://jaydeepbariya.github.io/WeatherApp/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://github.com/jaydeepbariya/WeatherApp"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-detail" id="project32">
              <div className="project-number project-number-left">02</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={css} alt="css" />
                  <img className="skill-icon" src={javascript} alt="javascript" />
                </div>

                <div className="project-heading">DevDetective App</div>

                <div className="project-description">Search Github Details</div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://jaydeepbariya.github.io/DevDetective/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://www.github.com/jaydeepbariya/DevDetective"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-detail" id="project33">
              <div className="project-number project-number-left">03</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={css} alt="css" />
                  <img className="skill-icon" src={javascript} alt="javascript" />
                </div>

                <div className="project-heading">PasswordGenerator App</div>

                <div className="project-description"></div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://jaydeepbariya.github.io/PasswordGenerator/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://github.com/jaydeepbariya/PasswordGenerator"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="project-group-heading">Tailwind</p>

          <div className="project-group-cards">
            <div className="project-detail" id="project41">
              <div className="project-number project-number-left">01</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={tailwind} alt="tailwind" />
                </div>

                <div className="project-heading">Razorpay Clone</div>

                <div className="project-description"></div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://incomparable-belekoy-d1ee93.netlify.app/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://github.com/jaydeepbariya/Razorpay_Clone"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-detail" id="project42">
              <div className="project-number project-number-left">02</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={tailwind} alt="tailwind" />
                </div>

                <div className="project-heading">Discord Clone</div>

                <div className="project-description"></div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://delightful-strudel-75e683.netlify.app/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://github.com/jaydeepbariya/Discord_Clone"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-detail" id="project43">
              <div className="project-number project-number-left">03</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={tailwind} alt="tailwind" />
                </div>

                <div className="project-heading">Nike Clone</div>

                <div className="project-description"></div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://fastidious-gnome-320c5a.netlify.app/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://github.com/jaydeepbariya/nike_landing_page_clone"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="project-group-heading">HTML and CSS</p>

          <div className="project-group-cards">
            <div className="project-detail" id="project51">
              <div className="project-number project-number-left">01</div>
              <div className="project-content">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={css} alt="css" />
                </div>

                <div className="project-heading">ImageGallery</div>

                <div className="project-description"></div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://jaydeepbariya.github.io/ImageGallery/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://github.com/jaydeepbariya/ImageGallery"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-detail" id="project52">
              <div className="project-number project-number-left">02</div>
              <div className="project-content project-content-left">
                <div className="skill-container">
                  <img className="skill-icon" src={html} alt="html" />
                  <img className="skill-icon" src={css} alt="css" />
                </div>

                <div className="project-heading">Portfolio App</div>

                <div className="project-description"></div>

                <div className="btn-grp">
                  <div className="project-btn">
                    <a
                      href="https://jaydeepbariya.github.io/PortfolioWebsite/"
                      target="_blank"
                    >
                      Visit
                    </a>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://github.com/jaydeepbariya/PortfolioWebsite"
                      target="_blank"
                    >
                      SourceCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <a className="exploreGitProfile" href="https://www.github.com/jaydeepbariya" title="Visit GitHub Profile">
          Explore Other Projects
      </a>
    </div>
  );
};

export default Projects;
