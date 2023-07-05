import React from "react";
import SignIn from "../assets/websites/SignIn.png";
import SignUp from "../assets/websites/SignUp.png";
import Dashboard from "../assets/websites/dashboard.png";
import Bootstrap from "../assets/websites/bootstrap.png";
import Elite from "../assets/websites/Elite-crop.png";

export default function Project() {
  return (
    <section id="projects" class="project">
      <div class="container">
        <div class="project-content">
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div class="projects-grid">
            <div class="pro pro__1 undefined">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://pnft-market.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <div className="image-content">
                    <img
                      className="animation-one img-fluid"
                      src={SignIn}
                      alt="website"
                      // style={transform: translateY(0%); transition: transform 10s ease-in-out 0s;}
                    />
                    <img
                      className="animation-two img-fluid"
                      src={SignUp}
                      alt="website"
                      // style={transform: translateY(0%); transition: transform 10s ease-in-out 0s;}
                    />
                  </div>
                </a>
              </div>
              <div class="pro__text">
                <h3>PNFT Market 🛒</h3>
                <p>
                  This is a Sign in and Sign up page for PNFT Market. A NFT is
                  Non-fungible token. “Non-fungible” more or less means that
                  it’s unique and can’t be replaced with something else.
                </p>
                <div class="stack">
                  <p>React</p>
                  <p>Bootstrap</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/elsa33eed/NFT-market"
                    rel="noopener noreferrer"
                  >
                    Code <i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://pnft-market.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="pro pro__1 reversed-proj">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://dashboard-elsa33eed.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Dashboard}
                    alt="website"
                    // style="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"
                  />
                </a>
              </div>
              <div class="pro__text">
                <h3>Dashboard 📊</h3>
                <p>
                  Dashboard is an information management tool that receives data
                  from a linked database to provide data visualizations.
                </p>
                <div class="stack">
                  <p>HTML</p>
                  <p>CSS (My Framework)</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/elsa33eed/Dashboard"
                    rel="noopener noreferrer"
                  >
                    Code <i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://dashboard-elsa33eed.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="pro pro__1 undefined">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://bootstrap-elsa33eed.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Bootstrap}
                    alt="website"
                    // style="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"
                  />
                </a>
              </div>
              <div class="pro__text">
                <h3>Bootstrap.Inc 💼</h3>
                <p>
                  A Bootstrap.inc is website for bootstrap agency. It’s show a
                  company information and make easy contact with customer.
                </p>
                <div class="stack">
                  <p>HTML</p>
                  <p>Bootstrap</p>
                  <p>Javascript</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/elsa33eed/Bootstrap"
                    rel="noopener noreferrer"
                  >
                    Code <i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://bootstrap-elsa33eed.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="pro pro__1 reversed-proj">
              <div class="pro__img">
                <a
                  target="_blank"
                  href="https://elite-crop.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Elite}
                    alt="website"
                    // style="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"
                  />
                </a>
              </div>
              <div class="pro__text">
                <h3>Elite Crop 🚩</h3>
                <p>
                  With a focus on simplicity and clean design, this agency
                  prioritizes user experience, making it easy for customers to
                  find and purchase the services they need.
                </p>
                <div class="stack">
                  <p>HTML</p>
                  <p>Bootstrap</p>
                </div>
                <div class="links">
                  <a
                    target="_blank"
                    href="https://github.com/elsa33eed/Elite-Crop"
                    rel="noopener noreferrer"
                  >
                    Code <i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://elite-crop.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
