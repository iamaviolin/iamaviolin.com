import { Route, Switch } from "wouter-preact";

import { SiteNav } from "./components/SiteNav";

import { AboutRoute } from "./routes/about";
import { ContactRoute } from "./routes/contact";
import { HomeRoute } from "./routes/home";
import { LiveSoundRoute } from "./routes/live-sound";
import { MusicRoute } from "./routes/music";

import "./app.scss";
import "./assets/fonts/avenir/AvenirLTStd-Black.otf";
import "./assets/fonts/avenir/AvenirLTStd-BlackOblique.otf";
import "./assets/fonts/avenir/AvenirLTStd-Book.otf";
import "./assets/fonts/avenir/AvenirLTStd-BookOblique.otf";
import "./assets/fonts/avenir/AvenirLTStd-Heavy.otf";
import "./assets/fonts/avenir/AvenirLTStd-HeavyOblique.otf";
import "./assets/fonts/avenir/AvenirLTStd-Light.otf";
import "./assets/fonts/avenir/AvenirLTStd-LightOblique.otf";
import "./assets/fonts/avenir/AvenirLTStd-Medium.otf";
import "./assets/fonts/avenir/AvenirLTStd-MediumOblique.otf";
import "./assets/fonts/avenir/AvenirLTStd-Oblique.otf";
import "./assets/fonts/avenir/AvenirLTStd-Roman.otf";

export function App() {
  return (
    <>
      <SiteNav />
      <main>
        <Switch>
          <Route path="/" component={HomeRoute} />
          <Route path="/about" component={AboutRoute} />
          <Route path="/contact" component={ContactRoute} />
          <Route path="/live-sound" component={LiveSoundRoute} />
          <Route path="/music" component={MusicRoute} />
        </Switch>
      </main>
      <aside>
        <p>
          Site by <a href="https://sk.synth.kitchen">Rain Rudnick</a>
        </p>
        <p>&copy; Kathleen Chen 2024</p>
      </aside>
    </>
  );
}
