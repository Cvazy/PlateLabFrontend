import { MainContainer, TitleBlock } from "./components";

export const Difference = () => {
  return (
    <div className="flex justify-center overflow-hidden px-5 py-4 w-full h-screen sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center max-w-limitation w-full">
        <div className={"flex flex-col items-center w-full gap-10"}>
          <TitleBlock />

          <MainContainer />
        </div>
      </div>
    </div>
  );
};
