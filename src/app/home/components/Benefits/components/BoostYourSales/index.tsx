"use client";

import { Chart } from "./components";
import { SpotlightCard } from "@/app/ReactBitsComponents";

export const BoostYourSales = () => {
  return (
    <SpotlightCard className={"h-full"}>
      <div
        className={
          "overflow-hidden rounded-[10px] border border-solid border-[#212121] bg-gradient-to-bl from-[#1b1b1b33] to-[#1B1B1B] w-full h-full"
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
                "rounded bg-[#05050599] shadow-[0_20px_30px_0_#05050580] w-full h-full"
              }
            >
              <div className={"p-5 w-full"}>
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
