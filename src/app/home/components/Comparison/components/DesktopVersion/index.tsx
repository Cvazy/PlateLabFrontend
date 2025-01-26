import { ComparisonBlock } from "./components";
import { ITransformComparisons } from "../..//model";

interface DesktopVersionProps {
  comparisons: ITransformComparisons[];
}

export const DesktopVersion = ({ comparisons }: DesktopVersionProps) => {
  return (
    <div className={"px-5 w-full sm:px-6 md:px-8 lg:px-10"}>
      <div className={"flex justify-center w-full"}>
        <div className={"max-w-[840px] w-full"}>
          <div className={"grid grid-cols-2 w-full"}>
            <ComparisonBlock isAIBlock={false} data={comparisons[0]} />

            <ComparisonBlock isAIBlock={true} data={comparisons[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};
