import { SplitText } from "@/app/ReactBitsComponents";
import {
  DelayedLink,
  SceondaryButton,
  StartProjectButton,
} from "@/app/components";
import Image from "next/image";
import styles from "./TextBlock.module.css";
import React, { useState } from "react";

export const TextBlock = React.memo(
  ({ upTitle, downTitle }: { upTitle: string; downTitle: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className={"flex items-center justify-center w-full h-full"}>
        <div
          className={
            "flex flex-col items-center justify-center gap-24 px-4 py-[25%] sticky top-0 bottom-0 w-full h-screen sm:gap-16 lg:gap-11 xl:gap-9"
          }
        >
          <div className={"w-full"}>
            <SplitText
              text={upTitle}
              className={
                "text-4xl text-white text-center justify-center !leading-normal sm:text-5xl lg:text-[54px] xl:text-[64px]"
              }
              delay={25}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{
                opacity: 1,
                transform: "translate3d(0,0,0)",
              }}
              easing="easeOutCubic"
              threshold={0.1}
              rootMargin="-50px"
              playOnce={true}
            />

            <SplitText
              text={downTitle}
              className={
                "text-4xl text-white text-center justify-center !leading-normal sm:text-5xl lg:text-[54px] xl:text-[64px]"
              }
              delay={25}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{
                opacity: 1,
                transform: "translate3d(0,0,0)",
              }}
              easing="easeOutCubic"
              threshold={0.1}
              rootMargin="-50px"
              playOnce={true}
            />
          </div>

          <div
            className={
              "flex flex-col items-center gap-6 max-w-[183px] w-full md:gap-5 lg:max-w-[337px] lg:flex-row xl:gap-4"
            }
          >
            <div className={"w-[167px]"}>
              <StartProjectButton
                height={"h-11"}
                bgColor={"bg-white"}
                textColor={"text-[#151515]"}
                arrowColor={"#151515"}
              />
            </div>

            <SceondaryButton height={"h-11"} />
          </div>
        </div>
      </div>
    );
  },
);
