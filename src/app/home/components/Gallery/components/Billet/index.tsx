"use client";

import { Button } from "@/app/components";
import { BilletLogo } from "./components";

export const Billet = () => {
  const handleClick = () => {};

  return (
    <div
      className={
        "absolute bg-gradient-to-b from-[#050505d4] via-[#050505] to-[#050505] -bottom-5 left-0 right-0 z-40 w-full"
      }
    >
      <div
        className={
          "flex justify-center items-center shadow-[0_-66px_60px_36px_#050505d4] w-full"
        }
      >
        <div className={"flex items-end pb-10 h-32 w-full"}>
          <div
            className={
              "flex justify-center px-5 w-full sm:px-6 md:px-8 lg:px-10"
            }
          >
            <div className={"max-w-limitation w-full"}>
              <div
                className={
                  "flex flex-col items-start gap-5 w-full md:items-center md:justify-between md:flex-row"
                }
              >
                <div className={"flex items-center gap-4"}>
                  <BilletLogo />

                  <p
                    className={
                      "font-fancy text-[15px] !leading-none text-light_gray text-left max-w-[274px] w-full"
                    }
                  >
                    Discover stunning AI-generated food photos by PlateLab
                  </p>
                </div>

                <div className={"hidden w-full md:block md:max-w-32"}>
                  <Button
                    text={"More cases"}
                    textColor={"black"}
                    fontSize={"text-sm"}
                    bgColor={"bg-white"}
                    paddings={"px-3 py-3 lg:py-2"}
                    borderRadius={"rounded"}
                    onClick={handleClick}
                    starReverse={true}
                    starColor={"black"}
                    height={"h-10 lg:h-8"}
                    disabled={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
