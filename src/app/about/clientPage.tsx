"use client";

import { NetworkItem } from "@/app/components";
import { AboutInfo, AboutImage } from "./components";
import {
  INetwork,
  useFetchAllNetworksQuery,
} from "@/app/components/Footer/model";
import Image from "next/image";

export const ClientAboutUsPage = () => {
  const { data, isLoading, isError } = useFetchAllNetworksQuery();

  const networks: INetwork[] = data || [];

  return (
    <>
      {isError && (
        <p
          className={
            "text-center font-fancy text-red text-lg w-full sm:text-xl md:text-2xl lg:text-3xl"
          }
        >
          An error occurred during the request. Try to reload the page or come
          back later.
        </p>
      )}

      <div className={"flex flex-col gap-2.5 w-full lg:grid lg:grid-cols-2"}>
        <div className={"flex flex-col gap-2.5 w-full"}>
          <AboutInfo />

          {!isLoading && (
            // Элемент для статичной сборки приложения
            // <img
            //   width={675}
            //   height={412}
            //   src={"https://plate-lab.ru/images/map.jpg"}
            //   alt={"About Map"}
            //   className={"w-full h-full rounded-lg select-none"}
            //   loading={"lazy"}
            // />

            <Image
              width={675}
              height={412}
              src={"/images/map.jpg"}
              alt={"About Map"}
              className={"w-full h-full rounded-lg select-none"}
              loading={"lazy"}
            />
          )}
        </div>

        <div className={"flex flex-col gap-2.5 w-full"}>
          <AboutImage />

          <div className={"grid grid-cols-3 gap-2.5 w-full"}>
            {networks &&
              networks.map(
                ({ id, name, link, image_icon_light, image_icon_dark }) => (
                  <NetworkItem
                    key={id}
                    name={name}
                    link={link}
                    image_icon_dark={image_icon_dark}
                    image_icon_light={image_icon_light}
                    isMainPage={false}
                    iconSize={60}
                    isAboutPage={true}
                  />
                ),
              )}
          </div>
        </div>
      </div>
    </>
  );
};
