"use client";

import styles from "./StandOutOnline.module.css";

import Image from "next/image";
import { SpotlightCard } from "@/app/ReactBitsComponents";
import { useEffect, useRef, useState } from "react";

export const StandOutOnline = () => {
  const [isAnimateVisible, setIsAnimateVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      setIsAnimateVisible(rect.top < window.innerHeight && rect.bottom > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SpotlightCard className={"h-full xl:min-h-[233.5px] xl:max-h-[233.5px]"}>
      <div
        ref={containerRef}
        className={`relative rounded-[10px] border border-solid ${styles.BgContainer} border-[#212121] overflow-hidden min-h-[340px] w-full h-full xl:min-h-fit`}
      >
        <div
          className={
            "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#272727] to-transparent xl:bg-gradient-to-tr xl:from-dark_gray"
          }
        ></div>

        <div
          className={`${styles.Phone} !duration-1000 ${isAnimateVisible ? styles.animate : styles.default}`}
        >
          <Image
            width={527}
            height={527}
            src={"/images/phone.svg"}
            alt={"Phone"}
            loading={"lazy"}
            className={"!duration-1000"}
          />
        </div>

        <div className={"relative z-10 px-4 py-5 w-full"}>
          <div className={"flex flex-col items-start gap-[30px] w-full"}>
            <div
              className={
                "flex flex-col items-start gap-2.5 w-full xl:max-w-[400px]"
              }
            >
              <h3
                className={
                  "text-[28px] text-white text-left !leading-[normal] md:text-3xl lg:text-[32px] xl:text-4xl"
                }
              >
                Stand out online
              </h3>

              <p
                className={
                  "text-base !leading-[normal] text-light_gray font-fancy text-left"
                }
              >
                Capture attention with photos that highlight your dishes and
                make them unforgettable
              </p>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
