import styles from "./ComparisonBlock.module.css";
import {
  ITransformComparisons,
  ITransformComparisonsElement,
} from "../../../../model";
import { CSSProperties, Fragment } from "react";

interface IComparisonBlock {
  isAIBlock: boolean;
  data: ITransformComparisons;
  style?: CSSProperties;
}

export const ComparisonBlock = ({
  data,
  isAIBlock,
  style,
}: IComparisonBlock) => {
  let title: string = "";
  let elements: ITransformComparisonsElement[] = [];

  if (data) {
    title = data.title;
    elements = data.elements;
  }

  return (
    <div
      className={`flex flex-col items-center ${isAIBlock ? "lg:items-end" : "lg:items-start"} gap-10 w-full lg:max-w-[300px]`}
    >
      <div className={"max-w-[300px] h-16 w-fit relative"}>
        <div className={"flex items-center justify-center w-full h-full"}>
          <p
            style={style || {}}
            className={`font-fancy !leading-[57px] text-[52px] uppercase text-center ${isAIBlock ? "text-red" : "text-white"}`}
          >
            {title}
          </p>
        </div>

        <div
          className={`${style?.opacity === 0 ? "opacity-0" : ""} textEffect`}
        ></div>
      </div>

      <div
        style={style || {}}
        className={`flex flex-col items-center ${isAIBlock ? "lg:items-end" : "lg:items-start"} gap-5 w-full`}
      >
        {elements &&
          elements.map(({ name, value }, index) => (
            <Fragment key={name}>
              <div
                className={`flex flex-col items-center ${isAIBlock ? "lg:items-end" : "lg:items-start"} w-full`}
              >
                <p
                  className={`text-center ${isAIBlock ? "lg:text-end" : "lg:text-start"} text-[15px] font-fancy text-gray`}
                >
                  {name}
                </p>

                <div
                  dangerouslySetInnerHTML={{ __html: value }}
                  className={`flex justify-center text-center ${isAIBlock ? "lg:justify-end lg:text-end" : "lg:justify-start lg:text-start"} w-full ${styles.DescriptionBlock}`}
                />
              </div>

              {index !== elements.length - 1 && (
                <div className={"w-10 h-px bg-gray"}></div>
              )}
            </Fragment>
          ))}
      </div>
    </div>
  );
};
