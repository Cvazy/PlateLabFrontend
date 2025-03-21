"use client";

import { Content, HeadBlock } from "./components";
import {
  IProductListItem,
  IRestaurant,
  ISwiperElement,
  useFetchBeforeRestaurantQuery,
} from "@/app/home";
import React from "react";

export const Phone = React.memo(
  ({ valuesSwitched }: { valuesSwitched: boolean }) => {
    const { data } = useFetchBeforeRestaurantQuery();

    const restaurant: IRestaurant[] = data || [];

    const {
      name = "",
      swiper_title = "",
      items_list_title = "",
      swiper_items = [] as ISwiperElement[],
      product_list_items = [] as IProductListItem[],
    } = restaurant[0] || {};

    return (
      <div
        className={
          "relative z-10 w-[290px] h-[600px] lg:w-[420px] lg:h-[870px]"
        }
      >
        <div className={"relative p-2 w-full h-full"}>
          <div
            className={
              "absolute top-[108px] left-[5px] bg-[#5C5C5C] w-[3px] h-10 rounded-l-md lg:top-[150px] lg:h-14 lg:w-[5px]"
            }
          ></div>

          <div
            className={
              "absolute top-40 left-[5px] bg-[#5C5C5C] w-[3px] h-10 rounded-l-md lg:top-[228px] lg:h-14 lg:w-[5px]"
            }
          ></div>

          <div
            className={
              "absolute top-32 right-[5px] bg-[#5C5C5C] w-[3px] h-16 rounded-r-md lg:h-24 lg:w-[5px] lg:top-44"
            }
          ></div>

          <div
            className={
              "relative border-[9px] overflow-hidden border-dark_gray rounded-[3rem] w-full h-full lg:border-[12px] lg:rounded-[5.25rem]"
            }
          >
            <div
              className={
                "absolute flex justify-center bottom-0 right-0 left-0 w-full"
              }
            >
              <div
                className={
                  "bg-white h-[3px] w-[100px] rounded-t-lg lg:w-36 lg:h-[5px] lg:rounded-t-xl"
                }
              ></div>
            </div>

            <div className={"flex flex-col w-full h-full"}>
              <HeadBlock restaurant_name={name} />

              <Content
                swiper_title={swiper_title}
                swiper_items={swiper_items}
                items_list_title={items_list_title}
                product_list_items={product_list_items}
                valuesSwitched={valuesSwitched}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);
