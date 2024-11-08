import { Route, Switch } from "wouter-preact";

import { AboutRoute } from "./routes/about";
import { ContactRoute } from "./routes/contact";
import { HomeRoute } from "./routes/home";
import { LiveSoundRoute } from "./routes/live-sound";
import { MusicRoute } from "./routes/music";

import "./app.css";
import { SiteNav } from "./components/SiteNav";

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
    </>
  );
}
