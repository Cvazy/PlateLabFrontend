"use client";

import { IAboutInfo, useFetchAboutInfoQuery } from "@/app/about";

export const AboutInfo = () => {
  const { data } = useFetchAboutInfoQuery();

  const aboutInfo: IAboutInfo[] = data || [];

  const { title = "", description = "" } = aboutInfo[0] || {};

  return (
    <div className={"border border-solid border-gray rounded-lg w-full"}>
      <div className={"flex flex-col gap-14 p-4 w-full lg:gap-10"}>
        <div className={"flex items-start justify-between gap-5 w-full"}>
          <div
            className={"flex flex-col items-start gap-3.5 max-w-[390px] w-full"}
          >
            <h2
              className={
                "font-fancy text-[28px] !leading-[34px] text-white text-left md:text-3xl md:!leading-[38px] lg:text-[32px] xl:!leading-[44px] xl:text-4xl"
              }
            >
              {title}
            </h2>

            <p
              className={
                "text-base !leading-[normal] text-light_gray text-left"
              }
            >
              PlateLab
            </p>
          </div>

          <p
            className={
              "font-medium text-white italic font-sf_pro text-[40px] !leading-[normal] sm:text-[44px] lg:text-5xl xl:text-[54px]"
            }
          >
            "
          </p>
        </div>

        <div className={"flex justify-end w-full"}>
          <div className={"max-w-[260px]"}>
            <p
              className={
                "text-[15px] text-light_gray font-fancy text-left !leading-none md:text-base"
              }
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
