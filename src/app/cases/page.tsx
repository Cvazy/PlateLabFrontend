"use client";

import { useState } from "react";
import { Contact } from "@/app/components";
import { BigGallery, RestaurantList } from "./components";

import { ICaseItem, useFetchAllCasesQuery } from "@/app/cases";
import useLenis from "@/app/hooks/useLenis";

const CasesPage = () => {
  const [activeCase, setActiveCase] = useState<number>(1);

  const { data, isError } = useFetchAllCasesQuery();

  const cases: ICaseItem[] = data || [];

  useLenis(false);

  return (
    <div className={"flex justify-center pt-20 w-full overflow-x-hidden"}>
      <div
        className={"flex justify-center px-5 w-full sm:px-6 md:px-8 lg:px-10"}
      >
        <div className={"max-w-limitation w-full"}>
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
                  An error occurred during the request. Try to reload the page
                  or come back later.
                </p>
              )}

              <div
                className={
                  "flex flex-col-reverse items-start w-full lg:flex-col"
                }
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
      </div>
    </div>
  );
};

export default CasesPage;
