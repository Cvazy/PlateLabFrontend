"use client";

import { ContactButton, Logo, NavItem, MobileMenu } from "./components";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`flex justify-center items-center w-full border-b border-solid border-gray z-50 h-20 absolute ${isMobileMenuOpen ? "bg-black" : ""}`}
    >
      <div
        className={
          "flex items-center justify-center px-5 sm:px-6 md:px-8 w-full h-full lg:px-10"
        }
      >
        <div className={"max-w-limitation w-full"}>
          <div className={"py-[19.5px] w-full"}>
            <div className={"flex justify-between gap-5 w-full"}>
              <div
                className={"w-fit h-full"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Logo />
              </div>

              <div
                className={
                  "flex items-center flex-nowrap gap-[30px] sm:gap-5 md:gap-10 lg:gap-[60px]"
                }
              >
                <div className={"hidden p-1 sm:block"}>
                  <div className={"flex items-center gap-1 flex-nowrap"}>
                    <NavItem link={"/about"} name={"About"} widget={false} />

                    <NavItem
                      link={"/pricing"}
                      name={"Pricing"}
                      widget={false}
                    />

                    <NavItem link={"/cases"} name={"Cases"} widget={true} />
                  </div>
                </div>

                <div
                  className={"w-fit h-full"}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ContactButton />
                </div>

                <div
                  role={"button"}
                  className={"block sm:hidden"}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <Image
                      width={21}
                      height={21}
                      src={"/images/close.svg"}
                      alt={"Close"}
                      loading={"lazy"}
                    />
                  ) : (
                    <Image
                      width={29}
                      height={29}
                      src={"/images/menu.svg"}
                      alt={"Menu"}
                      loading={"lazy"}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </header>
  );
};
