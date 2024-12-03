import contactPng from "../assets/contact.png";
import contactWebp from "../assets/contact.webp";

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
            alt="Kathleen Chen working front of house, looking quite cheerful!"
          />
        </picture>
      </div>

      <article>
        <h2>links</h2>

        <ul>
          <li>
            <a href="mailto:iamaviolin@gmail.com">email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rosemead/" target="_blank">
              linkedin
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/audio.kat/" target="_blank">
              instagram
            </a>
          </li>
        </ul>
      </article>

      <article>
        <h2>organizations</h2>

        <ul>
          <li>
            <a href="https://soundsysters.com/" target="_blank">
              soundsysters
            </a>
          </li>
          <li>
            <a href="https://womeninlivemusic.eu/" target="_blank">
              women in live music
            </a>
          </li>
          <li>
            <a href="https://soundgirls.org/" target="_blank">
              soundgirls
            </a>
          </li>
        </ul>
      </article>
    </section>
  </main>
);
