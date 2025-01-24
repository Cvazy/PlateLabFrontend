import { Contact, InformationBlock } from "@/app/components";
import { PricingList } from "@/app/pricing/components";

const PricingPage = () => {
  return (
    <div className={"px-5 w-full sm:px-6 md:px-8 lg:px-10"}>
      <div className={"pt-20 w-full lg:pt-[60px]"}>
        <div className={"flex flex-col items-center gap-10 w-full"}>
          <h1
            className={
              "text-[32px] text-white text-center !leading-none sm:text-4xl md:text-[40px] lg:text-5xl"
            }
          >
            Pricing<span className={"text-gray"}>.</span>
          </h1>

          <PricingList />
        </div>
      </div>

      <InformationBlock />

      <Contact />
    </div>
  );
};

export default PricingPage;
