"use client";

import { useState } from "react";

export const SeeWorkBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={"button"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-4 flex-nowrap rounded-full min-w-36 !duration-0 px-4 py-3.5 lg:py-2.5 ${isHovered ? "px-8 border border-solid border-white" : ""}`}
    >
      <div
        className={`relative rounded-full border-2 border-solid ${isHovered ? "hidden" : "block"} w-[15px] h-[15px]`}
      ></div>

      <p
        className={`font-fancy text-[15px] whitespace-nowrap !leading-none lg:text-sm`}
      >
        See our work
      </p>
    </button>
  );
};
