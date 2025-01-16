import { Contact } from "@/app/components";
import { CaseItem } from "@/app/cases/CaseItem";

const CasesPage = () => {
  return (
    <div className={"px-5 w-full sm:px-6 md:px-8 lg:px-10"}>
      <div className={"pt-20 w-full lg:pt-[60px]"}>
        <div className={"flex flex-col items-center gap-10 w-full"}>
          <h1
            className={
              "text-[32px] text-white text-center !leading-none sm:text-4xl md:text-[40px] lg:text-5xl"
            }
          >
            Cases<span className={"text-gray"}>.</span>
          </h1>

          <div className={"flex flex-col items-start gap-[100px] w-full"}>
            <div className={"flex gap-5 w-full"}>
              <CaseItem
                name={"New York restaurant"}
                imageSrc={"/images/1.png"}
                isActive={true}
              />

              <CaseItem
                name={"Los Angeles restaurant"}
                imageSrc={"/images/3.png"}
                isActive={false}
              />
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default CasesPage;
