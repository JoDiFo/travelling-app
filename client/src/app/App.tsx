import { router } from "@/app/router";
import { RouterProvider } from "react-router-dom";

import "@/app/styles/index.scss";
import {
  getUserFromMemo,
  selectCredentials,
  useAppDispatch,
  useAppSelector,
} from "./redux";
import { useEffect } from "react";
import { selectAdminRole } from "./redux";

export function App() {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.userSlice);
  const isUserAuthorized = useAppSelector(selectCredentials);
  const isAdmin = useAppSelector(selectAdminRole);

  useEffect(() => {
    dispatch(getUserFromMemo());
  }, [dispatch]);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    console.log(error);
    return "Error";
  }

  return (
    <div className="app">
      <RouterProvider router={router(isUserAuthorized, isAdmin)} />
    </div>
  );
}
