"use client";

import { DelayedLink } from "@/app/components";
import { useState } from "react";
import { DecryptedText, SplitText } from "@/app/ReactBitsComponents";
import { RunLine } from "@/app/home/components/PartnersList/components";

export const PartnersList = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <DelayedLink
      href={"/cases"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-0 bottom-0 no-transition ${isHovered ? "z-30 opacity-100" : "z-0 opacity-0"} h-[88px] w-full`}
      >
        <div
          className={
            "flex items-center justify-center no-transition w-full h-full"
          }
        >
          <div className={"flex items-center flex-nowrap no-transition"}>
            <DecryptedText
              text={"More cases"}
              speed={100}
              revealDirection="end"
              className={
                "text-center text-xl text-white no-transition whitespace-nowrap"
              }
              triggerAnimation={isHovered}
            />

            <SplitText
              text={""}
              delay={25}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing={"easeOutCubic"}
              threshold={0.1}
              rootMargin={"-700px"}
              iconSrc={"/images/right_arrow.svg"}
              iconAlt={"Go on cases"}
              isHovered={isHovered}
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 z-20 py-[30px] w-full ${isHovered ? "blur-sm" : ""}`}
      >
        <div className={"overflow-hidden relative w-full"}>
          <RunLine />
        </div>
      </div>
    </DelayedLink>
  );
};
