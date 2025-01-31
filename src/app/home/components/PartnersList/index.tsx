"use client";

import { IPartner, useFetchAllPartnersQuery } from "@/app/home";
import { DelayedLink } from "@/app/components";
import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";
import styles from "./PartnersList.module.css";
import Image from "next/image";
import { useState } from "react";
import { SplitText } from "@/app/ReactBitsComponents";

export const PartnersList = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { data } = useFetchAllPartnersQuery();

  const partners: IPartner[] = data || [];

  const repeatedPartners = Array.from({ length: 10 }, () => partners).flat();

  return (
    <DelayedLink
      href={"/cases"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-0 bottom-0 no-transition ${isHovered ? "z-30 opacity-100" : "z-0 opacity-0"} h-[88px] w-full`}
      >
        <div
          className={
            "flex items-center justify-center no-transition w-full h-full"
          }
        >
          <div className={"flex items-center gap-4 flex-nowrap no-transition"}>
            <SplitText
              text={"More cases"}
              className={
                "text-center text-xl text-white no-transition whitespace-nowrap"
              }
              delay={25}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing={"easeOutCubic"}
              threshold={0.1}
              rootMargin={"-700px"}
              iconSrc={"/images/right_arrow.svg"}
              iconAlt={"Go on cases"}
              isHovered={isHovered}
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 z-20 py-[30px] w-full ${isHovered ? "blur-sm" : ""}`}
      >
        <div className={"overflow-hidden relative w-full"}>
          <div
            className={`flex items-center gap-[60px] ${styles.AnimateScroll} w-max h-full`}
          >
            {repeatedPartners &&
              repeatedPartners.map(({ id, name, image }, index) => (
                <div
                  key={`${id}-${index}`}
                  className="w-fit h-fit opacity-50 md:opacity-100"
                >
                  <CustomImage
                    width={132}
                    height={28}
                    src={image}
                    alt={name}
                    loader={imageLoader}
                    loading={"lazy"}
                    className="h-[38px] w-auto md:h-7"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </DelayedLink>
  );
};
