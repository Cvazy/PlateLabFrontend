import { configureStore } from "@reduxjs/toolkit";
import { casesApi } from "@/app/cases/model";

export const store = configureStore({
  reducer: {
    [casesApi.reducerPath]: casesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(casesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
