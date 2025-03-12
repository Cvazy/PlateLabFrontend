import { ComparisonBlock, PhotosDifference } from "./components";
import { useFetchAllComparisonQuery } from "@/app/home";
import { ITransformComparisons } from "../../model";
import { transformData } from "../../utils";
import { useState, useEffect, useMemo } from "react";

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

  const [leftOpacity, setLeftOpacity] = useState<number>(0);
  const [rightOpacity, setRightOpacity] = useState<number>(0);

  const handleOpacityChange = (left: number, right: number): void => {
    setLeftOpacity(left);
    setRightOpacity(right);
  };

  useEffect(() => {
    if (comparisons.length > 1) {
      setSelectedComparison(
        shiftPercentage >= 50 ? comparisons[1] : comparisons[0],
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

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-11 w-full lg:flex-row lg:justify-between lg:items-start">
        <div className="hidden lg:block">
          <ComparisonBlock
            isAIBlock={false}
            data={comparisons[0]}
            style={{ opacity: leftOpacity }}
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

        <div className="hidden lg:block">
          <ComparisonBlock
            isAIBlock={true}
            data={comparisons[1]}
            style={{ opacity: rightOpacity }}
          />
        </div>

        {selectedComparison && selectedComparison?.title?.length > 0 && (
          <div className="block lg:hidden">
            <ComparisonBlock
              isAIBlock={shiftPercentage >= 50}
              data={{
                ...selectedComparison,
                elements: [
                  {
                    name:
                      selectedComparison.elements?.[currentElement]?.name || "",
                    value:
                      currentElement === 1
                        ? `<p>${(comparisons[0].elements?.[1]?.value || "")
                            .split(" ")
                            .map((word) => word.replace(/<\/?p>|,/g, ""))
                            .slice(0, 3)
                            .join(" ")} </p>`
                        : selectedComparison.elements?.[currentElement]
                            ?.value || "",
                  },
                ],
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
