"use client";

import { PriceElement } from "../PriceElement";
import { Loader } from "@/app/components";
import { IPrice, useFetchAllPricingQuery } from "@/app/pricing";

export const PricingList = () => {
  const { data, isError } = useFetchAllPricingQuery();

  const pricing: IPrice[] = data || [];

  return (
    <div className={"w-full"}>
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

      <div className={"grid gap-4 w-full sm:grid-cols-2 lg:grid-cols-4"}>
        {pricing &&
          pricing.map(
            ({
              id,
              price,
              min_photo_qnt,
              max_photo_qnt,
              is_the_best_price,
            }) => (
              <PriceElement
                key={id}
                price={price}
                min_photo_qnt={min_photo_qnt}
                max_photo_qnt={max_photo_qnt}
                is_the_best_price={is_the_best_price}
              />
            ),
          )}
      </div>
    </div>
  );
};
