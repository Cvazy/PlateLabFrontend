import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  isNavigationAllowed: boolean;
}

const initialState: NavigationState = {
  isNavigationAllowed: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    allowNavigation: (state) => {
      state.isNavigationAllowed = true;
    },
    blockNavigation: (state) => {
      state.isNavigationAllowed = false;
    },
  },
});

export const { allowNavigation, blockNavigation } = navigationSlice.actions;
