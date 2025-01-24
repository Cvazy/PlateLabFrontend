"use client";

import { useState } from "react";
import { HowItsWork, FAQ } from "@/app/components";

export const InformationBlock = () => {
  const [isFAQVisible, setIsFAQVisible] = useState(false);

  return (
    <div className={"py-20 w-full"}>
      <div className={"flex flex-col relative w-full"}>
        <div className={"grid grid-cols-2 top-px relative z-10 w-full"}>
          <button
            type={"button"}
            onClick={() => setIsFAQVisible(false)}
            className={`${isFAQVisible ? "" : "bg-[#161515] border-t border-x border-solid border-gray"} text-lg text-white !leading-none px-10 py-3.5 rounded-t-lg w-full md:text-xl lg:text-2xl xl:text-[28px]`}
          >
            How it works?
          </button>

          <button
            type={"button"}
            onClick={() => setIsFAQVisible(true)}
            className={`${!isFAQVisible ? "" : "bg-[#161515] border-t border-x border-solid border-gray"} text-lg text-white !leading-none px-10 py-3.5 rounded-t-lg w-full md:text-xl lg:text-2xl xl:text-[28px]`}
          >
            FAQ
          </button>
        </div>

        <div
          className={`bg-gradient-to-b from-[#161515] to-[#05050591] ${isFAQVisible ? "rounded-tl-lg" : "rounded-tr-lg"} rounded-lg-b border border-solid border-gray w-full`}
        >
          <div className={"py-[60px] px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10"}>
            {isFAQVisible ? <FAQ /> : <HowItsWork isHorizontal={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};
