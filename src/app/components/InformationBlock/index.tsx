import { FAQ, HowItsWorkPricing } from "@/app/components";

export const InformationBlock = () => {
  return (
    <div className={"pb-20 pt-16 w-full lg:pt-20"}>
      <div className={`w-full`}>
        <div className={"py-[60px]"}>
          <div className={"flex flex-col gap-16 w-full"}>
            <div
              className={
                "pt-[60px] pb-[30px] w-full md:pb-10 lg:pb-12 xl:pb-[60px]"
              }
            >
              <div
                className={
                  "flex flex-col items-center gap-[60px] w-full lg:gap-[71px]"
                }
              >
                <h2
                  className={
                    "text-2xl text-center text-white !leading-none sm:text-3xl md:text-4xl lg:text-[40px]"
                  }
                >
                  How it works?
                </h2>

                <HowItsWorkPricing />
              </div>
            </div>

            <div
              className={
                "pt-[60px] pb-[30px] w-full md:pb-10 lg:pb-12 xl:pb-[60px]"
              }
            >
              <div className={"flex flex-col items-center gap-[60px] w-full"}>
                <h2
                  className={
                    "text-2xl text-center text-white !leading-none sm:text-3xl md:text-4xl lg:text-[40px]"
                  }
                >
                  FAQ
                </h2>

                <FAQ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
