import Image from "next/image";
import { useState } from "react";

interface IRedButtonProps {
  height: string;
}

export const RedButton = ({ height }: IRedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={"button"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center justify-center w-[167px] ${height} bg-red rounded-sm px-4`}
    >
      <div className={"flex items-center gap-3 flex-nowrap w-full"}>
        <p
          className={
            "text-sm font-fancy !leading-none text-white text-left whitespace-nowrap"
          }
        >
          Start Your Project
        </p>

        <Image
          width={17}
          height={16}
          src={"/images/red_btn_arrow.svg"}
          alt={"Arrow"}
          loading={"lazy"}
          className={`relative ${isHovered ? "left-1" : "left-0"}`}
          style={{
            transition: "left 0.3s ease-in-out",
          }}
        />
      </div>
    </button>
  );
};
