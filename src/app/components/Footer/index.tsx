"use client";

import styles from "./Footer.module.css";
import { NetworkItem, FooterLink, RunningLine, FooterInfo } from "./components";
import { usePathname } from "next/navigation";
import { ROUTING, INetwork, useFetchAllNetworksQuery } from "./model";
import { useEffect, useState } from "react";

export const Footer = () => {
  const pathname = usePathname();
  const [isMainPage, setIsMainPage] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMainPage(pathname === "/");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  const { data } = useFetchAllNetworksQuery();

  const networks: INetwork[] = data || [];

  return (
    <footer
      // className={`overflow-hidden min-h-96 w-full h-screen ${styles.footer}`}
      className={`overflow-hidden min-h-96 w-full h-screen ${isMainPage ? "absolute bottom-0 bg-white" : `${styles.footer}`}`}
    >
      <div
        className={`flex flex-col items-center py-[35px] w-full h-full ${isMainPage ? "bg-white justify-between" : `${styles.footerBg}`}`}
      >
        <RunningLine isMainPage={isMainPage} />

        <div className={`flex items-center h-full max-w-limitation w-full`}>
          <div
            className={
              "flex flex-col-reverse justify-between items-start gap-6 w-full pt-10 px-5 sm:px-6 md:px-8 lg:px-10 lg:flex-row"
            }
          >
            <div
              className={"flex flex-col items-end gap-2.5 w-full md:flex-row"}
            >
              <div
                className={`${isMainPage ? "border border-solid border-[#a0a0a033] bg-white" : "bg-[#ffffff0d]"} rounded-lg min-w-64 w-full md:max-w-[284px] xl:min-w-[284px]`}
              >
                <div
                  className={
                    "px-6 py-6 w-full sm:py-7 md:py-8 lg:py-9 xl:py-10"
                  }
                >
                  <div
                    className={
                      "grid grid-cols-2 gap-x-6 gap-y-10 gap- w-full md:flex md:flex-col md:items-start md:gap-[42.75px]"
                    }
                  >
                    {ROUTING.map(({ id, name, hoverText, link }) => (
                      <FooterLink
                        key={id}
                        href={link}
                        name={name}
                        hoverText={hoverText}
                        isMainPage={isMainPage}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`min-w-64 w-full md:max-w-[301px] xl:min-w-[301px]`}
              >
                <div className={"flex flex-col gap-2.5 w-full"}>
                  {networks &&
                    networks.map(
                      ({
                        id,
                        name,
                        link,
                        image_icon_light,
                        image_icon_dark,
                      }) => (
                        <NetworkItem
                          key={id}
                          name={name}
                          link={link}
                          image_icon_dark={image_icon_dark}
                          image_icon_light={image_icon_light}
                          isMainPage={isMainPage}
                          iconSize={24}
                          isAboutPage={false}
                        />
                      ),
                    )}
                </div>
              </div>
            </div>

            <FooterInfo isMainPage={isMainPage} />
          </div>
        </div>
      </div>
    </footer>
  );
};
