"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DecryptedText } from "@/app/ReactBitsComponents";

export const CustomCursor = () => {
  const [pxCoord, setPxCoord] = useState<number>(0);
  const [pyCoord, setPyCoord] = useState<number>(0);

  const [text, setText] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRightPosition, setIsRightPosition] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const px = event.clientX;
      const py = event.clientY;

      setIsRightPosition(window.innerWidth - px < 300);

      const target = event.target as HTMLElement;

      if (target && target.hasAttribute("data-cursor-text")) {
        setIsVisible(true);
        setText(target.getAttribute("data-cursor-text") || "");
      } else {
        setIsVisible(false);
        setText("Navigate");
      }

      setPxCoord(px);
      setPyCoord(py);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed ${isVisible ? "opacity-100" : "opacity-0"} no-transition !duration-500 transition-opacity top-8 ${isRightPosition ? "-left-40" : "left-8"} w-fit h-fit hidden z-50 sm:block`}
      style={{
        transform: `translateX(${pxCoord}px) translateY(${pyCoord}px)`,
      }}
    >
      <div
        className={
          "rounded bg-dark_gray border border-gray border-solid w-full h-full"
        }
      >
        <div className={"py-1.5 px-2.5 w-full h-full"}>
          <div
            className={"flex items-center justify-center gap-2 w-full h-full"}
          >
            <DecryptedText
              text={text}
              animateOn="view"
              speed={50}
              revealDirection="end"
              className={"text-white font-fancy text-base !leading-none"}
            />

            <Image
              width={16}
              height={16}
              src={"/images/arrow.svg"}
              alt={"Arrow"}
              loading={"lazy"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
