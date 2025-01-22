import { configureStore } from "@reduxjs/toolkit";
import { casesApi } from "@/app/cases/model";
import { rootReducer } from "./reducers";
import { contactApi } from "@/app/contact";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(casesApi.middleware, contactApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
