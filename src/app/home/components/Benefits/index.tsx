import { BoostYourSales, SaveTime, StandOutOnline } from "./components";

export const Benefits = () => {
  return (
    <div className={"flex justify-center w-full"}>
      <div
        className={"flex justify-center px-5 w-full sm:px-6 md:px-8 lg:px-10"}
      >
        <div className={"max-w-limitation w-full"}>
          <div className={"py-20 w-full"}>
            <div
              className={
                "flex flex-col items-center gap-10 sm:gap-11 md:gap-12 lg:gap-[54px] xl:gap-[60px]"
              }
            >
              <h2
                className={
                  "text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px]"
                }
              >
                Benefits<span className={"text-gray"}>.</span>
              </h2>

              <div className={"grid gap-4 w-full xl:grid-cols-2"}>
                <BoostYourSales />

                <div className={"flex flex-col gap-4 w-full"}>
                  <SaveTime />

                  <StandOutOnline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
