"use client";

import { Billet, GalleryContainer } from "./components";
import { Button } from "@/app/components";

export const Gallery = () => {
  const handleClick = () => {};

  return (
    <div className={"relative h-screen w-screen"}>
      <Billet />

      <GalleryContainer />

      <div className={"relative z-30 pointer-events-none h-screen w-screen"}>
        <div className={"flex items-center justify-center h-screen w-screen"}>
          <div
            className={
              "flex flex-col items-center gap-10 py-20 sticky top-0 bottom-0 px-10 w-full"
            }
          >
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
