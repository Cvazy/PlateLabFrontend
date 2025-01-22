"use client";

import { useState } from "react";
import { Contact } from "@/app/components";
import { BigGallery, RestaurantList } from "./components";

import { ICaseItem, useFetchAllCasesQuery } from "@/app/cases/model";
import { Loader } from "@/app/components";

const CasesPage = () => {
  const [activeCase, setActiveCase] = useState<number>(1);

  //@ts-ignore
  const { data, isError, isLoading } = useFetchAllCasesQuery();

  //@ts-ignore
  const cases: ICaseItem[] = data;

  if (isLoading) return <Loader />;

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

          {isError && (
            <p
              className={
                "text-center font-fancy text-red text-lg w-full sm:text-xl md:text-2xl lg:text-3xl"
              }
            >
              An error occurred during the request. Try to reload the page or
              come back later.
            </p>
          )}

          <div
            className={"flex flex-col-reverse items-start w-full lg:flex-col"}
          >
            <BigGallery activeCase={activeCase} cases={cases} />

            <RestaurantList
              cases={cases}
              activeCase={activeCase}
              setActiveCase={setActiveCase}
            />
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default CasesPage;
