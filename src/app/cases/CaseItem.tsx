"use client";

import Image from "next/image";
import styles from "./CaseItem.module.css";
import { useState } from "react";

interface ICaseItemProps {
  name: string;
  imageSrc: string;
  isActive: boolean;
}

export const CaseItem = ({ name, imageSrc, isActive }: ICaseItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"flex flex-col items-start gap-4 min-w-40 md:min-w-[200px]"}
    >
      <div className={"flex items-start gap-2.5 flex-nowrap w-full"}>
        <div className={"flex justify-center w-3.5"}>
          <div
            className={`${styles.lineContainer} ${isHovered && !isActive ? styles.Hovered : ""} ${isActive ? styles.Hovered : ""}`}
          >
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
          </div>
        </div>

        <p
          className={`text-base font-fancy !leading-none ${isHovered ? "text-white" : "text-light_gray"} ${isActive ? "!text-white" : ""} text-left`}
        >
          {name}
        </p>
      </div>

      <div className={"w-40 h-40 relative md:w-[200px] md:h-[200px]"}>
        <Image
          width={200}
          height={200}
          objectFit={"cover"}
          src={imageSrc}
          alt={"Image"}
          className={`rounded-lg w-40 h-40 ${isActive ? "shadow-[0_-10px_16px_0_#ffffff1a]" : ""} md:w-[200px] md:h-[200px]`}
        />

        <div
          className={`absolute ${isHovered || isActive ? "" : "bg-[#00000080]"} top-0 left-0 z-20 w-40 h-40 md:w-[200px] md:h-[200px]`}
        ></div>
      </div>
    </div>
  );
};
