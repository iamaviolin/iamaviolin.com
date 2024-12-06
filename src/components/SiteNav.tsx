import { FunctionComponent } from "preact";
import { Link, useRoute } from "wouter-preact";

import grid from "../assets/grid.svg";

export const SiteNav: FunctionComponent = () => {
  const isHome = useRoute("/")[0];

  return isHome ? null : (
    <nav>
      <Link href="/">
        <img role="presentation" src={grid} />
        home
      </Link>
    </nav>
  );
};
