import contactPng from "../assets/contact.png";
import contactWebp from "../assets/contact.webp";

import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import xlr from "../assets/xlr.svg";

import "./contact.scss";

export const ContactRoute = () => (
  <main className="contact page">
    <h1 style={{ color: "orange" }}>contact</h1>

    <section className="contact-wrapper">
      <div className="contact-hero">
        <picture>
          <source type="image/webp" srcset={contactWebp} />
          <img
            src={contactPng}
            alt="FOH at Meguro Persimmon Hall"
          />
        </picture>
      </div>

      <div className="links">
        <article>
          <h2 className="visually-hidden">links</h2>

          <ul className="links">
            <li>
              <a href="mailto:iamaviolin@gmail.com" target="_blank">
                <img src={email} role="presentation" />
                email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rosemead/" target="_blank">
                <img src={linkedin} role="presentation" />
                linkedin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/audio.kat/" target="_blank">
                <img src={instagram} role="presentation" />
                instagram
              </a>
            </li>
          </ul>
        </article>

        <article className="orgs">
          <h2>organizations</h2>

          <ul className="orgs">
            <li>
              <a href="https://soundsysters.com/" target="_blank">
                <img src={xlr} role="presentation" />
                soundsysters
              </a>
            </li>
            <li>
              <a href="https://womeninlivemusic.eu/" target="_blank">
                <img src={xlr} role="presentation" />
                women in live music
              </a>
            </li>
            <li>
              <a href="https://soundgirls.org/" target="_blank">
                <img src={xlr} role="presentation" />
                soundgirls
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </main>
);
