import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { IPrice } from "../types";

export const pricingApi = createApi({
  reducerPath: "pricingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllPricing: builder.query<IPrice[], void>({
      query: () => "/api/v1/pricing",
    }),
  }),
});

export const { useFetchAllPricingQuery } = pricingApi;
