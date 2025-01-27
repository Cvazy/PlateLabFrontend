"use client";

import { Billet, GalleryContainer } from "./components";
import { Button } from "@/app/components";

export const Gallery = () => {
  const handleClick = () => {};

  return (
    <div className={"relative h-screen w-screen"}>
      <div
        className={
          "absolute top-0 left-0 -bottom-5 right-0 z-30 bg-gradient-to-b from-[#05050569] via-[#050505a6] to-[#050505]"
        }
      ></div>

      <Billet />

      <GalleryContainer />

      <div className={"relative z-30 h-screen w-screen"}>
        <div className={"flex items-center justify-center h-screen w-screen"}>
          <div className={"flex flex-col items-center gap-10 px-10 w-full"}>
            <h2
              className={
                "text-4xl text-white text-center !leading-none sm:text-[40px] md:text-5xl lg:text-6xl xl:text-[64px]"
              }
            >
              Created by PlateLab
            </h2>

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
