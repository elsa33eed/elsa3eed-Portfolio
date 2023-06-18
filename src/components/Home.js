import React from "react";
import WavingHand from "../assets/waving.1bae5fcfb51082b5c2b4.png";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css3.svg";
import javascriptIcon from "../assets/javascript.svg";
import reactIcon from "../assets/reactjs.svg";
import bootstrapIcon from "../assets/bootstrap.svg";

export default function Home() {
  return (
    <section id="home" class="hero">
      <div class="container">
        <div class="content">
          <div class="hero-main">
            <div class="hero-text">
              <h1>Front-End React Developer</h1>
              <img src={WavingHand} alt="waving_hand" />
              <p>
                Hi, I'm Muhammed Saeed. A passionate Front-end React Developer
                based in Cairo, Egypt. 📍
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/elsa33eed/"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/elsa33eed"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
            <div class="hero-img"></div>
          </div>
          <div class="skills">
            <p>Tech Stack</p>
            <div class="logos">
              <ul>
                <li>
                  <img src={htmlIcon} title="HTML5" alt="skill-icon" />
                </li>
                <li>
                  <img src={cssIcon} title="CSS3" alt="skill-icon" />
                </li>
                <li>
                  <img
                    src={javascriptIcon}
                    title="Java Script"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img src={reactIcon} title="React" alt="skill-icon" />
                </li>
                <li>
                  <img src={bootstrapIcon} title="Bootstrap" alt="skill-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
