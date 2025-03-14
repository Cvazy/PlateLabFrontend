import {
  ComparisonBlock,
  DesktopElement,
  PhotosDifference,
} from "./components";
import { useFetchAllComparisonQuery } from "@/app/home";
import { ITransformComparisons } from "../../model";
import { transformData } from "../../utils";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "./MainContainer.module.css";
import { DecryptedText } from "@/app/ReactBitsComponents";

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

  const [mainOpacity, setMainOpacity] = useState<number>(0);

  const [currentLogo, setCurrentLogo] = useState<string>(
    "/images/plateLabDifference.svg",
  );
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleOpacityChange = (): void => {
    setMainOpacity(100);
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
    });
  }, [shiftPercentage]);

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
        <div
          className={"hidden items-center gap-2.5 flex-nowrap lg:flex"}
          style={{ opacity: mainOpacity }}
        >
          <div
            className={
              "flex justify-center w-[31px] h-[31px] relative overflow-hidden"
            }
          >
            <div
              className={`absolute w-[31px] h-[31px] transition-transform duration-500 ${
                isAnimating ? styles.animateSlideOut : ""
              }`}
            >
              <Image
                width={31}
                height={31}
                src={currentLogo}
                alt={shiftPercentage > 50 ? "Real Photo" : "PlateLab"}
              />
            </div>

            {isAnimating && (
              <div
                className={`absolute w-[31px] h-[31px] transition-transform duration-500 ${styles.animateSlideIn}`}
              >
                <Image
                  width={31}
                  height={31}
                  src={
                    shiftPercentage > 50
                      ? "/images/photoDifference.svg"
                      : "/images/plateLabDifference.svg"
                  }
                  alt={shiftPercentage > 50 ? "Real Photo" : "PlateLab"}
                />
              </div>
            )}
          </div>

          <DecryptedText
            text={shiftPercentage > 50 ? "Real Photo" : "PlateLab"}
            speed={50}
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
            setShiftPercentage={setShiftPercentage}
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

          {selectedComparison && selectedComparison?.title?.length > 0 && (
            <div className="block lg:hidden">
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
                        selectedComparison.elements?.[currentElement]?.value ||
                        "",
                    },
                  ],
                }}
              />
            </div>
          )}
        </div>

        <div style={{ opacity: mainOpacity }} className={"hidden lg:block"}>
          <p
            className={
              "text-light_gray font-fancy text-center tracking-[-0.0125em] text-xl xl:text-[22px]"
            }
          >
            No difference in realism—just in{" "}
            <span className="text-red">price.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
