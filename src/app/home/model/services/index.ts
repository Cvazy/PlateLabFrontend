import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { IBanner, IComparisons, IGallery, IPartner } from "@/app/home";

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

    fetchAllComparison: builder.query<IComparisons[], void>({
      query: () => "/api/v1/comparisons",
    }),

    fetchAllGallery: builder.query<IGallery[], void>({
      query: () => "/api/v1/gallery",
    }),
  }),
});

export const {
  useFetchAllPartnersQuery,
  useFetchAllBannersQuery,
  useFetchAllComparisonQuery,
  useFetchAllGalleryQuery,
} = homeApi;
