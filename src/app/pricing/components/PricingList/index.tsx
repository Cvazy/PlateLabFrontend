"use client";

import { PriceElement } from "../PriceElement";
import { Loader } from "@/app/components";
import { IPrice, useFetchAllPricingQuery } from "@/app/pricing";

export const PricingList = () => {
  const { data, isError, isLoading } = useFetchAllPricingQuery();

  const pricing: IPrice[] = data || [];

  if (isLoading) return <Loader />;

  return (
    <div className={"grid gap-4 w-full sm:grid-cols-2 lg:grid-cols-4"}>
      {pricing &&
        pricing.map(
          ({ id, price, min_photo_qnt, max_photo_qnt, is_the_best_price }) => (
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
  );
};
