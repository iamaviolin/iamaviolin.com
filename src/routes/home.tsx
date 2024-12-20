import { Link } from "wouter-preact";

import heroPng from "../assets/hero.png";
import heroWebp from "../assets/hero.webp";

import "./home.scss";

export const HomeRoute = () => (
  <main>
    <section className="home-wrapper">
      <div className="title">
        <h1>Kathleen Chen</h1>
      </div>
      <nav className="links">
        <ul>
          <li className="about">
            <Link href="/about">about</Link>
          </li>
          <li className="contact">
            <Link href="/contact">
              <span>contact</span>
            </Link>
          </li>
          <li className="live-sound">
            <Link href="/live-sound">live sound</Link>
          </li>
          <li className="music">
            <Link href="/music">
              <span>music</span>
            </Link>
          </li>
          <li className="profile-wrapper">
            <picture>
              <source type="image/webp" srcset={heroWebp} />
              <img
                src={heroPng}
                alt="Kathleen Chen working front of house, looking quite cheerful!"
              />
            </picture>
          </li>
        </ul>
      </nav>
      {/* 
      <footer>
        <a href="https://linkedin.com" target="_blank">
          linkedin or something
        </a>
      </footer>
      */}
    </section>
  </main>
);
