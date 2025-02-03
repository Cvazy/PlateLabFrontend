import { IGridElement } from "@/app/home/components/Before/model";

import styles from "./GridElement.module.css";
import { CountUp } from "@/app/ReactBitsComponents";
import { useEffect, useState } from "react";

interface IGridElementProps extends Omit<IGridElement, "id"> {
  valuesSwitched: boolean;
  isFirstlyAnimation: boolean;
}

export const GridElement = ({
  start_value,
  end_value,
  name,
  valuesSwitched,
  isFirstlyAnimation,
}: IGridElementProps) => {
  const initialPercentage = (start_value / end_value) * 100;
  const [lineWidth, setLineWidth] = useState(initialPercentage);

  useEffect(() => {
    if (valuesSwitched) {
      setLineWidth(100);
    } else {
      setLineWidth(initialPercentage);
    }
  }, [valuesSwitched, start_value, end_value, initialPercentage]);

  return (
    <div className={"flex flex-col items-start gap-1 w-full"}>
      <CountUp
        from={valuesSwitched ? start_value : isFirstlyAnimation ? 0 : end_value}
        to={valuesSwitched ? end_value : start_value}
        separator={","}
        direction={"up"}
        duration={1}
        isFormatted={true}
        className={"text-white text-4xl !leading-[45px] text-left w-full"}
      />

      <div className={`${styles.line} no-transition`}>
        <div
          className={`${styles.fillLine} no-transition`}
          style={{ width: `${lineWidth}%` }}
        ></div>
      </div>

      <p
        className={
          "text-[15px] font-fancy text-light_gray leading-5 md:text-base"
        }
      >
        {name}
      </p>
    </div>
  );
};
