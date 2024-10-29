import { CreateRoute } from "@/pages/CreateRoute";
import { Favorites } from "@/pages/Favorites";
import { Guides } from "@/pages/Guides";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { TravelRoute } from "@/pages/TravelRoute";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Header } from "@/widgets/Header";
import { createBrowserRouter } from "react-router-dom";

const {
  CREATE_ROUTE,
  TRAVEL_ROUTES,
  FAVORITES,
  HOME,
  PROFILE,
  SIGNIN,
  SIGNUP,
  GUIDES,
} = PAGE_ROUTES;

export const router = (isAuthenticated: boolean, isAdmin: boolean) =>
  createBrowserRouter([
    {
      path: SIGNIN,
      element: <SignIn />,
    },
    {
      path: SIGNUP,
      element: <SignUp />,
    },
    {
      element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: TRAVEL_ROUTES,
          element: (
            <>
              <Header />
              <TravelRoute />
            </>
          ),
        },
        {
          path: FAVORITES,
          element: (
            <>
              <Header />
              <Favorites />
            </>
          ),
        },
        {
          path: HOME,
          element: (
            <>
              <Header />
              <Home />
            </>
          ),
        },
        {
          path: PROFILE,
          element: (
            <>
              <Header />
              <Profile />
            </>
          ),
        },
        {
          element: <ProtectedRoute isAuthenticated={isAdmin} />,
          children: [
            {
              path: CREATE_ROUTE,
              element: (
                <>
                  <Header />
                  <CreateRoute />
                </>
              ),
            },
            {
              path: GUIDES,
              element: (
                <>
                  <Header />
                  <Guides />
                </>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <div>Not found</div>,
    },
  ]);
