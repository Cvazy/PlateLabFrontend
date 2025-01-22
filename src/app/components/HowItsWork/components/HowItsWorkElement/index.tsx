import styles from "./HowItsWorkElement.module.css";
import { IHowItsWorkElementProps } from "@/app/contact";

export const HowItsWorkElement = ({
  title,
  description,
  numElement,
  isActive,
  isTheFirst,
  isTheLast,
  isFAQ,
}: Omit<IHowItsWorkElementProps, "id">) => {
  return (
    <div
      className={`flex flex-col gap-6 w-full ${isFAQ && isActive ? "" : !isFAQ ? "" : "opacity-20"} lg:gap-0 lg:block`}
    >
      {isActive && isFAQ && (
        <div className={"w-full h-px bg-gray lg:h-0"}></div>
      )}

      <div
        className={`flex justify-start w-full lg:border lg:border-r-0 lg:border-solid lg:border-gray ${isTheFirst ? "lg:rounded-tl-lg" : ""} ${isTheLast ? "rounded-b-lg" : ""}`}
      >
        <div
          className={`flex flex-col gap-6 ${isFAQ ? "" : "lg:gap-0"} p-0 w-full lg:max-w-[556px] lg:p-6`}
        >
          {isActive && (
            <div
              className={`block ${styles.line} ${styles.horizontal_line} ${isActive ? styles.active : ""} lg:hidden lg:h-0`}
            ></div>
          )}

          <div
            className={
              "flex items-start gap-5 w-full sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10"
            }
          >
            <div
              className={`flex flex-col items-center gap-5 w-8 ${isActive ? "" : "hidden lg:flex"}`}
            >
              <p className={"text-2xl text-red text-center"}>0{numElement}</p>

              {!isFAQ && (
                <div
                  className={`hidden ${styles.line} ${styles.vertical_line} ${isActive ? styles.active : ""} lg:block`}
                ></div>
              )}
            </div>

            <div
              className={`flex flex-col items-start gap-2.5 w-full ${!isFAQ && isActive ? "" : "opacity-20"}`}
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
