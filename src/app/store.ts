import { configureStore } from "@reduxjs/toolkit";
import { casesApi } from "@/app/cases/model";
import { rootReducer } from "./reducers";
import { contactApi } from "@/app/contact";
import { footerApi } from "@/app/components/Footer/model";
import { aboutApi } from "@/app/about";
import { pricingApi } from "@/app/pricing";
import { homeApi } from "@/app/home";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      aboutApi.middleware,
      casesApi.middleware,
      contactApi.middleware,
      footerApi.middleware,
      homeApi.middleware,
      pricingApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
