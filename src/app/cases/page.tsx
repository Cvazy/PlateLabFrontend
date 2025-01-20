"use client";

import { ReactNode, useState } from "react";
import { Contact } from "@/app/components";
import { CaseItem } from "@/app/cases/CaseItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ICaseItem, useFetchAllCasesQuery } from "@/app/cases/model";
import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";
import { Loader } from "@/app/components";

const CasesPage = () => {
  const [activeCase, setActiveCase] = useState<number>(1);

  const { data, isError, isLoading } = useFetchAllCasesQuery();

  //@ts-ignore
  const cases: ICaseItem[] = data;

  if (isLoading) return <Loader />;

  return (
    <div className={"px-5 w-full sm:px-6 md:px-8 lg:px-10"}>
      <div className={"pt-20 w-full lg:pt-[60px]"}>
        <div className={"flex flex-col items-center gap-10 w-full"}>
          <h1
            className={
              "text-[32px] text-white text-center !leading-none sm:text-4xl md:text-[40px] lg:text-5xl"
            }
          >
            Cases<span className={"text-gray"}>.</span>
          </h1>

          {isError && (
            <p
              className={
                "text-center font-fancy text-red text-lg w-full sm:text-xl md:text-2xl lg:text-3xl"
              }
            >
              An error occurred during the request. Try to reload the page or
              come back later.
            </p>
          )}

          <div
            className={"flex flex-col-reverse items-start w-full lg:flex-col"}
          >
            {cases &&
              cases.map(({ id, restaurant_name, description, images }) => (
                <div
                  key={id}
                  className={
                    "flex flex-col items-start gap-2.5 w-full lg:flex-row"
                  }
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
                            "hidden absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none md:block"
                          }
                        ></div>

                        <Swiper slidesPerView={2.5} className={"bigSwiper"}>
                          {images.map(
                            ({ id, image, caption }) =>
                              (
                                <SwiperSlide key={id} className={"!w-fit"}>
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
                      </div>
                    </>
                  )}
                </div>
              ))}

            <div
              className={
                "flex justify-start gap-4 w-full mb-[100px] md:gap-5 lg:mb-0 lg:mt-[100px]"
              }
            >
              <Swiper
                className={"!m-0 smallSwiper"}
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
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default CasesPage;
