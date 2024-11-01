import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectCredentials, selectUser, selectAdminRole } from "./selectors";
import { loginUser, registerUser, getUserFromMemo, logout } from "./userSlice";

export {
  store,
  useAppDispatch,
  useAppSelector,
  selectUser,
  selectCredentials,
  loginUser,
  registerUser,
  getUserFromMemo,
  logout,
  selectAdminRole,
};
