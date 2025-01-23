import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "@/app/constants";
import { IContactData, IHowItsWorkElementProps } from "../types";

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

    sendContactData: builder.mutation<null, IContactData>({
      query: ({ name, eMail, phone, companyName, message }) => ({
        url: "/api/v1/email/contact/",
        method: "POST",
        body: {
          name,
          email: eMail,
          phone,
          company: companyName,
          message: !!message.length ? message : "",
        },
      }),
    }),
  }),
});

export const {
  useFetchAllHowItsWorkElementsQuery,
  useSendContactDataMutation,
} = contactApi;
