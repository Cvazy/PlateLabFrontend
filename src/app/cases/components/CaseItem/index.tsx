"use client";

import styles from "./CaseItem.module.css";
import { useState } from "react";
import { ICaseImage } from "@/app/cases/model";
import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";

interface ICaseItemProps {
  name: string;
  image: ICaseImage;
  isActive: boolean;
  onClick: () => void;
}

export const CaseItem = ({
  name,
  image,
  isActive,
  onClick,
}: ICaseItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        "flex flex-col items-start gap-4 max-w-40 min-w-40 cursor-pointer sm:max-w-[200px] md:min-w-[200px]"
      }
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

      <div
        className={
          "min-w-40 min-h-40 relative md:min-w-[200px] md:min-h-[200px]"
        }
      >
        <CustomImage
          width={200}
          height={200}
          src={image.image}
          alt={image.caption}
          loader={imageLoader}
          className={`w-40 h-40 md:w-[200px] md:h-[200px]`}
        />

        <div
          className={`absolute ${isHovered || isActive ? "" : "bg-[#00000080]"} top-0 left-0 z-20 w-40 h-40 md:w-[200px] md:h-[200px]`}
        ></div>
      </div>
    </div>
  );
};
