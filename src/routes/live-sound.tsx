import { Link } from "wouter-preact";
import "./live-sound.scss";

import educationPng from "../assets/education.png";
import educationWebp from "../assets/education.webp";
import fohMonitorPng from "../assets/foh-monitor.png";
import fohMonitorWebp from "../assets/foh-monitor.webp";
import systemDesignPng from "../assets/system-design.png";
import systemDesignWebp from "../assets/system-design.webp";

export const LiveSoundRoute = () => (
  <main className="live-sound page">
    <h1 style={{ color: "#75a56b" }}>live sound</h1>

    <details>
      <summary>FOH / monitors</summary>
      <span>
        <picture>
          <source type="image/webp" srcset={fohMonitorWebp} />
          <img
            src={fohMonitorPng}
            alt="Front of house at EWE Arena, Germany"
          />
        </picture>
        <p>
          I freelance as a FOH/Mon engineer, often handling RF coordination or
          Ableton playback as well. Empowering artists to realize their sonic
          vision and feel comfortable onstage is my passion.
        </p>
        <p>
          In recent years I've toured internationally with artists including Büşra 
          Kayıkçı, KAFVKA, Alice Phoebe Lou, C’est Karma, Edo Saiya, Salomea, and
          Tuvaband. In 2025, I mixed FOH for a circus arena tour (up to 12,000 
          cap.) across 22 cities with a 360° PA. I've also mixed stages in 
          Rock am Ring/Rock im Park, Highfield Festival, Elbphilharmonie 
          Hamburg, Vienna Konzerthaus, Meguro Persimmon Hall, among others. 
          With my experience troubleshooting as a tech specialist at Ableton, I've 
          started doing playback engineering and Autotune operation for bands like 
          Blumengarten.
        </p>
        <p>
          My work ethic towards detail and expression is largely influenced by
          my{" "}
          <Link href="/music" style={{ color: "#fa9292" }}>
            musical background
          </Link>
          .
        </p>
      </span>
    </details>

    <details>
      <summary>PA system design</summary>
      <span>
        <picture>
          <source type="image/webp" srcset={systemDesignWebp} />
          <img
            src={systemDesignPng}
            alt="d&b SL system seminar in Sindelfingen"
          />
        </picture>
        <p>
          I've designed small scale L-Acoustics systems for local arts festivals
          such as Kontraklang and Territory Disrupt.
        </p>
        <p>
          This is an area I'm interested in developing, and I've completed
          seminars with d&b (Line Array workshop, SL-Series) and L-Acoustics
          (System Design & Workflow).
        </p>
      </span>
    </details>
    <details>
      <summary>education</summary>
      <span>
        <picture>
          <source type="image/webp" srcset={educationWebp} />
          <img src={educationPng} alt="Soundsysters PA workshop in Berlin" />
        </picture>
        <p>
          With the feminist sound crew, Soundsysters, I've taught PA, Recording,
          and DJ workshops. I've also facilitated skillsharing sessions for our
          crew to exchange practical industry knowledge and get hands-on
          practice with mixing.
        </p>
        <p>So far I've led workshops in the following topics:</p>
        <ul>
          <li>PA setup and signal flow</li>
          <li>Live mixing techniques</li>
          <li>Recording & Music production</li>
          <li>DJing</li>
          <li>Career skills for FLINTA*</li>
        </ul>
      </span>
    </details>
    <br />
  </main>
);
