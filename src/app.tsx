import { Route, Switch } from "wouter-preact";

import { SiteNav } from "./components/SiteNav";

import { AboutRoute } from "./routes/about";
import { ContactRoute } from "./routes/contact";
import { HomeRoute } from "./routes/home";
import { LiveSoundRoute } from "./routes/live-sound";
import { MusicRoute } from "./routes/music";

import "./app.scss";

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
