export const PAGE_ROUTES = {
  TRAVEL_ROUTES: "/routes",
  CREATE_ROUTE: "/routes/create",
  FAVORITES: "/favorites",
  HOME: "/",
  PROFILE: "/profile",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  GUIDES: "/guides",
} as const;

export const IMAGE_MAP = [
  {
    id: "1",
    imageUrl: "/Warsaw.png",
    title: "Королевский путь Варшавы",
  },
  {
    id: "2",
    imageUrl: "/Bruge.png",
    title: "Легенды Брюгге",
  },
  {
    id: "3",
    imageUrl: "/Amsterdam.png",
    title: "Гармония Гродно",
  },
  {
    id: "4",
    imageUrl: "/Edinburgh.png",
    title: "Амстердамская романтика",
  },
  {
    id: "5",
    imageUrl: "/Grodno.png",
    title: "Эдинбург: от замка до королевского сада",
  },
];

export const UPDATE_TRAVEL_ROUTES_EVENT = "onTravelRouteUpdate";
export const UPDATE_GUIDES_EVENT = "onGuidesUpdate";

export const LOCAL_STORAGE_USER_KEY = "user";
