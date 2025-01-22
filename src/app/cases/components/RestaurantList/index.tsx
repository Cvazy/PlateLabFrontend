import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./RestaurantList.module.css";
import { CaseItem } from "@/app/cases/components";
import { ReactNode } from "react";
import { IGalleryProps } from "@/app/cases/model";

interface IRestaurantListProps extends IGalleryProps {
  setActiveCase: (value: ((prevState: number) => number) | number) => void;
}

export const RestaurantList = ({
  activeCase,
  cases,
  setActiveCase,
}: IRestaurantListProps) => {
  return (
    <div
      className={
        "flex justify-start gap-4 w-full mb-[100px] md:gap-5 lg:mb-0 lg:mt-[100px]"
      }
    >
      <Swiper
        className={styles.smallSwiper}
        slidesPerView={1.25}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {cases &&
          cases.map(
            ({ id, restaurant_name, images }) =>
              (
                <SwiperSlide key={id} className={"!w-fit"}>
                  <CaseItem
                    key={id}
                    name={restaurant_name}
                    image={images[0]}
                    isActive={activeCase === id}
                    onClick={() => setActiveCase(+id)}
                  />
                </SwiperSlide>
              ) as ReactNode,
          )}
      </Swiper>
    </div>
  );
};
