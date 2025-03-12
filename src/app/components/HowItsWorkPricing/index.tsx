import { useEffect, useRef, useState } from "react";
import { IHowItsWork, useFetchAllHowItsWorkElementsQuery } from "@/app/contact";
import { CallToAction, HowItsWorkElement } from "./components";

export const HowItsWorkPricing = () => {
  const { data, isError } = useFetchAllHowItsWorkElementsQuery();

  const howItsWorkElements: IHowItsWork[] = data || [];

  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<HTMLDivElement[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const setBlockRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      blockRefs.current[index] = el;
    }
  };

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    let animationFrameId: number;
    let lastProgress = 0;

    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startFill = windowHeight * 2.75;
      const endFill = windowHeight / 2;

      const offsetStart = 0.025;

      let rawProgress = (startFill - rect.bottom) / (startFill - endFill);
      rawProgress = Math.min(1, Math.max(0, rawProgress));
      rawProgress = rawProgress * (1 - offsetStart) + offsetStart;

      lastProgress = lerp(lastProgress, rawProgress, 0.1);
      setScrollProgress(lastProgress);

      const lineHeight = lineRef.current.offsetHeight;
      const lineFilledHeight = lineHeight * lastProgress;
      const containerTop = rect.top + window.scrollY;
      const lineBottomPosition = containerTop + lineFilledHeight;

      blockRefs.current.forEach((block) => {
        const blockRect = block.getBoundingClientRect();
        const blockTop = blockRect.top + window.scrollY;

        const shouldBeActive = lineBottomPosition >= blockTop;
        block.style.opacity = shouldBeActive ? "100%" : "20%";
      });

      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Начальный вызов

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={"flex justify-center w-full"}>
      <div className={"flex flex-col gap-[60px] w-full"}>
        <div className={"flex gap-[26px] relative w-full lg:gap-0"}>
          <div
            ref={lineRef}
            className={
              "no-transition w-[2px] h-full lg:absolute lg:left-1/2 lg:right-1/2 lg:top-0 lg:bottom-0"
            }
          >
            <div className={"no-transition relative bg-gray w-[2px] h-full"}>
              <div
                className={
                  "no-transition absolute top-0 left-0 w-[2px] h-full bg-red"
                }
                style={{
                  transform: `scaleY(${scrollProgress})`,
                  transformOrigin: "top",
                }}
              ></div>
            </div>
          </div>

          <div
            className={
              "flex flex-col gap-[200px] w-full h-full lg:gap-[280px] xl:gap-[335px]"
            }
          >
            {howItsWorkElements.length > 0 &&
              howItsWorkElements?.map(({ id, title, description }, index) => (
                <div
                  key={id}
                  className={`flex justify-start ${index % 2 === 0 ? "" : "self-end"} w-full lg:w-[46%]`}
                >
                  <div
                    ref={(el) => setBlockRef(el, index)}
                    className={"w-full lg:max-w-[420px]"}
                    style={{ opacity: "100%" }}
                  >
                    <HowItsWorkElement
                      index={index}
                      title={title}
                      description={description}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <CallToAction />
      </div>
    </div>
  );
};
