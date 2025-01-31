import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./BigGallery.module.css";
import CustomImage from "@/app/utils/customImage";
import { imageLoader } from "@/app/utils";
import { ReactNode, useState } from "react";
import { IGalleryProps } from "@/app/cases/model";
import { Autoplay } from "swiper/modules";
import { ModalView } from "./components";

export const BigGallery = ({ cases, activeCase }: IGalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      {cases &&
        cases.map(({ id, restaurant_name, description, images }) => (
          <div
            key={id}
            className={"flex flex-col items-start gap-2.5 w-full lg:flex-row"}
          >
            {activeCase === id && (
              <>
                <h3
                  className={
                    "text-[28px] font-fancy text-white !leading-[34px] w-full sm:text-3xl md:text-[32px] md:!leading-[38px] lg:min-w-[390px] lg:max-w-[390px] xl:text-4xl xl:!leading-[44px]"
                  }
                >
                  {description}
                </h3>

                <div className={"relative w-full"}>
                  <div
                    className={
                      "hidden absolute top-0 -left-2.5 z-20 w-full h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none md:block"
                    }
                  ></div>

                  <Swiper
                    slidesPerView={2.5}
                    spaceBetween={10}
                    className={styles.bigSwiper}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    speed={1500}
                    modules={[Autoplay]}
                  >
                    {images.map(
                      ({ id, image, caption }, index) =>
                        (
                          <SwiperSlide
                            key={id}
                            className={"cursor-pointer !w-fit"}
                            onClick={() => {
                              setSelected(index);
                              setSelectedIndex(index);
                            }}
                          >
                            <CustomImage
                              width={400}
                              height={400}
                              src={image}
                              alt={caption}
                              loading={"lazy"}
                              loader={imageLoader}
                              className={`rounded-lg w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px]`}
                            />
                          </SwiperSlide>
                        ) as ReactNode,
                    )}
                  </Swiper>

                  <ModalView
                    images={images}
                    selected={selected}
                    selectedIndex={selectedIndex}
                    setSelected={setSelected}
                    setSelectedIndex={setSelectedIndex}
                  />
                </div>
              </>
            )}
          </div>
        ))}
    </>
  );
};
