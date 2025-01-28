import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./RunningLine.module.css";

interface IRunningLine {
  isMainPage: boolean;
}

export const RunningLine = ({ isMainPage }: IRunningLine) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const speedRef = useRef(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const baseSpeed = 0.01;
    const updateSpeed = 0.2;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      speedRef.current = -scrollDelta * updateSpeed;
    };

    const animate = () => {
      if (!marqueeRef.current) {
        return;
      }

      const marqueeWidth = marqueeRef.current?.scrollWidth / 2;

      setOffset((prevOffset) => {
        let newOffset;

        if (prevOffset > 8000) {
          newOffset = 0;
        } else {
          newOffset = prevOffset - baseSpeed + speedRef.current;

          if (newOffset <= -marqueeWidth) {
            return 0;
          }
        }

        return newOffset;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const startMarquee = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);

      animate();
    }, 0);

    return () => {
      clearTimeout(startMarquee);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className={`flex gap-10 items-center justify-center relative w-full pb-5 border-b border-solid ${
        isMainPage ? "border-[#a0a0a033]" : "border-dark_gray"
      }`}
    >
      <div
        ref={marqueeRef}
        className={`flex items-center gap-10 ${styles.marqueeContent} w-auto no-transition h-[75px] sm:h-[95px] md:gap-12 lg:h-[120px] xl:gap-[60px] xl:h-[150px]`}
        style={{
          transform: `translateX(${offset}px)`,
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Fragment key={index}>
            <p
              className={`text-6xl ${
                isMainPage ? "text-black" : "text-white"
              } !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
            >
              PlateLAB
            </p>
            <Image
              width={42}
              height={42}
              src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
              alt={"Logo"}
              loading={"lazy"}
              className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
            />
          </Fragment>
        ))}

        {Array.from({ length: 10 }).map((_, index) => (
          <Fragment key={index + 100}>
            <p
              className={`text-6xl ${
                isMainPage ? "text-black" : "text-white"
              } !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
            >
              PlateLAB
            </p>
            <Image
              width={42}
              height={42}
              src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
              alt={"Logo"}
              loading={"lazy"}
              className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
