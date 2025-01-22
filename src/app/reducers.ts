import { combineReducers } from "redux";
import { casesApi } from "@/app/cases";
import { contactApi } from "@/app/contact";
import { footerApi } from "@/app/components/Footer/model";

export const rootReducer = combineReducers({
  [casesApi.reducerPath]: casesApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
  [footerApi.reducerPath]: footerApi.reducer,
});
