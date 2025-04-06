"use client";

import { BlurText } from "@/app/ReactBitsComponents";
import { StartProjectButton } from "@/app/components";
import React, { useState } from "react";
import { Decorations } from "@/app/home/components/Benefits/components/SaveTime/components/StarContainer/components";

export const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"w-full h-screen relative"}
    >
      <Decorations isHovered={isHovered} />

      <div className={"flex items-center justify-center w-full h-full"}>
        <div
          className={
            "flex flex-col items-center justify-center gap-24 px-4 w-full h-screen sm:gap-16 lg:gap-11 xl:gap-9"
          }
        >
          <div className={"overflow-hidden w-full"}>
            <BlurText
              text={"Enough watching."}
              className={
                "text-4xl text-white text-center justify-center font-medium !leading-normal sm:text-5xl lg:text-[54px] xl:text-[64px]"
              }
              delay={200}
              animateBy="words"
              direction="top"
            />

            <BlurText
              text={"Let’s make magic."}
              className={
                "text-4xl text-white text-center justify-center font-medium !leading-normal sm:text-5xl lg:text-[54px] xl:text-[64px]"
              }
              delay={200}
              animateBy="words"
              direction="top"
            />
          </div>

          <div className={"w-[167px]"}>
            <StartProjectButton
              height={"h-11"}
              bgColor={"bg-white"}
              textColor={"text-[#151515]"}
              arrowColor={"#151515"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
