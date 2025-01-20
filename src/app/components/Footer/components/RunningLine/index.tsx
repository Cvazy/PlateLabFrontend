import Image from "next/image";
import styles from "./RunningLine.module.css";

interface IRunningLine {
  isMainPage: boolean;
}

export const RunningLine = ({ isMainPage }: IRunningLine) => {
  return (
    <div
      className={`flex gap-10 items-center relative w-full pb-5 border-b border-solid ${isMainPage ? "border-[#a0a0a033]" : "border-dark_gray"}`}
    >
      <div
        className={`flex items-center gap-10 ${styles.marqueeContent} w-full h-[75px] sm:h-[95px] md:gap-12 lg:h-[120px] xl:gap-[60px] xl:h-[150px]`}
      >
        <p
          className={`text-6xl ${isMainPage ? "text-black" : "text-white"} !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
        >
          PlateLAB
        </p>

        <Image
          width={42}
          height={42}
          src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
          alt={"Logo"}
          loading={"lazy"}
          className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
        />

        <p
          className={`text-6xl ${isMainPage ? "text-black" : "text-white"} !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
        >
          PlateLAB
        </p>

        <Image
          width={42}
          height={42}
          src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
          alt={"Logo"}
          loading={"lazy"}
          className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
        />

        <p
          className={`text-6xl ${isMainPage ? "text-black" : "text-white"} !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
        >
          PlateLAB
        </p>

        <Image
          width={42}
          height={42}
          src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
          alt={"Logo"}
          loading={"lazy"}
          className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
        />

        <p
          className={`text-6xl ${isMainPage ? "text-black" : "text-white"} !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
        >
          PlateLAB
        </p>

        <Image
          width={42}
          height={42}
          src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
          alt={"Logo"}
          loading={"lazy"}
          className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
        />

        <p
          className={`text-6xl ${isMainPage ? "text-black" : "text-white"} !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
        >
          PlateLAB
        </p>

        <Image
          width={42}
          height={42}
          src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
          alt={"Logo"}
          loading={"lazy"}
          className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
        />

        <p
          className={`text-6xl ${isMainPage ? "text-black" : "text-white"} !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
        >
          PlateLAB
        </p>

        <Image
          width={42}
          height={42}
          src={`/images/${isMainPage ? "dark_logo.svg" : "logo.svg"}`}
          alt={"Logo"}
          loading={"lazy"}
          className={"w-[26px] h-[26px] sm:w-8 sm:h-8 lg:w-9 lg:h-9"}
        />

        <p
          className={`text-6xl ${isMainPage ? "text-black" : "text-white"} !leading-none sm:text-7xl lg:text-8xl xl:text-[120px]`}
        >
          PlateLAB
        </p>
      </div>
    </div>
  );
};
