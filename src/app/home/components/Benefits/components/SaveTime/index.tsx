"use client";

import { StarContainer } from "./components";
import { SpotlightCard } from "@/app/ReactBitsComponents";

export const SaveTime = () => {
  return (
    <SpotlightCard
      className={"h-full xl:min-h-[233.5px] xl:max-h-[233.5px]"}
      spotlightColor={"rgba(61,61,61,0.25)"}
    >
      <div
        className={
          "rounded-[10px] relative border border-solid border-[#212121] min-h-[340px] w-full h-full xl:min-h-fit"
        }
      >
        <div className={"relative z-10 px-4 py-5 w-full h-full"}>
          <div
            className={
              "flex flex-col items-start justify-between gap-[30px] w-full h-full xl:flex-row xl:gap-6"
            }
          >
            <div
              className={"flex flex-col items-start gap-2.5 w-full xl:max-w-96"}
            >
              <h3
                className={
                  "text-[28px] font-fancy text-white text-left !leading-[normal] md:text-3xl lg:text-[32px] xl:text-4xl"
                }
              >
                Save time and costs
              </h3>

              <p
                className={
                  "text-base !leading-[normal] text-light_gray font-fancy text-left"
                }
              >
                Cut out the hassle of traditional food photography while staying
                on budget.
              </p>
            </div>

            <StarContainer />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
