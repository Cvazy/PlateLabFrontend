"use client";

import { useState } from "react";
import { INetwork } from "@/app/components/Footer/model";
import Image from "next/image";
import { imageLoader } from "@/app/utils";

interface INetworkItemProps extends Omit<INetwork, "id"> {
  isMainPage: boolean;
  iconSize: number;
  isAboutPage: boolean;
}

export const NetworkItem = ({
  name,
  link,
  image_icon_light,
  image_icon_dark,
  isMainPage,
  iconSize,
  isAboutPage,
}: INetworkItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block rounded-lg w-full ${isMainPage ? "border border-solid border-[#a0a0a033] bg-white" : isAboutPage ? "bg-dark_gray" : "bg-[#ffffff0d]"}`}
    >
      <div
        className={`flex items-center justify-center relative py-4 px-5 w-full ${isAboutPage ? "aspect-square" : ""} md:py-6`}
      >
        <div className={"absolute top-[5px] left-[5px]"}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0341 3.08963C11.9613 3.15275 11.8682 3.1875 11.7719 3.1875L4.60552 3.1875C4.50921 3.1875 4.41613 3.15275 4.34339 3.08963L1.59101 0.701645C1.31141 0.459055 1.48297 -0.000489753 1.85315 -0.000489721L14.5243 -0.000488613C14.8945 -0.000488581 15.066 0.459056 14.7864 0.701646L12.0341 3.08963Z"
              fill={`${isHovered ? "#F63737" : isMainPage ? "black" : "white"}`}
            />
            <path
              d="M3.1785 4.48743C3.24162 4.56018 3.27637 4.65325 3.27637 4.74957L3.27637 11.916C3.27637 12.0123 3.24162 12.1053 3.1785 12.1781L0.790512 14.9305C0.547923 15.2101 0.0883781 15.0385 0.0883781 14.6683L0.0883786 1.99719C0.0883786 1.62702 0.547924 1.45545 0.790513 1.73506L3.1785 4.48743Z"
              fill={`${isHovered ? "#F63737" : isMainPage ? "black" : "white"}`}
            />
          </svg>
        </div>

        <div
          className={`flex items-center ${isAboutPage ? "flex-col gap-2.5" : "gap-6"} overflow-hidden flex-nowrap`}
        >
          <Image
            width={iconSize}
            height={iconSize}
            src={isMainPage ? image_icon_dark : image_icon_light}
            alt={name}
            loading={"lazy"}
            loader={imageLoader}
            className={`${isAboutPage ? "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[60px] xl:h-[60px]" : "w-6 h-6"}`}
          />

          <p
            className={`font-fancy ${isAboutPage ? "text-[14px] md:text-base" : "text-base"} !leading-none text-light_gray whitespace-nowrap text-ellipsis overflow-hidden w-full`}
          >
            {name}
          </p>
        </div>
      </div>
    </a>
  );
};
