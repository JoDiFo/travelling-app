import { router } from "@/app/router";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { getUserFromMemo, useAppDispatch, useAppSelector } from "./redux";
import "@/app/styles/index.scss";

export function App() {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.userSlice);

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
      <RouterProvider router={router} />
    </div>
  );
}
