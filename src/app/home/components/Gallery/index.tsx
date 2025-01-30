"use client";

import { Billet, GalleryContainer } from "./components";
import { Button } from "@/app/components";
import { SplitText } from "@/app/ReactBitsComponents";

export const Gallery = () => {
  const handleClick = () => {};

  return (
    <div className={"relative h-[150vh] w-screen"}>
      <Billet />

      <GalleryContainer />

      <div className={"relative z-30 pointer-events-none h-[150vh] w-screen"}>
        <div className={"flex items-center justify-center h-[150vh] w-screen"}>
          <div
            className={
              "flex flex-col items-center gap-10 py-20 sticky top-0 bottom-0 px-10 w-full"
            }
          >
            <SplitText
              text="Created by PlateLab"
              className={
                "text-4xl text-white text-center !leading-none sm:text-[40px] md:text-5xl lg:text-6xl xl:text-[64px]"
              }
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.5}
              rootMargin="-50px"
            />

            <div className={"block max-w-36 w-full md:hidden"}>
              <Button
                text={"More cases"}
                textColor={"black"}
                fontSize={"text-[15px]"}
                bgColor={"bg-white"}
                paddings={"px-4 py-3.5"}
                borderRadius={"rounded"}
                onClick={handleClick}
                starReverse={true}
                starColor={"black"}
                height={"h-11"}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
