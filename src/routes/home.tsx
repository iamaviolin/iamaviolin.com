import { Link } from "wouter-preact";

import profile from "../assets/profile.png";

export const HomeRoute = () => (
  <div className="home-wrapper">
    <div className="title">
      <h1>Kathleen Chen</h1>
    </div>
    <nav className="links">
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">
            <span>contact</span>
          </Link>
        </li>
        <li>
          <Link href="/live-sound">live sound</Link>
        </li>
        <li>
          <Link href="/music">
            <span>music</span>
          </Link>
        </li>
      </ul>
      <img
        id="profile"
        src={profile}
        alt="Kathleen Chen working front of house, looking quite cheerful!"
      />
    </nav>
    <footer>
      <Link href="https://linkedin.com" target="_blank">
        linkedin or something
      </Link>
    </footer>
  </div>
);