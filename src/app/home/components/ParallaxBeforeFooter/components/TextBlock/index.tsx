import { SplitText } from "@/app/ReactBitsComponents";
import { DelayedLink } from "@/app/components";
import Image from "next/image";
import styles from "./TextBlock.module.css";
import { useState } from "react";

export const TextBlock = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={"absolute z-[200] top-0 left-0 w-full h-full"}>
      <div className={"flex items-center justify-center w-full h-full"}>
        <div
          className={
            "flex flex-col items-center justify-center gap-24 px-4 py-[25%] sticky top-0 bottom-0 w-full h-screen sm:gap-16 lg:gap-11 xl:gap-9"
          }
        >
          <div className={"w-full"}>
            <SplitText
              text="Future-ready technology"
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
              text="for visuals that matter today"
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

          <DelayedLink
            href={"/cases"}
            className={"flex items-center gap-4 flex-nowrap"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p
              className={
                "text-white font-fancy text-sm !leading-none md:text-base"
              }
            >
              See our work
            </p>

            <div
              className={
                "flex items-center justify-center w-8 h-8 relative overflow-hidden rounded-full bg-white"
              }
            >
              <Image
                width={24}
                height={24}
                src={"/images/right_arrow_black.svg"}
                alt={"Arrow"}
                loading={"lazy"}
                className={`${isHovered ? styles.HoverButton : ""}`}
              />
            </div>
          </DelayedLink>
        </div>
      </div>
    </div>
  );
};
