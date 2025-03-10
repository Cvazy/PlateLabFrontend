"use client";

import { Button, SceondaryButton } from "@/app/components";
import { BilletLogo } from "./components";

export const Billet = () => {
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

                <div className={"hidden md:block"}>
                  <SceondaryButton height={"h-9"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
