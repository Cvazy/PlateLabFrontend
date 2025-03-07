"use client";

import Image from "next/image";
import { useState } from "react";
import { imageLoader } from "@/app/utils";

export const AboutImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={"w-full h-full"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={
          "flex items-center justify-center rounded-lg overflow-hidden relative w-full h-full"
        }
      >
        {/*Элемент для статичной сборки приложения*/}
        <img
          width={350}
          height={350}
          src={"https://cvazy-platelabfrontend-3740.twc1.net/images/1.png"}
          alt={"About Image"}
          className={
            "select-none opacity-20 min-w-[350px] min-h-[350px] w-full h-full sm:min-w-[400px] sm:min-h-[400px] md:min-w-[500px] md:min-h-[500px] lg:min-w-[600px] lg:min-h-[600px] xl:min-w-[730px] xl:min-h-[730px]"
          }
          loading={"lazy"}
        />

        {/*<Image*/}
        {/*  width={350}*/}
        {/*  height={350}*/}
        {/*  src={"/images/1.png"}*/}
        {/*  alt={"About Image"}*/}
        {/*  className={*/}
        {/*    "select-none opacity-20 min-w-[350px] min-h-[350px] w-full h-full sm:min-w-[400px] sm:min-h-[400px] md:min-w-[500px] md:min-h-[500px] lg:min-w-[600px] lg:min-h-[600px] xl:min-w-[730px] xl:min-h-[730px]"*/}
        {/*  }*/}
        {/*  loading={"lazy"}*/}
        {/*/>*/}

        <div
          className={`flex justify-center items-center !duration-700 absolute z-30 top-0 left-0 w-full h-full ${isHovered ? "rotate-180" : ""}`}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6949 15.9425C11.7017 15.8464 11.743 15.756 11.8111 15.6879L16.1758 11.3232C16.2439 11.2551 16.3343 11.2138 16.4304 11.207L19.4193 10.9952C19.7885 10.969 19.9921 11.4152 19.7304 11.677L12.1649 19.2425C11.9031 19.5042 11.4569 19.3006 11.4831 18.9313L11.6949 15.9425Z"
              fill={isHovered ? "#F63737" : "white"}
            />
            <path
              d="M16.2882 8.79628C16.1921 8.78947 16.1017 8.74823 16.0336 8.68012L11.6689 4.31537C11.6008 4.24727 11.5595 4.15688 11.5527 4.06081L11.3409 1.07196C11.3147 0.702713 11.7609 0.499081 12.0227 0.760834L19.5882 8.32631C19.8499 8.58806 19.6463 9.03433 19.277 9.00815L16.2882 8.79628Z"
              fill={isHovered ? "#F63737" : "white"}
            />
            <path
              d="M8.88124 4.05751C8.87443 4.15358 8.83319 4.24396 8.76508 4.31206L4.40033 8.67682C4.33223 8.74492 4.24184 8.78616 4.14577 8.79297L1.15692 9.00484C0.787672 9.03102 0.584041 8.58476 0.845794 8.323L8.41127 0.757527C8.67302 0.495774 9.11929 0.699404 9.09311 1.06865L8.88124 4.05751Z"
              fill={isHovered ? "#F63737" : "white"}
            />
            <path
              d="M4.28797 11.2037C4.38404 11.2105 4.47443 11.2518 4.54253 11.3199L8.90728 15.6846C8.97539 15.7527 9.01663 15.8431 9.02344 15.9392L9.23531 18.928C9.26149 19.2973 8.81522 19.5009 8.55347 19.2392L0.987996 11.6737C0.726243 11.4119 0.929873 10.9657 1.29912 10.9918L4.28797 11.2037Z"
              fill={isHovered ? "#F63737" : "white"}
            />
          </svg>
        </div>

        <div
          className={
            "flex justify-center items-center absolute z-20 w-full h-full"
          }
        >
          <svg
            viewBox="0 0 676 732"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <circle cx="337.588" cy="366" r="34.4628" stroke="#A0A0A0" />
              <path
                d="M21.5839 1.31547L702.273 682.004L702.98 681.297L22.2911 0.608361L21.5839 1.31547ZM653.592 730.684L-27.0963 49.9957L-27.8034 50.7028L652.885 731.392L653.592 730.684Z"
                fill="#A0A0A0"
              />
              <path
                d="M-27.0962 682.004L653.593 1.31519L652.885 0.608085L-27.8033 681.297L-27.0962 682.004ZM702.273 49.9954L21.5841 730.684L22.2912 731.391L702.98 50.7025L702.273 49.9954Z"
                fill="#A0A0A0"
              />
            </g>
          </svg>
        </div>

        <div
          className={
            "absolute top-0 left-0 bg-light_gray opacity-10 z-20 w-full h-full"
          }
        ></div>
      </div>
    </div>
  );
};
