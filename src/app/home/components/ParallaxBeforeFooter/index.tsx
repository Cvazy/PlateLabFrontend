"use client";

import { useEffect, useRef, useState } from "react";

import { Parallax } from "react-scroll-parallax";

import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";
import { TextBlock } from "./components";

export const ParallaxBeforeFooter = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [bgProgress, setBgProgress] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const lerp = (start: number, end: number, t: number) =>
    start * (1 - t) + end * t;

  const interpolateColor = (t: number) => {
    const startColor = [5, 5, 5];
    const endColor = [40, 40, 40];

    const r = Math.round(lerp(startColor[0], endColor[0], t));
    const g = Math.round(lerp(startColor[1], endColor[1], t));
    const b = Math.round(lerp(startColor[2], endColor[2], t));

    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) {
        return;
      }

      const container = containerRef.current;
      const rect = container?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const offset = 200;

      if (rect.top <= viewportHeight - offset && rect.bottom > 0) {
        const progress = Math.min(
          Math.max((viewportHeight - rect.top - offset) / viewportHeight, 0),
          1,
        );

        setBgProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIntersecting]);

  useEffect(() => {
    let animationFrame: number;

    const updateBackground = () => {
      document.body.style.backgroundColor = interpolateColor(bgProgress);
      animationFrame = requestAnimationFrame(updateBackground);
    };

    animationFrame = requestAnimationFrame(updateBackground);
    return () => cancelAnimationFrame(animationFrame);
  }, [bgProgress]);

  return (
    <div className="h-[250vh] w-full">
      <div ref={containerRef} className={"relative w-full h-full"}>
        <TextBlock />

        {/*Картинка для увеличения*/}
        <Parallax
          speed={20}
          className={
            "no-transition absolute flex justify-center items-center left-0 right-0 top-[120vh] w-full"
          }
        >
          <CustomImage
            width={240}
            height={240}
            src={"/media/images/3.png"}
            alt={"Image 1"}
            loader={imageLoader}
            className={
              "no-transition rounded-md w-36 h-36 sm:w-52 sm:h-52 lg:w-72 lg:h-72"
            }
          />
        </Parallax>

        <Parallax
          speed={75}
          className={
            "no-transition absolute right-0 top-[130vh] w-28 h-28 sm:w-44 sm:h-44 lg:w-60 lg:h-60"
          }
        >
          <CustomImage
            width={240}
            height={240}
            src={"/media/images/4.png"}
            alt={"Image 1"}
            loader={imageLoader}
            className={
              "no-transition rounded-md w-28 h-28 sm:w-44 sm:h-44 lg:w-60 lg:h-60"
            }
          />
        </Parallax>

        <Parallax
          speed={150}
          className={
            "no-transition absolute left-5 top-[135vh] w-44 h-44 sm:w-60 sm:h-60 md:left-7 lg:left-10 lg:w-80 lg:h-80"
          }
        >
          <CustomImage
            width={320}
            height={320}
            src={"/media/images/2.png"}
            alt={"Image 2"}
            loader={imageLoader}
            className={
              "no-transition rounded-lg w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
            }
          />
        </Parallax>

        <Parallax
          speed={75}
          className={
            "no-transition absolute left-0 top-[165vh] w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
          }
        >
          <CustomImage
            width={320}
            height={320}
            src={"/media/images/5.png"}
            alt={"Image 3"}
            loader={imageLoader}
            className={
              "no-transition rounded-lg w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
            }
          />
        </Parallax>

        <Parallax
          speed={150}
          className={
            "no-transition absolute right-10 top-[170vh] w-28 h-28 sm:w-44 sm:h-44 md:right-14 lg:right-20 lg:w-60 lg:h-60"
          }
        >
          <CustomImage
            width={240}
            height={240}
            src={"/media/images/1.png"}
            alt={"Image 4"}
            loader={imageLoader}
            className={
              "no-transition rounded-md w-28 h-28 sm:w-44 sm:h-44 lg:w-60 lg:h-60"
            }
          />
        </Parallax>
      </div>
    </div>
  );
};
