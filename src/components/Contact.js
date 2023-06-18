import React from "react";

export default function Contact() {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact__content">
          <div class="contact__title">
            <p>contact</p>
            <h3>Don't be shy! Hit me up! 👇</h3>
          </div>
          <div class="contact__icons">
            <div class="contact__icon-box">
              <span>
                <i class="fa-solid fa-map-location-dot"></i>
              </span>
              <div class="contact__info">
                <h3>Location</h3>
                <p>Cairo, Egypt</p>
              </div>
            </div>
            <div class="contact__icon-box">
              <span>
                <i class="fa-solid fa-envelope-open-text"></i>
              </span>
              <div class="contact__info">
                <h3>Mail</h3>
                <a href="mailto:elsa33eed@gmail.com">elsa33eed@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
