"use client";

import React, { useEffect, useRef, useState } from "react";

import { Parallax } from "react-scroll-parallax";

import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";
import { TextBlock } from "./components";
import { IParallax, IParallaxGallery, useFetchParallaxQuery } from "@/app/home";
import { parallaxConfigs } from "./utils";
import Image from "next/image";

export const ParallaxBeforeFooter = React.memo(() => {
  const { data } = useFetchParallaxQuery();

  const parallaxData: IParallax[] = data || [];

  const {
    up_title = "",
    down_title = "",
    image = "",
    gallery = [] as IParallaxGallery[],
  } = parallaxData[0] || {};

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [bgProgress, setBgProgress] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [scaleProgress, setScaleProgress] = useState(0);
  const [bottomProgress, setBottomProgress] = useState(0);

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
    let timeout: any;
    let isScrollBlocked = false;

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

        const newScaleProgress = Math.min(
          Math.max((viewportHeight / 2 - rect.top) / (viewportHeight * 2), 0),
          1,
        );

        setScaleProgress(newScaleProgress);
        setBgProgress(progress);

        if (newScaleProgress >= 1) {
          const scrollDirection =
            window.scrollY > Number(containerRef.current?.dataset.lastScroll)
              ? 1
              : -1;

          setBottomProgress((prev) =>
            Math.min(Math.max(prev + 0.05 * scrollDirection * 0.5, 0), 1),
          );

          containerRef.current.dataset.lastScroll = window.scrollY.toString();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
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
    <div
      className={`relative h-[350vh] no-transition w-full`}
      style={{
        bottom: `${bottomProgress * 100}vh`,
      }}
    >
      <div ref={containerRef} className={"relative w-full h-full"}>
        <TextBlock upTitle={up_title} downTitle={down_title} />

        <div
          className={`no-transition sticky flex justify-center items-center z-[100] left-0 right-0 w-full`}
          style={{
            top: `${50 - 50 * scaleProgress}%`,
            height: `${100 * scaleProgress}vh`,
            paddingTop: `${50 - 50 * scaleProgress}%`,
          }}
        >
          {image.length > 0 ? (
            <CustomImage
              width={470}
              height={340}
              src={image}
              alt={`${up_title} ${down_title}`}
              loader={imageLoader}
              loading={"lazy"}
              className={"no-transition rounded-md"}
              style={{
                width: `${100 * scaleProgress}vw`,
                height: `${100 * scaleProgress}vh`,
                borderRadius: `${1 / scaleProgress}px}`,
              }}
            />
          ) : (
            <div
              className={
                "flex items-center justify-center bg-[#303030] rounded-md"
              }
              style={{ width: 470, height: 340 }}
            >
              <Image
                width={18}
                height={18}
                src={"/images/image.svg"}
                alt={"Image"}
                loading={"lazy"}
              />
            </div>
          )}
        </div>

        {!!gallery.length &&
          gallery.map(({ id, image, caption }, index) => {
            const config = parallaxConfigs[index % parallaxConfigs.length];

            return (
              <Parallax
                key={id}
                speed={config.speed}
                className={config.className}
              >
                <CustomImage
                  width={config.width}
                  height={config.height}
                  src={image}
                  alt={caption}
                  loader={imageLoader}
                  className={config.imageClass}
                />
              </Parallax>
            );
          })}
      </div>
    </div>
  );
});
