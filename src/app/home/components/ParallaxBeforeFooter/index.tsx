"use client";

import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Parallax as ScrollParallax,
  ParallaxProvider,
} from "react-scroll-parallax";
import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";
import { TextBlock } from "./components";
import { IParallax, IParallaxGallery, useFetchParallaxQuery } from "@/app/home";
import Image from "next/image";
import { parallaxConfigs } from "@/app/home/components/ParallaxBeforeFooter/utils";

export const ParallaxBeforeFooter = React.memo(() => {
  const containerRef = useRef<Parallax>(null!);
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const [bgProgress, setBgProgress] = useState(0);
  const [scaleProgress, setScaleProgress] = useState(0);
  const [bottomProgress, setBottomProgress] = useState(0);

  const { data } = useFetchParallaxQuery();
  const parallaxData: IParallax[] = data || [];

  const {
    up_title = "",
    down_title = "",
    image = "",
    gallery = [] as IParallaxGallery[],
  } = parallaxData[0] || {};

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
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.container.current?.getBoundingClientRect();
      if (!rect) return;

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

        if (newScaleProgress >= 0.74) {
          const lastScroll = parseFloat(
            containerRef.current.container.current?.dataset.lastScroll || "0",
          );
          const scrollDirection = window.scrollY > lastScroll ? 1 : -1;

          setBottomProgress(scrollDirection >= 0 ? 1 : 0);

          if (containerRef.current.container.current) {
            containerRef.current.container.current.dataset.lastScroll =
              window.scrollY.toString();
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const updateBackground = () => {
      document.body.style.backgroundColor = interpolateColor(bgProgress);
      wrapperRef.current.style.backgroundColor = interpolateColor(bgProgress);
      animationFrame = requestAnimationFrame(updateBackground);
    };

    animationFrame = requestAnimationFrame(updateBackground);
    return () => cancelAnimationFrame(animationFrame);
  }, [bgProgress]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-[200vh] z-50 !duration-700 overflow-hidden w-full"
      style={{ bottom: `${bottomProgress * 100}vh` }}
    >
      <Parallax
        pages={2}
        ref={containerRef}
        config={{ mass: 1, tension: 210, friction: 40 }}
        className="flex justify-center items-center relative z-10 w-full h-full parallax-container"
      >
        <ParallaxLayer
          sticky={{ start: 0, end: 3 }}
          className="flex items-center justify-center w-full h-full"
        >
          <div className={"absolute top-1/2 left-0 w-full h-dvh"}>
            <div className={"absolute z-[200] top-0 left-0 w-full h-full"}>
              <TextBlock upTitle={up_title} downTitle={down_title} />
            </div>

            {image?.length > 0 ? (
              <CustomImage
                width={470}
                height={340}
                src={image}
                alt={`${up_title} ${down_title}`}
                loader={imageLoader}
                loading="lazy"
                className="no-transition rounded-md object-cover"
                containerClassName={
                  "flex justify-center items-center no-transition rounded-md object-cover w-full h-full"
                }
                style={{
                  width: `${135 * scaleProgress}vw`,
                  height: `${135 * scaleProgress}vh`,
                  borderRadius: `${1 / scaleProgress}px`,
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                }}
              />
            ) : (
              <div
                className="flex items-center justify-center bg-[#303030] rounded-md"
                style={{ width: 470, height: 340 }}
              >
                <Image
                  width={18}
                  height={18}
                  src="/images/image.svg"
                  alt="Fallback image"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </ParallaxLayer>
      </Parallax>

      <ParallaxProvider>
        {gallery?.map(({ id, image, caption }, index) => {
          const config = parallaxConfigs[index % parallaxConfigs.length];
          if (!config) return null;

          return (
            <ScrollParallax
              key={id}
              speed={config.speed}
              offset={config.offset}
              className={config.className}
            >
              {image?.length > 0 ? (
                <CustomImage
                  width={config.width}
                  height={config.height}
                  src={image}
                  alt={caption}
                  loader={imageLoader}
                  className={config.imageClass}
                  loading="lazy"
                />
              ) : (
                <div
                  className="flex items-center justify-center bg-[#303030] rounded-md"
                  style={{ width: config.width, height: config.height }}
                >
                  <Image
                    width={18}
                    height={18}
                    src="/images/image.svg"
                    alt="Fallback image"
                    loading="lazy"
                  />
                </div>
              )}
            </ScrollParallax>
          );
        })}
      </ParallaxProvider>
    </div>
  );
});
