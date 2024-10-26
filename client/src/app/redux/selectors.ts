import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/utils/constants";

const baseSelector = (state: RootState) => state;

export const selectUser = createSelector(
  baseSelector,
  (state) => state.userSlice.user
);

export const selectCredentials = createSelector(baseSelector, () => {
  const memo = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  if (!memo) {
    return false;
  }

  const user = JSON.parse(memo);

  if (user.exp < Date.now()) {
    return true;
  }

  return false;
});
