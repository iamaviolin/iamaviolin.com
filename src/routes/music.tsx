import "./music.scss";

import recordingPng from "../assets/recording.png";
import recordingWebp from "../assets/recording.webp";
import violinPng from "../assets/violin.png";
import violinWebp from "../assets/violin.webp";

export const MusicRoute = () => (
  <main className="music page">
    <h1 style={{ color: "#fa9292" }}>music</h1>

    <p>
      I've lived in quite a few places, but music has been a constant in my life
      since 1994!
    </p>

    <details>
      <summary>violin</summary>
      <span>
        <picture>
          <source type="image/webp" srcset={violinWebp} />
          <img
            src={violinPng}
            alt="Kathleen Chen working front of house, looking quite cheerful!"
          />
        </picture>

        <p>
          I{" "}
          <a href="https://www.youtube.com/watch?v=fuLO_BYSfNs" target="_blank">
            soloed
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=Of3Lt83F-o4" target="_blank">
            led orchestras
          </a>
          , and played in{" "}
          <a
            href="https://www.youtube.com/watch?v=KFL8RUuTa8Y&t=408s"
            target="_blank"
          >
            chamber music ensembles
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=xk9x55d8M6I" target="_blank">
            video game covers with friends
          </a>
          , as well as a{" "}
          <a
            href="https://commissure.bandcamp.com/album/outfield"
            target="_blank"
          >
            post-rock band
          </a>
          .
        </p>
        <p>
          Some highlights include leading orchestras in concert with Jacob
          Collier, Wang Lee-Hom, and the Valencia Film Orchestra. Past accolades
          include: Redlands Bowl Young Artist at the 89th Annual Redlands Bowl
          Summer Music Festival, and soloist with the Peninsula Symphony and
          Culver City Symphony Orchestra. I studied classical violin at San
          Francisco Conservatory of Music before transferring to jazz
          performance at Berklee College of Music.
        </p>
      </span>
    </details>

    <details>
      <summary>game audio</summary>
      <span>
        <iframe
          title="Trailer for the iOS game Farmstead"
          src="https://drive.google.com/file/d/1a-Re8d2pRKtTPFL1W0ZgA2WiT-zGEvX1/preview"
          width="640"
          height="480"
          frameBorder="0"
        ></iframe>
        <p>
          I used to work for a indie game startup in Berlin, developing AR
          mobile game concepts and audio. Nowadays game development is a hobby,
          and I occasionally participate in local game jams such as Berlin's
          yearly GGJ.
        </p>
      </span>
    </details>
    <details>
      <summary>recording / production</summary>
      <span>
        <picture>
          <source type="image/webp" srcset={recordingWebp} />
          <img
            src={recordingPng}
            alt="Kathleen Chen working front of house, looking quite cheerful!"
          />
        </picture>
        <p>
          Before working in live sound, I interned at Vox Ton Studios and
          studied recording/music production at Berklee Valencia.
        </p>
      </span>
    </details>
    <br />
  </main>
);
