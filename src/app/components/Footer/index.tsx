"use client";

import Image from "next/image";
import { NetworkItem, FooterLink, RunningLine } from "./components";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <footer
      className={`overflow-hidden w-full ${isMainPage ? "bg-white" : "footer"}`}
    >
      <div
        className={`flex flex-col items-center py-[35px] w-full ${isMainPage ? "bg-white" : "footer_bg"}`}
      >
        <RunningLine isMainPage={isMainPage} />

        <div className={`max-w-limitation w-full`}>
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
                    <FooterLink
                      href={"/"}
                      name={"Main"}
                      isMainPage={isMainPage}
                    />

                    <FooterLink
                      href={"/about"}
                      name={"About"}
                      isMainPage={isMainPage}
                    />

                    <FooterLink
                      href={"/pricing"}
                      name={"Pricing"}
                      isMainPage={isMainPage}
                    />

                    <FooterLink
                      href={"/cases"}
                      name={"Cases"}
                      isMainPage={isMainPage}
                    />

                    <FooterLink
                      href={"/contact"}
                      name={"Contact"}
                      isMainPage={isMainPage}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${isMainPage ? "border border-solid border-[#a0a0a033]" : ""} min-w-64 w-full md:max-w-[301px] xl:min-w-[301px]`}
              >
                <div className={"flex flex-col gap-2.5 w-full"}>
                  <NetworkItem
                    icon={
                      <svg
                        width="27"
                        height="24"
                        viewBox="0 0 27 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.34921 19.3743C8.40246 19.2764 8.45355 19.1777 8.50243 19.0782L8.95711 18.1529L8.01828 17.7267C6.4537 17.0164 5.19185 16.0266 4.33104 14.8777C3.47327 13.7329 3.04112 12.4691 3.03857 11.2073C3.03891 9.27578 4.05102 7.34501 5.99817 5.8706C7.95128 4.39169 10.6464 3.53224 13.4964 3.53223C16.3463 3.53224 19.0414 4.39169 20.9945 5.8706C22.942 7.34525 23.9541 9.27639 23.9541 11.2082C23.9541 13.14 22.942 15.0711 20.9945 16.5458C19.0415 18.0246 16.3465 18.8841 13.4966 18.8841C12.4714 18.8825 11.4534 18.7694 10.4744 18.5491L10.0827 18.461L9.73871 18.6683C9.30137 18.9319 8.83659 19.168 8.34921 19.3743Z"
                          fill={isMainPage ? "black" : "white"}
                          stroke={isMainPage ? "black" : "white"}
                          strokeWidth="2"
                        />
                      </svg>
                    }
                    name={"IMessage"}
                    url={"#"}
                    isMainPage={isMainPage}
                  />

                  <NetworkItem
                    icon={
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_748_9556)">
                          <path
                            d="M19.6382 4.91C17.7682 3.03 15.2782 2 12.6282 2C7.16818 2 2.71818 6.45 2.71818 11.91C2.71818 13.66 3.17818 15.36 4.03818 16.86L2.63818 22L7.88818 20.62C9.33818 21.41 10.9682 21.83 12.6282 21.83C18.0882 21.83 22.5382 17.38 22.5382 11.92C22.5382 9.27 21.5082 6.78 19.6382 4.91ZM12.6282 20.15C11.1482 20.15 9.69818 19.75 8.42818 19L8.12818 18.82L5.00818 19.64L5.83818 16.6L5.63818 16.29C4.81818 14.98 4.37818 13.46 4.37818 11.91C4.37818 7.37 8.07818 3.67 12.6182 3.67C14.8182 3.67 16.8882 4.53 18.4382 6.09C19.9982 7.65 20.8482 9.72 20.8482 11.92C20.8682 16.46 17.1682 20.15 12.6282 20.15ZM17.1482 13.99C16.8982 13.87 15.6782 13.27 15.4582 13.18C15.2282 13.1 15.0682 13.06 14.8982 13.3C14.7282 13.55 14.2582 14.11 14.1182 14.27C13.9782 14.44 13.8282 14.46 13.5782 14.33C13.3282 14.21 12.5282 13.94 11.5882 13.1C10.8482 12.44 10.3582 11.63 10.2082 11.38C10.0682 11.13 10.1882 11 10.3182 10.87C10.4282 10.76 10.5682 10.58 10.6882 10.44C10.8082 10.3 10.8582 10.19 10.9382 10.03C11.0182 9.86 10.9782 9.72 10.9182 9.6C10.8582 9.48 10.3582 8.26 10.1582 7.76C9.95818 7.28 9.74818 7.34 9.59818 7.33C9.44818 7.33 9.28818 7.33 9.11818 7.33C8.94818 7.33 8.68818 7.39 8.45818 7.64C8.23818 7.89 7.59818 8.49 7.59818 9.71C7.59818 10.93 8.48818 12.11 8.60818 12.27C8.72818 12.44 10.3582 14.94 12.8382 16.01C13.4282 16.27 13.8882 16.42 14.2482 16.53C14.8382 16.72 15.3782 16.69 15.8082 16.63C16.2882 16.56 17.2782 16.03 17.4782 15.45C17.6882 14.87 17.6882 14.38 17.6182 14.27C17.5482 14.16 17.3982 14.11 17.1482 13.99Z"
                            fill={isMainPage ? "black" : "white"}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_748_9556">
                            <rect
                              width="24"
                              height="24"
                              fill={isMainPage ? "black" : "white"}
                              transform="translate(0.588379)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    name={"WhatsApp"}
                    url={"https://api.whatsapp.com/"}
                    isMainPage={isMainPage}
                  />

                  <NetworkItem
                    icon={
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.62684 4.38477C3.3127 4.38696 3.00169 4.44751 2.70963 4.56325L11.8136 11.573C11.8915 11.6329 11.9869 11.6654 12.0851 11.6654C12.1833 11.6654 12.2787 11.633 12.3566 11.5731L21.4671 4.56325C21.1751 4.44751 20.8641 4.387 20.5499 4.38477H3.62684ZM1.41064 5.69862C1.20149 6.07304 1.09063 6.49436 1.08838 6.92323V16.0227L7.1667 10.5519C7.19779 10.5239 7.22234 10.4894 7.23861 10.4509C7.25489 10.4123 7.26249 10.3707 7.26087 10.3289C7.25925 10.2871 7.24846 10.2462 7.22926 10.209C7.21005 10.1718 7.18291 10.1393 7.14975 10.1138L1.41064 5.69862ZM17.0117 10.5519L23.0884 16.0227V6.92323C23.0861 6.49436 23.0137 6.12753 22.7661 5.69862L17.0286 10.1138C16.9954 10.1393 16.9683 10.1718 16.9491 10.209C16.9299 10.2461 16.9191 10.2871 16.9175 10.3289C16.9158 10.3707 16.9234 10.4123 16.9397 10.4509C16.956 10.4894 16.9806 10.5239 17.0117 10.5519ZM8.53019 11.6014L1.32305 18.0918C1.72326 19.0096 2.6256 19.6064 3.62684 19.6155H20.5499C21.5511 19.6066 22.4535 19.0096 22.8537 18.0918L15.6466 11.6014C15.5751 11.537 15.4834 11.4997 15.3872 11.496C15.2911 11.4922 15.1968 11.5223 15.1205 11.5809L12.604 13.5171C12.3 13.7508 11.8768 13.7508 11.5727 13.5171L9.05624 11.581C8.97999 11.5224 8.88562 11.4923 8.78951 11.4961C8.6934 11.4998 8.60164 11.537 8.53019 11.6014Z"
                          fill={isMainPage ? "black" : "white"}
                        />
                      </svg>
                    }
                    name={"info@platelab.com"}
                    url={"mailto:info@platelab.com"}
                    isMainPage={isMainPage}
                  />
                </div>
              </div>
            </div>

            <div className={"flex flex-col items-start gap-5 max-w-md w-full"}>
              <p
                className={`text-[32px] ${isMainPage ? "text-black" : "text-white"} font-medium !leading-none md:text-4xl lg:text-5xl xl:text-[54px]`}
              >
                AI Photography for restaurants
              </p>

              <p
                className={`text-[15px] ${isMainPage ? "text-light_gray" : "text-gray"} uppercase !leading-none md:text-base`}
              >
                HELPING STARTUPS AND BUSINESSES LAUNCH <br />
                DIGITAL PRODUCTS ON TIME WITH NO PAIN <br />
                ©2011 - 2024 PLATELAB
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
