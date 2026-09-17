"use client";

import { useEffect, useState } from "react";

/** Generic media-query hook, e.g. `useMediaQuery("(min-width: 1180px)")`. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Convenience wrapper matching the breakpoint the header switches on. */
export function useIsDesktopNav(): boolean {
  return useMediaQuery("(min-width: 1180px)");
}
