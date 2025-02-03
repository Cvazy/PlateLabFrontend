import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis(isScrollBlocked: boolean) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 2,
      //@ts-ignore
      smooth: true,
      ease: (t: number) => 1 - Math.pow(1 - t, 3),
      lerp: 0.1,
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
