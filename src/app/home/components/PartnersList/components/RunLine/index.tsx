import styles from "@/app/home/components/PartnersList/PartnersList.module.css";
import CustomImage from "@/app/utils/customImage";
import { imageLoader } from "@/app/utils";
import { IPartner, useFetchAllPartnersQuery } from "@/app/home";
import React from "react";

export const RunLine = React.memo(() => {
  const { data } = useFetchAllPartnersQuery();

  const partners: IPartner[] = data || [];

  const repeatedPartners = Array.from({ length: 10 }, () => partners).flat();

  return (
    <div
      key={Date.now()}
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
  );
});
