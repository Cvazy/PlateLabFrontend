import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { IBanner, IPartner } from "@/app/home";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchAllBanners: builder.query<IBanner[], void>({
      query: () => "/api/v1/banners",
    }),

    fetchAllPartners: builder.query<IPartner[], void>({
      query: () => "/api/v1/partners",
    }),
  }),
});

export const { useFetchAllPartnersQuery, useFetchAllBannersQuery } = homeApi;
