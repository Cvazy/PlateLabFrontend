import { Button } from "@/app/components";
import { SeeWorkBtn } from "./components";

export const Banner = () => {
  const handleClick = () => {};

  return (
    <div className={"absolute z-40 top-1/4 left-0 right-0 px-5 w-full"}>
      <div className={"flex justify-center w-full"}>
        <div className={"max-w-[773px] w-full"}>
          <div
            className={
              "flex flex-col items-center gap-[60px] w-full md:gap-14 lg:gap-12 xl:gap-11"
            }
          >
            <h1
              className={
                "text-center !leading-none text-white text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
              }
            >
              AI Photography for restaurants.
            </h1>

            <div className={"flex flex-col items-center gap-10 w-full"}>
              <p
                className={
                  "font-fancy text-base text-center text-white tracking-[-0.0125em] md:text-lg xl:text-xl"
                }
              >
                Save time and money: AI-crafted photos that look stunning,
                professional, and sell more.
              </p>

              <div
                className={
                  "flex flex-col items-center gap-6 max-w-[183px] w-full md:gap-5 lg:max-w-[337px] lg:flex-row xl:gap-4"
                }
              >
                <Button
                  text={"Start your project"}
                  textColor={"white"}
                  fontSize={"text-[15px] lg:text-sm"}
                  bgColor={"bg-red"}
                  paddings={"px-4 py-3.5 lg:py-2.5"}
                  borderRadius={"rounded"}
                  onClick={handleClick}
                  starReverse={true}
                  starColor={"white"}
                  height={"h-11 lg:h-9"}
                  disabled={false}
                  hoverEffect={"hover:bg-[#811C1C]"}
                />

                <SeeWorkBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
