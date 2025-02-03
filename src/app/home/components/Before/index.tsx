"use client";

import { GridElement, Phone } from "@/app/home/components/Before/components";
import { useEffect, useRef, useState } from "react";
import { DecryptedText } from "@/app/ReactBitsComponents";
import { IParameters, useFetchBeforeParametersQuery } from "@/app/home";
import useLenis from "@/app/hooks/useLenis";

export const Before = () => {
  const { data } = useFetchBeforeParametersQuery();
  const parameters: IParameters[] = data || [];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isBlocked = useRef(false);
  const [isScrollBlocked, setIsScrollBlocked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [valuesSwitched, setValuesSwitched] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isFirstlyAnimation, setIsFirstlyAnimation] = useState(true);

  const [scrollingTimeout, setScrollingTimeout] =
    useState<NodeJS.Timeout | null>(null);

  useLenis(isScrollBlocked);

  useEffect(() => {
    const animateScroll = (event: Event) => {
      if (!isBlocked.current || !isIntersecting) return;

      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }

      setIsScrollBlocked(true);

      const newTimeout = setTimeout(() => {
        setIsScrollBlocked(false);
        if (event instanceof WheelEvent && event.deltaY > 0 && !isScrolled) {
          setIsScrolled(true);
          setValuesSwitched(true);
          setIsFirstlyAnimation(false);
        }
      }, 1000);

      setScrollingTimeout(newTimeout);

      event.preventDefault();
    };

    document.addEventListener("wheel", animateScroll, { passive: false });
    document.addEventListener("touchmove", animateScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", animateScroll);
      document.removeEventListener("touchmove", animateScroll);
      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }
    };
  }, [isScrolled, isIntersecting, scrollingTimeout]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && !isBlocked.current) {
          isBlocked.current = true;

          setIsScrollBlocked(true);

          setTimeout(() => {
            isBlocked.current = false;
            setIsScrollBlocked(false);
            observer.disconnect();
          }, 3000);
        }
      },
      { threshold: 0.99 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      setIsScrollBlocked(false);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex justify-center overflow-hidden w-full min-h-screen h-fit mb-4"
    >
      <div className="flex justify-center px-5 py-20 w-full h-full sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-limitation w-full h-full">
          <div className="flex flex-col items-center gap-5 w-full h-full md:gap-10 lg:flex-row lg:justify-between lg:gap-8 xl:gap-[60px]">
            <div className="w-full h-auto lg:h-full lg:max-w-[370px] xl:max-w-[450px]">
              <div className="flex flex-col items-start justify-between gap-2 w-full h-auto lg:h-full">
                <div className="flex flex-col items-start gap-5 w-full md:gap-10 xl:gap-[60px]">
                  <div className="flex flex-col items-start gap-2 w-full">
                    {isBlocked.current && !isFirstlyAnimation ? (
                      <h2 className="text-[32px] !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px] whitespace-nowrap w-full">
                        <DecryptedText
                          text={"After"}
                          animateOn="view"
                          speed={100}
                          revealDirection="end"
                          className="text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px]"
                          parentClassName="text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px]"
                        />
                        <span className="text-gray">.</span>
                      </h2>
                    ) : (
                      <h2 className="text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px]">
                        {isFirstlyAnimation ? "Before" : "After"}
                        <span className="text-gray">.</span>
                      </h2>
                    )}

                    <p className="text-left text-light_gray text-[15px] !leading-5 font-fancy">
                      Get inspired by these beautiful, modern websites launched
                      with PlateLab.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-10 w-full xl:gap-[60px]">
                    {!!parameters.length &&
                      parameters.map(({ id, name, start_value, end_value }) => (
                        <GridElement
                          key={id}
                          name={name}
                          start_value={start_value}
                          end_value={end_value}
                          valuesSwitched={valuesSwitched}
                          isFirstlyAnimation={isFirstlyAnimation}
                        />
                      ))}
                  </div>
                </div>

                <p className="hidden font-fancy text-light_gray !duration-700 text-sm text-left opacity-100 lg:block">
                  Scroll down
                </p>
              </div>
            </div>

            <div className="flex justify-center w-full h-full">
              <div className="flex justify-center w-full relative">
                <Phone valuesSwitched={valuesSwitched} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
