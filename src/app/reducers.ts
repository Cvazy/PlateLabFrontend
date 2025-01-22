import { combineReducers } from "redux";
import { casesApi } from "@/app/cases";
import { contactApi } from "@/app/contact";

export const rootReducer = combineReducers({
  [casesApi.reducerPath]: casesApi.reducer,
  [contactApi.reducerPath]: contactApi.reducer,
});
