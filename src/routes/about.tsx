import { Link } from "wouter-preact";
import aboutPng from "../assets/about.png";
import aboutWebp from "../assets/about.webp";

import "./about.scss";

export const AboutRoute = () => (
  <main className="about page">
    <h1 style={{ color: "#ffff75" }}>about</h1>

    <section>
      <picture className="about-hero" alt="Kathleen Chen as monitor engineer">
        <source type="image/webp" srcset={aboutWebp} />
        <img
          src={aboutPng}
          alt="Kathleen Chen working front of house, looking quite cheerful!"
        />
      </picture>
      <div>
        <p>Hi there/Hallöchen/你好！👋</p>
        <p>
          I’m a live sound engineer from California, now based in Berlin,
          Germany.
        </p>
        <p>
          Though I’ve tried on various hats in the music industry, I'm currently
          focused on mixing concerts/events and helping performers sound their
          best onstage. In recent years I’ve had the pleasure of touring
          internationally as a FOH/Monitor engineer and playback engineer. 
          Otherwise, I am troubleshooting technical issues at Ableton. Previously, 
          I studied violin performance and audio production, and graduated from 
          Berklee College of Music in 2017.
        </p>
        <p>
          Representation in event technology has some ways to go. I've been
          working with local sound crew Soundsysters to teach and support
          FLINTA* people interested in audio.
        </p>
        <p>
     <p style={{ textAlign: "center", color: "orange", fontSize: "125%" }}>
          <Link href="https://www.l-acoustics.com/stories/women-in-pro-audio-kathleen-chen/">
          check out my interview with L-Acoustics</Link>
          </p>
          <p>
        <p style={{ textAlign: "center", color: "orange", fontSize: "125%" }}>
          <Link href="/contact">say hello</Link>
        </p>
      </div>
    </section>
    <br />
  </main>
);
