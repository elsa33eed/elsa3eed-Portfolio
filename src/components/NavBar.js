import React, { useState } from "react";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const handleClik = () => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <nav>
        <h3 className="logo">elsa3eed</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={handleClik}>
            <svg className="fa-solid fa-bars-staggered mobile-menu"></svg>
          </li>
        </ul>
      </nav>
      <div
        className={isActive ? "mobile-nav open-menu" : "mobile-nav closed-menu"}
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
