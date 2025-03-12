import { IGridElement } from "@/app/home/components/Before/model";

import { CountUp } from "@/app/ReactBitsComponents";

interface IGridElementProps extends Omit<IGridElement, "id"> {
  isBlockAfter?: boolean;
  isActive: boolean;
}

export const GridElement = ({
  start_value,
  end_value,
  name,
  isActive,
  isBlockAfter = false,
}: IGridElementProps) => {
  return (
    <div className={"flex flex-col items-start gap-1 w-full"}>
      <CountUp
        from={isBlockAfter ? start_value : 0}
        to={isBlockAfter ? end_value : start_value}
        separator={","}
        direction={"up"}
        startWhen={isActive}
        duration={1}
        isFormatted={true}
        className={`${isActive ? "text-white" : "text-gray"} text-[28px] !leading-[36px] text-left w-full sm:!leading-[45px] sm:text-4xl`}
      />

      <p
        className={`text-[13px] font-fancy ${isActive ? "text-light_gray" : "text-[#343434]"} leading-5 sm:text-[15px] md:text-base`}
      >
        {name}
      </p>
    </div>
  );
};
