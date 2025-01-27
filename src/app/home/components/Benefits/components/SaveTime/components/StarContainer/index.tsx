"use client";

import { Decorations, Star } from "./components";
import { useState } from "react";

export const StarContainer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"rounded bg-[#050505b3] h-full w-full xl:max-w-[202px]"}
    >
      <div
        className={
          "flex items-center justify-center relative p-5 w-full h-full"
        }
      >
        <Decorations isHovered={isHovered} />

        <Star />
      </div>
    </div>
  );
};
