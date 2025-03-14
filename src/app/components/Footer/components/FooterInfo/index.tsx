"use client";

import { IFooter, useFetchFooterInformationQuery } from "../../model";
import { StartProjectButton } from "@/app/components";

interface IFooterInfoProps {
  isMainPage: boolean;
}

export const FooterInfo = ({ isMainPage }: IFooterInfoProps) => {
  const { data } = useFetchFooterInformationQuery();

  const footerInfo: IFooter[] = data || [];

  const { title = "", description = "" } = footerInfo[0] || {};

  return (
    <div className={"flex flex-col items-start gap-5 max-w-md w-full"}>
      <p
        className={`text-[32px] ${isMainPage ? "text-black" : "text-white"} font-medium !leading-none md:text-4xl lg:text-5xl xl:text-[54px]`}
      >
        {title}
      </p>

      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className={`text-[15px] ${isMainPage ? "text-light_gray" : "text-gray"} font-fancy uppercase !leading-none md:text-base`}
      />

      <div className={"w-full lg:w-[276px]"}>
        <StartProjectButton
          height={"h-[54px]"}
          rounded={"rounded-[10px]"}
          bgColor={isMainPage ? "bg-[#151515]" : "bg-white"}
          textColor={isMainPage ? "text-white" : "text-[#151515]"}
          arrowColor={isMainPage ? "white" : "#151515"}
          fontSize={"text-xl"}
        />
      </div>
    </div>
  );
};
