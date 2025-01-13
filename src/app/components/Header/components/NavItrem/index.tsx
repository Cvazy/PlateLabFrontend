"use client";

import Link from "next/link";
import { useState } from "react";

interface INavItem {
  link: string;
  name: string;
  widget: boolean;
}

export const NavItem = ({ link, name, widget }: INavItem) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className={`${widget ? "flex items-center gap-0.5" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${widget ? "flex items-center gap-2.5 sm:gap-0.5" : ""} py-1.5 px-2.5 lg:px-5`}
      >
        <div
          className={`!duration-100 text-center font-fancy text-xl !leading-[12px] sm:text-base sm:!leading-[18px] sm:min-w-14 ${
            isHovered ? "text-red" : "text-white"
          }`}
        >
          {name}
        </div>

        {widget && (
          <div className={`rounded ${isHovered ? "bg-red" : "bg-white"}`}>
            <div className={"py-1 px-1.5"}>
              <p className={"text-[13px] !leading-none text-black font-fancy"}>
                24
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
