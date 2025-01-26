"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import {
  Banner,
  IBanner,
  PartnersList,
  useFetchAllBannersQuery,
} from "@/app/home";
import { Loader } from "@/app/components";
import { ReactNode } from "react";
import { serverUrl } from "@/app/constants";

export const MainSwiper = () => {
  const { data, isLoading } = useFetchAllBannersQuery();

  const banners: IBanner[] = data || [];

  if (isLoading) return <Loader />;

  return (
    <div className={"relative h-screen w-screen"}>
      <div className={"h-screen w-screen"}>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={"main_swiper"}
        >
          {banners &&
            banners.map(
              ({ id, description, image }) =>
                (
                  <SwiperSlide key={id} className={"!w-screen"}>
                    <div className={"relative h-screen w-screen"}>
                      <div
                        className={
                          "bg-cover bg-center bg-no-repeat w-full h-full"
                        }
                        style={{
                          backgroundImage: `url('${serverUrl + image}')`,
                        }}
                      ></div>

                      <div
                        className={
                          "absolute top-0 left-0 bg-gradient-to-tl from-[#000000fa] via-[#05050563] to-[#050505f0] w-full h-full"
                        }
                      ></div>

                      <div
                        className={
                          "absolute top-0 left-0 bg-gradient-to-tr from-[#05050575] via-[#05050563] to-[#050505f0] w-full h-full"
                        }
                      ></div>
                    </div>
                  </SwiperSlide>
                ) as ReactNode,
            )}
        </Swiper>
      </div>

      <Banner />

      <PartnersList />
    </div>
  );
};
