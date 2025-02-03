import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import {
  IBanner,
  IComparisons,
  IGallery,
  IParallax,
  IParameters,
  IPartner,
  IRestaurant,
  ISale,
} from "@/app/home";

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

    fetchAllSales: builder.query<ISale[], void>({
      query: () => "/api/v1/boost-sales",
    }),

    fetchBeforeRestaurant: builder.query<IRestaurant[], void>({
      query: () => "/api/v1/before/restaurant",
    }),

    fetchBeforeParameters: builder.query<IParameters[], void>({
      query: () => "/api/v1/before/parameters",
    }),

    fetchParallax: builder.query<IParallax[], void>({
      query: () => "/api/v1/parallax",
    }),
  }),
});

export const {
  useFetchAllPartnersQuery,
  useFetchAllBannersQuery,
  useFetchAllComparisonQuery,
  useFetchAllGalleryQuery,
  useFetchAllSalesQuery,
  useFetchBeforeParametersQuery,
  useFetchBeforeRestaurantQuery,
  useFetchParallaxQuery,
} = homeApi;
