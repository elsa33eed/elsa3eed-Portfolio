import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footerc">
          <h3>Copyright &copy; 2023. All rights are reserved</h3>
          <div class="footerc__socials">
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/elsa33eed/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/elsa33eed"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
