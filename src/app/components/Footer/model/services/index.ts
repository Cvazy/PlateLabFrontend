import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { IFooter, INetwork } from "../types";

export const footerApi = createApi({
  reducerPath: "footerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchFooterInformation: builder.query<IFooter[], void>({
      query: () => "/api/v1/footer",
    }),

    fetchAllNetworks: builder.query<INetwork[], void>({
      query: () => "/api/v1/networks",
    }),
  }),
});

export const { useFetchFooterInformationQuery, useFetchAllNetworksQuery } =
  footerApi;
