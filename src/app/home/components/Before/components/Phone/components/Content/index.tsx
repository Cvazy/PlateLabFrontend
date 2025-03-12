import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import styles from "./Content.module.css";
import { ImageWrapper } from "./components";
import { IProductListItem, ISwiperElement } from "@/app/home";
import React, { ReactNode } from "react";

interface IPhoneContentProps {
  swiper_title: string;
  items_list_title: string;
  swiper_items: ISwiperElement[];
  product_list_items: IProductListItem[];
  valuesSwitched: boolean;
}

export const Content = React.memo(
  ({
    swiper_title,
    items_list_title,
    swiper_items,
    product_list_items,
    valuesSwitched,
  }: IPhoneContentProps) => {
    return (
      <div
        className={`w-full h-full bg-black overflow-scroll ${styles.Wrapper}`}
      >
        <div className={"w-full h-fit"}>
          <div className={"pt-6 w-full"}>
            <div className={"flex flex-col items-start gap-6 w-full lg:gap-8"}>
              <div className={"flex flex-col items-start gap-3 w-full"}>
                <p
                  className={
                    "text-white font-fancy text-xs !leading-none text-start whitespace-nowrap px-2.5 lg:text-base"
                  }
                >
                  {swiper_title}
                </p>

                <div className={"pl-2.5"}>
                  <Swiper
                    slidesPerView={2.5}
                    spaceBetween={6}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    speed={1500}
                    modules={[Autoplay]}
                    grabCursor={true}
                    breakpoints={{
                      1024: {
                        spaceBetween: 10,
                      },
                    }}
                  >
                    {!!swiper_items?.length &&
                      swiper_items.map(
                        ({
                          id,
                          item_name,
                          image,
                          caption,
                          price,
                          min_cal_value,
                          max_cal_value,
                        }) =>
                          (
                            <SwiperSlide key={id} className={"!w-fit"}>
                              <div
                                className={
                                  "flex flex-col items-start gap-1 w-[88px] lg:w-[120px]"
                                }
                              >
                                <ImageWrapper
                                  valuesSwitched={valuesSwitched}
                                  itemImageSrc={image}
                                  itemImageAlt={caption}
                                  isHorizontalSwiperItem={true}
                                />

                                <div
                                  className={
                                    "flex flex-col items-start gap-0.5 w-full"
                                  }
                                >
                                  <p
                                    className={
                                      "text-[10px] text-white text-start font-fancy font-bold lg:text-xs"
                                    }
                                  >
                                    {item_name}
                                  </p>

                                  <div
                                    className={"flex items-center gap-1 w-full"}
                                  >
                                    <p
                                      className={
                                        "text-[8px] text-white text-start font-fancy lg:text-[10px]"
                                      }
                                    >
                                      ${price.toFixed(2)}
                                    </p>

                                    <div
                                      className={
                                        "w-0.5 h-0.5 bg-white rounded-full lg:w-[3px] lg:h-[3px]"
                                      }
                                    ></div>

                                    <p
                                      className={
                                        "text-[8px] text-[#888888] text-start font-fancy lg:text-[10px]"
                                      }
                                    >
                                      {min_cal_value +
                                        `${!!max_cal_value ? ` - ${max_cal_value}` : ""}`}{" "}
                                      Cal.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          ) as ReactNode,
                      )}
                  </Swiper>
                </div>
              </div>

              <div className={"flex flex-col items-start gap-2 px-2.5 w-full"}>
                <p
                  className={
                    "text-white font-fancy text-xs !leading-none text-start whitespace-nowrap lg:text-base"
                  }
                >
                  {items_list_title}
                </p>

                <div className={"flex flex-col w-full"}>
                  <Swiper
                    direction={"vertical"}
                    spaceBetween={0}
                    slidesPerView={3}
                    grabCursor={true}
                    className={"!h-[400px] w-full lg:!h-[460px]"}
                  >
                    {!!product_list_items?.length &&
                      product_list_items.map(
                        (
                          {
                            id,
                            item_name,
                            price,
                            image,
                            caption,
                            max_cal_value,
                            min_cal_value,
                            description,
                          },
                          index,
                        ) =>
                          (
                            <SwiperSlide
                              key={id}
                              className={`${index !== product_list_items.length - 1 ? "border-b border-solid border-[#2C2C2C]" : ""} py-1.5 w-full !h-fit lg:py-2.5`}
                            >
                              <div
                                className={"flex items-start gap-3.5 w-full"}
                              >
                                <div
                                  className={
                                    "flex flex-col items-start gap-0.5"
                                  }
                                >
                                  <p
                                    className={
                                      "text-[8px] text-white text-start font-fancy font-bold lg:text-[11px]"
                                    }
                                  >
                                    {item_name}
                                  </p>

                                  <div
                                    className={
                                      "flex flex-col items-start gap-1 w-full"
                                    }
                                  >
                                    <div
                                      className={
                                        "flex items-center gap-1 w-full"
                                      }
                                    >
                                      <p
                                        className={
                                          "text-[6px] text-white text-start font-fancy lg:text-[9px]"
                                        }
                                      >
                                        ${price.toFixed(2)}
                                      </p>

                                      <div
                                        className={
                                          "w-0.5 h-0.5 bg-white rounded-full lg:w-[3px] lg:h-[3px]"
                                        }
                                      ></div>

                                      <p
                                        className={
                                          "text-[6px] text-[#888888] text-start font-fancy lg:text-[9px]"
                                        }
                                      >
                                        {min_cal_value +
                                          `${!!max_cal_value ? ` - ${max_cal_value}` : ""}`}{" "}
                                        Cal.
                                      </p>
                                    </div>
                                  </div>

                                  <p
                                    className={
                                      "text-[6px] !leading-tight text-[#888888] text-start font-fancy lg:text-[9px]"
                                    }
                                  >
                                    {description}
                                  </p>
                                </div>

                                <ImageWrapper
                                  valuesSwitched={valuesSwitched}
                                  itemImageSrc={image}
                                  itemImageAlt={caption}
                                />
                              </div>
                            </SwiperSlide>
                          ) as ReactNode,
                      )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
