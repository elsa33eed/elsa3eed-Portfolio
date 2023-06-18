import React from "react";
import emojiImg from "../assets/emoji.png";
import aboutImg from "../assets/about.webp";
import textImg from "../assets/text.svg";

export default function About() {
  return (
    <section class="about" id="about">
      <div class="container">
        <div class="about-content">
          <div class="img-side">
            <img src={emojiImg} alt="emoji" class="work-emoji" />
            <img src={aboutImg} alt="mee" class="img-side__main-img" />
            <span>
              <img src={textImg} alt="text" />
            </span>
          </div>
          <div class="text-side">
            <h3>About me</h3>
            <h4>
              A dedicated Front-end Developer <br /> based in Cairo, Egypt 📍
            </h4>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, and Bootstrap. I excel
              in designing and maintaining responsive websites that offer a
              smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
