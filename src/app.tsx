import { Route, Switch } from "wouter-preact";

import { SiteNav } from "./components/SiteNav";

import { AboutRoute } from "./routes/about";
import { ContactRoute } from "./routes/contact";
import { HomeRoute } from "./routes/home";
import { LiveSoundRoute } from "./routes/live-sound";
import { MusicRoute } from "./routes/music";

import "./app.scss";
import "./assets/fonts/avenir/AvenirLTStd-Roman.otf";

export function App() {
  return (
    <>
      <SiteNav />
      <Switch>
        <Route path="/" component={HomeRoute} />
        <Route path="/about" component={AboutRoute} />
        <Route path="/contact" component={ContactRoute} />
        <Route path="/live-sound" component={LiveSoundRoute} />
        <Route path="/music" component={MusicRoute} />
      </Switch>
      <footer>
        <p className="credits-mobile">
          🧑🏻‍💻{" "}
          <a href="https://sk.synth.kitchen" target="_blank">
            Rain Rudnick
          </a>{" "}
          🤍{" "}
          <a
            href="https://danhemerlein.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dan Hemerlein
          </a>
        </p>
        <p className="credits-desktop">
          Website adapted by{" "}
          <a href="https://sk.synth.kitchen" target="_blank">
            Rain Rudnick
          </a>{" "}
          from{" "}
          <a
            href="https://danhemerlein.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dan Hemerlein
          </a>
        </p>
        <p>&copy; Kathleen Chen 2024</p>
      </footer>
    </>
  );
}
