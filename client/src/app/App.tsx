import { router } from "@/app/router";
import { RouterProvider } from "react-router-dom";

import "@/app/styles/index.scss";
import { useAppSelector } from "./redux";
import { useMemo } from "react";

export function App() {
  const { error, isLoading, user } = useAppSelector((state) => state.user);

  const provider = useMemo(() => {
    return router(true);
  }, [user]);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    console.log(error);
    return "Error";
  }

  return (
    <div className="app">
      <RouterProvider router={provider} />
    </div>
  );
}
