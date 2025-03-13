"use client";

import { ElementsContainer, Phone } from "./components";
import { useEffect, useRef, useState } from "react";

export const Before = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const afterButtonRef = useRef<HTMLDivElement>(null);
  const [isBeforeActive, setBeforeActive] = useState<boolean>(true);
  const [valuesSwitched, setValuesSwitched] = useState<boolean>(false);
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);

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
              Difference in Revenue
            </h2>

            <div className="flex flex-col items-center gap-5 w-full h-full md:gap-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 xl:gap-11">
              <div className="w-full h-auto lg:h-full lg:max-w-[370px] xl:max-w-[450px]">
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
                      Get inspired by these beautiful, modern websites launched
                      with PlateLab.
                    </p>
                  </div>

                  <div className={"w-full lg:grid lg:grid-cols-2 lg:gap-2"}>
                    <ElementsContainer
                      isBlockAfter={false}
                      activeCondition={isBeforeActive}
                    />

                    <ElementsContainer
                      isBlockAfter={true}
                      activeCondition={!isBeforeActive}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full h-full">
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
