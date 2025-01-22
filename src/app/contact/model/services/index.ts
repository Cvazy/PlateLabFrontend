import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { IHowItsWorkElementProps } from "../types";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllHowItsWorkElements: builder.query<IHowItsWorkElementProps[], void>({
      query: () => "/api/v1/how-it-works",
    }),
  }),
});

export const { useFetchAllHowItsWorkElementsQuery } = contactApi;
