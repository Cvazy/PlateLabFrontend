import { IPartner, useFetchAllPartnersQuery } from "@/app/home";
import { Loader } from "@/app/components";
import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";
import styles from "./PartnersList.module.css";

export const PartnersList = () => {
  const { data } = useFetchAllPartnersQuery();

  const partners: IPartner[] = data || [];

  const repeatedPartners = Array.from({ length: 10 }, () => partners).flat();

  return (
    <div className={"absolute bottom-0 left-0 z-20 py-[30px] w-full"}>
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
  );
};
