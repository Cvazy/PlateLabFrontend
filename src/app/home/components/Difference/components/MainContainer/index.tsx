"use client";

import {
  ComparisonBlock,
  DesktopElement,
  NoDifferenceTitle,
  PhotosDifference,
} from "./components";
import { useFetchAllComparisonQuery } from "@/app/home";
import { ITransformComparisons } from "../../model";
import { transformData } from "../../utils";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { DecryptedText } from "@/app/ReactBitsComponents";
import { motion } from "framer-motion";

export const MainContainer = () => {
  const { data } = useFetchAllComparisonQuery();

  const comparisons: ITransformComparisons[] = useMemo(
    () => transformData(data || []),
    [data],
  );

  const [currentElement, setCurrentElement] = useState<number>(0);
  const [shiftPercentage, setShiftPercentage] = useState<number>(50);
  const [selectedComparison, setSelectedComparison] =
    useState<ITransformComparisons | null>(null);
  const [hasMoved, setHasMoved] = useState(false);

  const [mainOpacity, setMainOpacity] = useState<number>(0);

  const [currentLogo, setCurrentLogo] = useState<string>(
    "/images/plateLabDifference.svg",
  );
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleOpacityChange = (): void => {
    setMainOpacity(100);
  };

  const handleSliderMove = (percentage: number) => {
    setShiftPercentage(percentage);
    if (!hasMoved) {
      setHasMoved(true);
    }
  };

  useEffect(() => {
    if (comparisons.length > 1) {
      setSelectedComparison(
        shiftPercentage <= 50 ? comparisons[1] : comparisons[0],
      );
    }
  }, [shiftPercentage, comparisons]);

  useEffect(() => {
    setCurrentElement(() => {
      if (isMobile) {
        if (
          (shiftPercentage < 50 && shiftPercentage >= 25) ||
          (shiftPercentage >= 50 && shiftPercentage < 75)
        ) {
          return 0;
        } else if (
          (shiftPercentage >= 0 && shiftPercentage < 25) ||
          (shiftPercentage >= 75 && shiftPercentage <= 100)
        ) {
          return 1;
        }
      } else {
        if (
          (shiftPercentage < 50 && shiftPercentage >= 35) ||
          (shiftPercentage >= 50 && shiftPercentage < 65)
        ) {
          return 0;
        } else if (
          (shiftPercentage >= 15 && shiftPercentage < 35) ||
          (shiftPercentage >= 65 && shiftPercentage < 85)
        ) {
          return 1;
        } else {
          return 2;
        }
      }

      return 0;
    });
  }, [shiftPercentage, isMobile]);

  useEffect(() => {
    if (isAnimating) return;

    const newLogo =
      shiftPercentage > 50
        ? "/images/photoDifference.svg"
        : "/images/plateLabDifference.svg";

    if (newLogo !== currentLogo) {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentLogo(newLogo);
        setIsAnimating(false);
      }, 500);
    }
  }, [shiftPercentage, currentLogo, isAnimating]);

  return (
    <div className="w-full">
      <div className={"flex flex-col items-center gap-6 w-full"}>
        <div className={"flex flex-col items-center gap-4 lg:gap-0"}>
          <div
            className={"flex items-center gap-2.5 flex-nowrap"}
            style={{ opacity: isMobile ? 1 : mainOpacity }}
          >
            <motion.div
              key={currentLogo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                width={31}
                height={31}
                src={currentLogo}
                alt={shiftPercentage > 50 ? "Real Photo" : "PlateLab"}
              />
            </motion.div>

            <DecryptedText
              text={shiftPercentage > 50 ? "Real Photo" : "PlateLab"}
              speed={50}
              animateOn={"view"}
              revealDirection="end"
              className={"text-[32px] leading-10 text-white whitespace-nowrap"}
              parentClassName={
                "text-[32px] leading-10 text-white whitespace-nowrap"
              }
              encryptedClassName={
                "text-[32px] leading-10 text-white whitespace-nowrap"
              }
              triggerAnimation={isAnimating}
            />
          </div>

          <div className={"w-full lg:hidden"}>
            {!hasMoved ? (
              <NoDifferenceTitle />
            ) : (
              selectedComparison && (
                <ComparisonBlock
                  isAIBlock={shiftPercentage <= 50}
                  data={{
                    ...selectedComparison,
                    elements: [
                      {
                        name:
                          selectedComparison.elements?.[currentElement]?.name ||
                          "",
                        value:
                          selectedComparison.elements?.[currentElement]
                            ?.value || "",
                      },
                    ],
                  }}
                />
              )
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-11 w-full lg:flex-row lg:justify-evenly lg:gap-1 lg:items-start">
          <div
            style={{ opacity: mainOpacity, transition: "opacity 0.5s ease" }}
            className="hidden self-center justify-end w-1/4 lg:flex"
          >
            <DesktopElement
              name={
                comparisons[shiftPercentage <= 50 ? 1 : 0]?.elements[0]?.name ||
                ""
              }
              value={
                comparisons[shiftPercentage <= 50 ? 1 : 0]?.elements[0]
                  ?.value || ""
              }
              isAIBlock={shiftPercentage <= 50}
            />
          </div>

          <PhotosDifference
            onOpacityChange={handleOpacityChange}
            handleSliderMove={handleSliderMove}
            DefaultPhotoPath={
              comparisons.length > 0 ? comparisons[0].photo_for_difference : ""
            }
            AIPhotoPath={
              comparisons.length > 0 ? comparisons[1].photo_for_difference : ""
            }
          />

          <div
            style={{ opacity: mainOpacity, transition: "opacity 0.5s ease" }}
            className="hidden self-center flex-col items-start gap-20 w-1/4 lg:flex xl:gap-[220px]"
          >
            <DesktopElement
              name={
                comparisons[shiftPercentage <= 50 ? 1 : 0]?.elements[1]?.name ||
                ""
              }
              value={
                comparisons[shiftPercentage <= 50 ? 1 : 0]?.elements[1]
                  ?.value || ""
              }
              isAIBlock={shiftPercentage <= 50}
            />

            <DesktopElement
              name={
                comparisons[shiftPercentage <= 50 ? 1 : 0]?.elements[2]?.name ||
                ""
              }
              value={
                comparisons[shiftPercentage <= 50 ? 1 : 0]?.elements[2]
                  ?.value || ""
              }
              isAIBlock={shiftPercentage <= 50}
            />
          </div>
        </div>

        <div style={{ opacity: mainOpacity }} className={"hidden lg:block"}>
          <NoDifferenceTitle />
        </div>
      </div>
    </div>
  );
};
