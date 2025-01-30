"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { DelayedLink } from "@/app/components";

interface IActiveLinkProps {
  name: string;
  href: string;
  hoverText: string;
  isMainPage: boolean;
}

export const FooterLink = ({
  name,
  href,
  hoverText,
  isMainPage,
}: IActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DelayedLink
      href={href}
      data-cursor-text={hoverText}
      className={"relative nav_link_click"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        data-cursor-text={hoverText}
        className={"flex items-start gap-2 justify-start w-fit"}
      >
        <p
          data-cursor-text={hoverText}
          className={`text-2xl ${isMainPage ? "text-black" : "text-white"} font-fancy !leading-none md:text-[28px] xl:text-[32px]`}
        >
          {name}
        </p>

        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.71338 0H6.46338V12H5.71338V0Z"
            fill={`${isActive || isHovered ? "#F63737" : "#A0A0A0"}`}
          />

          <path
            d="M12.0884 5.625V6.375L0.0883789 6.375L0.0883789 5.625L12.0884 5.625Z"
            fill={`${isActive || isHovered ? "#F63737" : "#A0A0A0"}`}
          />

          <path
            d="M10.5962 9.97746L10.0659 10.5078L1.58057 2.02251L2.1109 1.49218L10.5962 9.97746Z"
            fill={`${isActive || isHovered ? "#F63737" : "#A0A0A0"}`}
          />

          <path
            d="M2.11092 10.5078L1.58059 9.97745L10.0659 1.49217L10.5962 2.0225L2.11092 10.5078Z"
            fill={`${isActive || isHovered ? "#F63737" : "#A0A0A0"}`}
          />
        </svg>
      </div>

      <div
        className={"nav_link_line"}
        style={{ bottom: "-6px", left: 0, width: "100%" }}
      ></div>
    </DelayedLink>
  );
};
