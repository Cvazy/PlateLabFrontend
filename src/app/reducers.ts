import { combineReducers } from "redux";
import { casesApi } from "@/app/cases/model";

export const rootReducer = combineReducers({
  [casesApi.reducerPath]: casesApi.reducer,
});
