import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis(isScrollBlocked: boolean) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) return;

    lenis.current = new Lenis({
      duration: 4,
      //@ts-ignore
      smooth: true,
      ease: (t: number) => 1 - Math.pow(1 - t, 5),
      lerp: 0.05,
      gestureOrientation: "vertical",
      smoothTouch: true,
      syncTouch: true,
      wheelMultiplier: 0.5,
      touchMultiplier: 0.5,
    });

    function raf(time: number) {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (isScrollBlocked) {
      lenis.current?.stop();
    } else {
      lenis.current?.start();
    }

    return () => {
      lenis.current?.destroy();
    };
  }, [isScrollBlocked]);

  return lenis.current;
}
