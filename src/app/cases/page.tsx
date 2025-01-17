"use client";

import { ReactNode, useState } from "react";
import { Contact } from "@/app/components";
import { CaseItem } from "@/app/cases/CaseItem";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ICaseItem } from "@/app/cases/types";

const CasesPage = () => {
  const [activeCase, setActiveCase] = useState<number>(1);

  const casesData: ICaseItem[] = [
    {
      id: 1,
      name: "New York restaurant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      images: ["/images/1.png", "/images/3.png", "/images/5.png"],
    },
    {
      id: 2,
      name: "Los Angeles restaurant",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      images: ["/images/2.png", "/images/4.png", "/images/6.png"],
    },
  ];

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

          <div className={"flex flex-col items-start w-full"}>
            {casesData.map(({ id, name, description, images }) => (
              <div
                key={id}
                className={
                  "flex flex-col items-start gap-2.5 w-full lg:flex-row"
                }
              >
                {activeCase === id && (
                  <h3
                    className={
                      "text-[28px] font-fancy text-white !leading-[34px] w-full sm:text-3xl md:text-[32px] md:!leading-[38px] lg:min-w-[390px] lg:max-w-[390px] xl:text-4xl xl:!leading-[44px]"
                    }
                  >
                    {description}
                  </h3>
                )}

                {activeCase === id && (
                  <div className={"relative w-full"}>
                    <div
                      className={
                        "absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none"
                      }
                    ></div>

                    <Swiper slidesPerView={2.5} className={"bigSwiper"}>
                      {images.map(
                        (imageSrc, index) =>
                          (
                            <SwiperSlide key={index} className={"!w-fit"}>
                              <Image
                                width={400}
                                height={400}
                                objectFit={"cover"}
                                src={imageSrc}
                                alt={name}
                                className={`rounded-lg w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px]`}
                              />
                            </SwiperSlide>
                          ) as ReactNode,
                      )}
                    </Swiper>
                  </div>
                )}
              </div>
            ))}

            <div
              className={"flex justify-start gap-4 mt-[100px] w-full md:gap-5"}
            >
              <Swiper
                watchOverflow={true}
                centeredSlides={false}
                className={"!m-0"}
              >
                {casesData.map(
                  ({ id, name, images }) =>
                    (
                      <SwiperSlide key={id} className={"!w-fit"}>
                        <CaseItem
                          key={id}
                          name={name}
                          imageSrc={images[0]}
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
