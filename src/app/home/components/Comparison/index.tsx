"use client";

import { DesktopVersion, MobileVersion } from "./components";
import { useFetchAllComparisonQuery } from "@/app/home";
import { Loader } from "@/app/components";
import { transformData } from "./utils";
import { ITransformComparisons } from "./model";

export const Comparison = () => {
  const { data } = useFetchAllComparisonQuery();

  const comparisons: ITransformComparisons[] = transformData(data || []);

  return (
    <div className={"py-20 w-full lg:pb-24 xl:pb-[120px]"}>
      <div className={"border-y border-solid border-gray md:border-0"}>
        <div className={"flex flex-col items-center w-full md:gap-8 lg:gap-10"}>
          <div
            className={
              "flex items-center justify-center p-6 border-b border-solid border-gray w-full md:p-0 md:border-0"
            }
          >
            <h2
              className={
                "text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[64px]"
              }
            >
              Comparison
            </h2>
          </div>

          <div className={"w-full"}>
            <div className={"hidden md:block"}>
              <DesktopVersion comparisons={comparisons} />
            </div>

            <div className={"block h-screen md:hidden"}>
              <MobileVersion comparisons={comparisons} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
