import styles from "./HowItsWorkElement.module.css";
import { IHowItsWorkElementProps } from "@/app/contact";

export const HowItsWorkElement = ({
  title,
  description,
  numElement,
  isActive,
  isTheFirst,
  isTheLast,
  setIsPaused,
  isPaused,
}: Omit<IHowItsWorkElementProps, "id"> & {
  setIsPaused: (paused: boolean) => void;
  isPaused: boolean;
}) => {
  return (
    <div
      onMouseEnter={() => isActive && setIsPaused(true)}
      onMouseLeave={() => isActive && setIsPaused(false)}
      className={`flex flex-col gap-6 w-full lg:gap-0 lg:block`}
    >
      <div
        className={`flex justify-start w-full lg:border lg:border-r-0 lg:border-solid lg:border-gray ${isTheFirst ? "lg:rounded-tl-lg" : ""} ${isTheLast ? "rounded-b-lg" : ""}`}
      >
        <div
          className={`flex flex-col gap-6 p-0 lg:p-6 lg:gap-0 w-full lg:max-w-[556px]`}
        >
          {isActive && (
            <div
              className={`block ${styles.line} ${styles.horizontal_line} ${isActive ? styles.active : ""} lg:hidden lg:h-0 ${isPaused ? "after:pause" : ""}`}
            ></div>
          )}

          <div
            className={`flex items-start gap-5 w-full sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10`}
          >
            <div
              className={`flex flex-col items-center gap-5 w-8 ${isActive ? "" : "hidden lg:flex"}`}
            >
              <p className={"text-2xl text-red text-center"}>0{numElement}</p>

              <div
                className={`hidden ${styles.line} ${styles.vertical_line} ${isActive ? styles.active : ""} ${isPaused ? "after:pause" : ""} lg:block`}
              ></div>
            </div>

            <div
              className={`flex flex-col items-start gap-2.5 w-full ${!isActive ? "opacity-20" : ""}`}
            >
              <p
                className={`text-white !leading-[normal] ${isActive ? "text-2xl" : "text-base sm:text-lg lg:text-xl xl:text-2xl"}`}
              >
                {title}:
              </p>

              <p
                className={`font-fancy text-base text-light_gray !leading-[normal] lg:text-[15px] ${isActive ? "" : "hidden lg:block"}`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
