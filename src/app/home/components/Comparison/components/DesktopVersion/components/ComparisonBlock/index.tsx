import Image from "next/image";

import styles from "./ComparisonBlock.module.css";
import { ITransformComparisons } from "@/app/home/components/Comparison/model";
import { Fragment } from "react";

interface IComparisonBlock {
  isAIBlock: boolean;
  data: ITransformComparisons;
}

export const ComparisonBlock = ({ data, isAIBlock }: IComparisonBlock) => {
  let title = "";
  let elements = [];

  if (data) {
    title = data.title;
    elements = data.elements;
  }

  return (
    <div
      className={`${isAIBlock ? "rounded-r-[10px] border-l bg-gradient-to-b from-[#1b1b1b99] via-[#1b1b1b99] to-[#f7363724]" : "rounded-l-[10px] border-r-0"} border border-solid border-gray w-full`}
    >
      <div
        className={
          "px-8 pb-10 pt-10 w-full lg:px-12 lg:pt-12 xl:pt-[60px] xl:px-[60px]"
        }
      >
        <div className={"flex flex-col items-center gap-10 w-full"}>
          <div className={"max-w-[300px] h-[89px] w-full relative"}>
            <div className={"flex items-center justify-center w-full h-full"}>
              <p
                className={`font-fancy !leading-[57px] text-[80px] uppercase text-center ${isAIBlock ? "text-red" : "text-white"}`}
              >
                {title}
              </p>
            </div>

            <div className={"textEffect"}></div>
          </div>

          <div className={"flex flex-col items-center gap-5 w-full"}>
            {elements &&
              elements.map(({ name, value }, index) => (
                <Fragment key={name}>
                  <div className={"flex flex-col items-center w-full"}>
                    <p
                      className={"text-center text-[15px] font-fancy text-gray"}
                    >
                      {name}
                    </p>

                    <div
                      dangerouslySetInnerHTML={{ __html: value }}
                      className={`flex justify-center text-center w-full ${styles.DescriptionBlock}`}
                    />
                  </div>

                  {index !== elements.length - 1 && (
                    <div className={"w-10 h-px bg-gray"}></div>
                  )}
                </Fragment>
              ))}
          </div>

          {isAIBlock && (
            <Image
              width={22}
              height={22}
              src={"/images/logo.svg"}
              alt={"Logo"}
              loading={"lazy"}
              className={"block"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
