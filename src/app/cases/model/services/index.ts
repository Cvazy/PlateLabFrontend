import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { ICaseItem } from "@/app/cases/model";

export const casesApi = createApi({
  reducerPath: "casesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllCases: builder.query<ICaseItem[], void>({
      query: () => "/api/v1/cases",
    }),
  }),
});

export const { useFetchAllCasesQuery } = casesApi;
