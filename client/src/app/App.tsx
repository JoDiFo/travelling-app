import { router } from "@/app/router";
import { RouterProvider } from "react-router-dom";

import "@/app/styles/index.scss";
import { selectCredentials, useAppSelector } from "./redux";

export function App() {
  const { error, isLoading } = useAppSelector((state) => state.userSlice);
  const isUserAuthorized = useAppSelector(selectCredentials);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    console.log(error);
    return "Error";
  }

  return (
    <div className="app">
      <RouterProvider router={router(isUserAuthorized)} />
    </div>
  );
}
