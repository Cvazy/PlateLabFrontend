"use client";

import { IFooter, useFetchFooterInformationQuery } from "../../model";

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
    </div>
  );
};
