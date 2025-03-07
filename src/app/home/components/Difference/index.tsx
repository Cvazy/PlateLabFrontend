import { MainContainer, TitleBlock } from "./components";

export const Difference = () => {
  return (
    <div className="flex justify-center overflow-hidden px-5 py-14 w-full sm:py-16 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-limitation w-full h-full">
        <div className={"flex flex-col items-center w-full gap-10"}>
          <TitleBlock />

          <MainContainer />
        </div>
      </div>
    </div>
  );
};
