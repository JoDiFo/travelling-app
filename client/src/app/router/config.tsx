import { TravelRoute } from "@/pages/TravelRoute";
import { CreateRoute } from "@/pages/CreateRoute";
import { Favorites } from "@/pages/Favorites";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { PAGE_ROUTES } from "@/shared/utils/constants";

const { TRAVEL_ROUTES, CREATE_ROUTE, FAVORITES, HOME, PROFILE, SIGNIN, SIGNUP } =
  PAGE_ROUTES;

export const roteMap = [
  {
    path: TRAVEL_ROUTES,
    element: <TravelRoute />,
  },
  {
    path: CREATE_ROUTE,
    element: <CreateRoute />,
  },
  {
    path: FAVORITES,
    element: <Favorites />,
  },
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: PROFILE,
    element: <Profile />,
  },
  {
    path: SIGNIN,
    element: <SignIn />,
  },
  {
    path: SIGNUP,
    element: <SignUp />,
  },
];
