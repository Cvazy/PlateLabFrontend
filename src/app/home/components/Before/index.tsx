"use client";

import { ElementsContainer, Phone } from "./components";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Before = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const afterButtonRef = useRef<HTMLDivElement>(null);
  const [isBeforeActive, setBeforeActive] = useState<boolean>(true);
  const [valuesSwitched, setValuesSwitched] = useState<boolean>(false);
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [showElementsContainer, setShowElementsContainer] =
    useState<boolean>(false);

  useEffect(() => {
    if (!isBeforeActive) {
      setShowArrows(true);
      setTimeout(() => {
        setShowElementsContainer(true);
      }, 200);
    } else {
      setShowElementsContainer(false);
      setTimeout(() => {
        setShowArrows(false);
      }, 200);
    }
  }, [isBeforeActive]);

  const handleBeforeActive = () => {
    setValuesSwitched(false);
    setBeforeActive(true);
  };

  const handleAfterActive = () => {
    setValuesSwitched(true);
    setBeforeActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !afterButtonRef.current || isButtonClick)
        return;

      const container = sectionRef.current;
      const rect = container.getBoundingClientRect();

      if (rect.top <= 0) {
        afterButtonRef.current.click();
        setIsButtonClick(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isButtonClick]);

  return (
    <div
      ref={sectionRef}
      className="flex justify-center overflow-hidden w-full"
    >
      <div className="flex justify-center px-5 py-8 w-full h-full sm:py-10 sm:px-6 md:py-14 md:px-8 lg:py-20 lg:px-10">
        <div className="max-w-limitation w-full h-full">
          <div
            className={
              "flex flex-col items-center gap-14 w-full sm:gap-16 md:gap-20 lg:gap-24"
            }
          >
            <h2
              className={
                "text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px]"
              }
            >
              Difference in Revenue.
            </h2>

            <div className="flex flex-col items-center gap-5 w-full h-full md:gap-10 lg:flex-row lg:justify-center lg:items-start lg:gap-8 xl:gap-11">
              <div className="w-full h-auto lg:h-full lg:max-w-[370px]">
                <div className="flex flex-col items-start gap-6 w-full sm:gap-7 md:gap-8 lg:gap-16 xl:gap-[71px]">
                  <div className="flex flex-col items-start gap-0 w-full lg:gap-4">
                    <div
                      className={
                        "flex gap-8 justify-center items-center w-full lg:grid lg:grid-cols-2 lg:gap-0"
                      }
                    >
                      <div
                        role={"button"}
                        onClick={handleBeforeActive}
                        className={"w-fit lg:w-full"}
                      >
                        <div className={"relative nav_link_click w-fit"}>
                          <p
                            className={`text-left w-fit text-2xl ${isBeforeActive ? "text-white" : "text-gray"} !leading-none sm:text-[26px] md:text-3xl lg:text-[32px] xl:text-4xl`}
                          >
                            Before
                          </p>

                          <div
                            className={
                              "nav_link_line !left-0 !w-full !-bottom-1"
                            }
                            style={{
                              transform: `scaleX(${isBeforeActive ? 1 : 0})`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div
                        role={"button"}
                        ref={afterButtonRef}
                        onClick={handleAfterActive}
                        className={"w-fit lg:w-full"}
                      >
                        <div className={"relative nav_link_click w-fit"}>
                          <p
                            className={`text-left w-fit text-2xl ${!isBeforeActive ? "text-white" : "text-gray"} !leading-none sm:text-[26px] md:text-3xl lg:text-[32px] xl:text-4xl`}
                          >
                            After
                          </p>

                          <div
                            className={
                              "nav_link_line !left-0 !w-full !-bottom-1"
                            }
                            style={{
                              transform: `scaleX(${isBeforeActive ? 0 : 1})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <p className="text-left text-light_gray text-[13px] !leading-5 font-fancy hidden sm:text-[15px] lg:block">
                      Upgrade your restaurant’s digital presence and watch your
                      sales soar.
                    </p>
                  </div>

                  <div
                    className={
                      "flex flex-col items-start gap-5 w-full sm:gap-6 md:gap-7 lg:gap-8"
                    }
                  >
                    <div className={"w-full lg:flex lg:gap-2"}>
                      <ElementsContainer
                        isBlockAfter={false}
                        activeCondition={isBeforeActive}
                      />

                      <div
                        className={`hidden w-[5.5rem] lg:!flex lg:flex-col lg:justify-around lg:items-start lg:gap-8`}
                        style={{
                          opacity: showArrows ? 1 : 0,
                          transition: "opacity 0.5s",
                        }}
                      >
                        <div
                          className={"flex items-center justify-center w-full"}
                        >
                          <Image
                            src={"/images/before_arrow.svg"}
                            alt={"Before Arrow Icon"}
                            width={21}
                            height={36}
                          />
                        </div>

                        <div
                          className={"flex items-center justify-center w-full"}
                        >
                          <Image
                            src={"/images/before_arrow.svg"}
                            alt={"Before Arrow Icon"}
                            width={21}
                            height={36}
                          />
                        </div>

                        <div
                          className={"flex items-center justify-center w-full"}
                        >
                          <Image
                            src={"/images/before_arrow.svg"}
                            alt={"Before Arrow Icon"}
                            width={21}
                            height={36}
                          />
                        </div>
                      </div>

                      <div
                        style={{
                          opacity: showElementsContainer ? 1 : 0,
                          transition: "opacity 0.5s",
                        }}
                      >
                        <ElementsContainer
                          isBlockAfter={true}
                          activeCondition={showElementsContainer}
                        />
                      </div>
                    </div>

                    <p className="text-left text-[#575757] text-[13px] !leading-5 font-fancy hidden sm:text-[15px] lg:block">
                      *Average Monthly Revenue
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-fit h-full">
                <div className="flex justify-center w-full relative">
                  <Phone valuesSwitched={valuesSwitched} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
