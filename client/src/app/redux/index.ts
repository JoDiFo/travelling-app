import { store } from "./store";
import { useAppDispatch, useAppSelector, useSelectUser } from "./hooks";
import { loginUser, registerUser } from "./userSlice";

export {
  store,
  useAppDispatch,
  useAppSelector,
  useSelectUser,
  loginUser,
  registerUser,
};
