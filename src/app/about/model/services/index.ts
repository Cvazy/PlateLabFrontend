import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { IAboutInfo } from "../types";

export const aboutApi = createApi({
  reducerPath: "aboutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAboutInfo: builder.query<IAboutInfo[], void>({
      query: () => "/api/v1/about",
    }),
  }),
});

export const { useFetchAboutInfoQuery } = aboutApi;
