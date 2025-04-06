"use client";

import { useState } from "react";
import { BigGallery, RestaurantList } from "./components";

import { ICaseItem, useFetchAllCasesQuery } from "@/app/cases";

export const ClientCasesPage = () => {
  const [activeCase, setActiveCase] = useState<number>(1);

  const { data, isError } = useFetchAllCasesQuery();

  const cases: ICaseItem[] = data || [];

  return (
    <>
      {isError && (
        <p
          className={
            "text-center font-fancy text-red text-lg w-full sm:text-xl md:text-2xl lg:text-3xl"
          }
        >
          An error occurred during the request. Try to reload the page or come
          back later.
        </p>
      )}

      <div className={"flex flex-col-reverse items-start w-full lg:flex-col"}>
        <BigGallery activeCase={activeCase} cases={cases} />

        <RestaurantList
          cases={cases}
          activeCase={activeCase}
          setActiveCase={setActiveCase}
        />
      </div>
    </>
  );
};
