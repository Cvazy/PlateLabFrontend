import { RedButton, SceondaryButton } from "@/app/components";

export const Banner = () => {
  return (
    <div className={"absolute z-40 top-1/4 left-0 right-0 px-5 w-full"}>
      <div className={"flex justify-center w-full"}>
        <div className={"max-w-[773px] w-full"}>
          <div
            className={
              "flex flex-col items-center gap-[60px] w-full md:gap-14 lg:gap-12 xl:gap-11"
            }
          >
            <div>
              <h1
                className={
                  "text-center !leading-none text-white text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
                }
              >
                AI Photography
              </h1>

              <h2
                className={
                  "text-center !leading-none text-white text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
                }
              >
                For Restaurants.
              </h2>
            </div>

            <div className={"flex flex-col items-center gap-10 w-full"}>
              <div>
                <p
                  className={
                    "font-fancy text-base text-center text-white tracking-[-0.0125em] md:text-lg lg:text-xl xl:text-[22px]"
                  }
                >
                  AI-crafted photos that look stunning,
                </p>

                <p
                  className={
                    "font-fancy text-base text-center text-white tracking-[-0.0125em] md:text-lg lg:text-xl xl:text-[22px]"
                  }
                >
                  professional, and{" "}
                  <span className={"text-red"}>sell more.</span>
                </p>
              </div>

              <div
                className={
                  "flex flex-col items-center gap-6 max-w-[183px] w-full md:gap-5 lg:max-w-[337px] lg:flex-row xl:gap-4"
                }
              >
                <RedButton height={"h-11"} />

                <SceondaryButton height={"h-11"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
