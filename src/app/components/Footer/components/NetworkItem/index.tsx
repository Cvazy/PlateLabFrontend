"use client";

import { JSX, useState } from "react";

interface INetworkItemProps {
  name: string;
  url: string;
  icon: JSX.Element;
  isMainPage: boolean;
}

export const NetworkItem = ({
  name,
  url,
  icon,
  isMainPage,
}: INetworkItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block rounded-lg w-full ${isMainPage ? "border border-solid border-[#a0a0a033] bg-white" : "bg-[#ffffff0d]"}`}
    >
      <div
        className={
          "flex items-center justify-center relative py-4 px-5 w-full md:py-6"
        }
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

        <div className={"flex items-center gap-6 flex-nowrap"}>
          {icon}

          <p className={"font-fancy text-base !leading-none text-light_gray"}>
            {name}
          </p>
        </div>
      </div>
    </a>
  );
};
