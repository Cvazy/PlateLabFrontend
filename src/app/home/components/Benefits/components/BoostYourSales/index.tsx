"use client";

import { Chart } from "./components";
import { SpotlightCard } from "@/app/ReactBitsComponents";

export const BoostYourSales = () => {
  return (
    <SpotlightCard
      className={"h-full xl:max-h-[483px]"}
      spotlightColor={"rgba(61,61,61,0.25)"}
    >
      <div
        className={
          "overflow-hidden rounded-[10px] border border-solid border-[#212121] bg-gradient-to-b from-[#050505bd] to-[#343232] w-full h-full"
        }
      >
        <div className={"px-4 py-5 w-full h-full"}>
          <div className={"flex flex-col items-start gap-[30px] w-full h-full"}>
            <div className={"flex flex-col items-start gap-2.5 w-full"}>
              <h3
                className={
                  "text-[28px] text-white text-left !leading-[normal] md:text-3xl lg:text-[32px] xl:text-4xl"
                }
              >
                Boost your sales
              </h3>

              <p
                className={
                  "text-base !leading-[normal] text-light_gray font-fancy text-left"
                }
              >
                Stunning visuals that drive customer engagement and increase
                order values
              </p>
            </div>

            <div
              className={
                "rounded bg-[#05050599] shadow-[0_16px_20px_0_#050505e0] w-full h-full"
              }
            >
              <div className={"p-5 w-full h-full"}>
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
