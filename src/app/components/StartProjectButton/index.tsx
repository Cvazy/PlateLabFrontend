import Image from "next/image";
import { useState } from "react";

interface IStartProjectButtonProps {
  height: string;
  bgColor: string;
  textColor: string;
  rounded?: string;
  arrowColor?: string;
  fontSize?: string;
}

export const StartProjectButton = ({
  height,
  bgColor,
  textColor,
  rounded = "rounded-sm",
  arrowColor,
  fontSize = "text-sm",
}: IStartProjectButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={"button"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center justify-center w-full ${height} ${bgColor} ${rounded} px-4`}
    >
      <div
        className={"flex justify-center items-center gap-3 flex-nowrap w-full"}
      >
        <p
          className={`${fontSize} font-fancy !leading-[14px] ${textColor} text-left whitespace-nowrap`}
        >
          Start Your Project
        </p>

        <div
          className={`w-[17px] h-[16px] relative ${isHovered ? "left-1" : "left-0"}`}
          style={{
            transition: "left 0.3s ease-in-out",
          }}
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.24105 11.8388C5.24593 11.778 5.2755 11.7209 5.32432 11.6778L8.45327 8.91806C8.50209 8.875 8.56689 8.84893 8.63576 8.84462L10.7784 8.71066C11.0431 8.69411 11.189 8.97627 11.0014 9.14177L5.57796 13.9253C5.39032 14.0908 5.0704 13.962 5.08917 13.7285L5.24105 11.8388Z"
              fill={arrowColor || "white"}
            />
            <path
              d="M8.638 7.15538C8.56913 7.15107 8.50433 7.125 8.45551 7.08194L5.32656 4.32219C5.27774 4.27914 5.24817 4.22199 5.24329 4.16124L5.09141 2.27145C5.07264 2.03799 5.39256 1.90923 5.5802 2.07473L11.0036 6.85823C11.1913 7.02373 11.0453 7.30589 10.7806 7.28934L8.638 7.15538Z"
              fill={arrowColor || "white"}
            />
          </svg>
        </div>
      </div>
    </button>
  );
};
