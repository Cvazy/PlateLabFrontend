import { combineReducers } from "redux";
import { casesApi } from "@/app/cases";
import { contactApi } from "@/app/contact";
import { footerApi } from "@/app/components/Footer/model";
import { aboutApi } from "@/app/about";
import { pricingApi } from "@/app/pricing";

export const rootReducer = combineReducers({
  [aboutApi.reducerPath]: aboutApi.reducer,
  [casesApi.reducerPath]: casesApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [footerApi.reducerPath]: footerApi.reducer,
  [pricingApi.reducerPath]: pricingApi.reducer,
});
