import { useEffect, useState } from "react";
import Image from "next/image";

export const HeadBlock = ({ restaurant_name }: { restaurant_name: string }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    setCurrentTime(formattedTime);
  };

  useEffect(() => {
    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={"w-full h-[82px] bg-[#121212]"}>
      <div className={"pt-2 pb-4 px-2.5 w-full h-full"}>
        <div className={"flex flex-col justify-between gap-5 w-full h-full"}>
          <div
            className={
              "flex items-center justify-between gap-4 pl-4 pr-1 w-full"
            }
          >
            <p
              className={
                "text-white mr-1.5 font-fancy text-xs font-semibold !leading-none text-left whitespace-nowrap"
              }
            >
              {currentTime}
            </p>

            <div className={"h-5 w-20 bg-dark_gray rounded-full"}>
              <div className={"flex justify-end p-1.5 w-full h-full"}>
                <div className={"w-2 h-2 rounded-full bg-[#545454]"}></div>
              </div>
            </div>

            <div className={"flex gap-1 flex-nowrap"}>
              <div className={"w-3.5 h-2.5"}>
                <Image
                  width={14}
                  height={10}
                  src={"/images/internet.svg"}
                  alt={"Internet"}
                  loading={"lazy"}
                  className={"block"}
                />
              </div>

              <div className={"w-3 h-2.5"}>
                <Image
                  width={12}
                  height={10}
                  src={"/images/wi-fi.svg"}
                  alt={"Wi-Fi"}
                  loading={"lazy"}
                  className={"block"}
                />
              </div>

              <div className={"w-5 h-2.5"}>
                <Image
                  width={20}
                  height={10}
                  src={"/images/battery.svg"}
                  alt={"Battery"}
                  loading={"lazy"}
                  className={"block"}
                />
              </div>
            </div>
          </div>

          <div
            className={"flex items-center justify-between gap-4 pr-1.5 w-full"}
          >
            <div className={"w-2.5 h-2.5"}>
              <Image
                width={10}
                height={10}
                src={"/images/iphone_close.svg"}
                alt={"CLose"}
                loading={"lazy"}
                className={"block"}
              />
            </div>

            <p
              className={
                "text-white font-fancy text-xs !leading-none text-center min-w-20 whitespace-nowrap"
              }
            >
              {restaurant_name}
            </p>

            <div className={"w-3 h-3"}>
              <Image
                width={12}
                height={12}
                src={"/images/search.svg"}
                alt={"Search"}
                loading={"lazy"}
                className={"block"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
