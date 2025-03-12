import { GridElement } from "../GridElement";
import { IParameters, useFetchBeforeParametersQuery } from "@/app/home";

interface IElementsContainerProps {
  isBlockAfter: boolean;
  activeCondition: boolean;
}

export const ElementsContainer = ({
  isBlockAfter,
  activeCondition,
}: IElementsContainerProps) => {
  const { data } = useFetchBeforeParametersQuery();
  const parameters: IParameters[] = data || [];

  return (
    <div
      className={`${activeCondition ? "grid" : "hidden"} grid-cols-3 justify-center gap-10 w-full lg:!flex lg:flex-col lg:justify-start lg:items-start lg:gap-8`}
    >
      {!!parameters.length &&
        parameters.map(({ id, name, start_value, end_value }) => (
          <GridElement
            key={id}
            name={name}
            start_value={start_value}
            end_value={end_value}
            isBlockAfter={isBlockAfter}
            isActive={activeCondition}
          />
        ))}
    </div>
  );
};
