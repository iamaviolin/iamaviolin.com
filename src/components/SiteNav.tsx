import { FunctionComponent } from "preact";
import { Link, useRoute } from "wouter-preact";

export const SiteNav: FunctionComponent = () => {
  const isHome = useRoute("/")[0];

  return isHome ? null : (
    <nav>
      <Link href="/">home</Link>
    </nav>
  );
};
