"use client";

import { useState } from "react";
import { DelayedLink } from "@/app/components";

export const ContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DelayedLink
      href={"/contact"}
      data-cursor-text={"Contact"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={
        "flex items-center rounded bg-dark_gray border border-solid border-gray h-full"
      }
    >
      <div
        data-cursor-text={"Contact"}
        className={"flex items-center gap-2.5 flex-nowrap px-4"}
      >
        <p
          data-cursor-text={"Contact"}
          className={`uppercase ${isHovered ? "text-red" : "text-white"} text-sm !leading-4 font-fancy`}
        >
          Contact
        </p>

        <div
          data-cursor-text={"Contact"}
          className={`hidden !duration-500 ${isHovered ? "rotate-90" : ""} sm:block`}
        >
          <svg
            data-cursor-text={"Contact"}
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-cursor-text={"Contact"}
              d="M10.3283 14.2603C10.3352 14.1642 10.3764 14.0738 10.4445 14.0057L14.2708 10.1794C14.3389 10.1113 14.4293 10.07 14.5254 10.0632L17.0193 9.88643C17.3885 9.86026 17.5921 10.3065 17.3304 10.5683L10.8334 17.0653C10.5716 17.327 10.1254 17.1234 10.1516 16.7541L10.3283 14.2603Z"
              fill={isHovered ? "white" : "#F63737"}
            />
            <path
              data-cursor-text={"Contact"}
              d="M14.3989 7.93923C14.3029 7.93242 14.2125 7.89118 14.1444 7.82308L10.318 3.99676C10.2499 3.92866 10.2087 3.83827 10.2019 3.7422L10.0251 1.24831C9.99893 0.879064 10.4452 0.675434 10.7069 0.937187L17.2039 7.43418C17.4657 7.69593 17.2621 8.1422 16.8928 8.11602L14.3989 7.93923Z"
              fill={isHovered ? "white" : "#F63737"}
            />
            <path
              data-cursor-text={"Contact"}
              d="M7.84744 3.73975C7.84063 3.83581 7.79938 3.9262 7.73128 3.9943L3.90496 7.82062C3.83686 7.88873 3.74647 7.92997 3.6504 7.93678L1.15651 8.11356C0.787266 8.13974 0.583636 7.69348 0.845389 7.43172L7.34238 0.93473C7.60414 0.672977 8.0504 0.87661 8.02422 1.24586L7.84744 3.73975Z"
              fill={isHovered ? "white" : "#F63737"}
            />
            <path
              data-cursor-text={"Contact"}
              d="M3.77685 10.0617C3.87292 10.0686 3.96331 10.1098 4.03141 10.1779L7.85773 14.0042C7.92584 14.0723 7.96708 14.1627 7.97389 14.2588L8.15067 16.7527C8.17685 17.1219 7.73059 17.3255 7.46883 17.0638L0.97184 10.5668C0.710087 10.305 0.913719 9.85878 1.28297 9.88496L3.77685 10.0617Z"
              fill={isHovered ? "white" : "#F63737"}
            />
          </svg>
        </div>
      </div>
    </DelayedLink>
  );
};
