import Amsterdam from "../assets/Amsterdam.png";
import Bruge from "../assets/Bruge.png";
import Edinburgh from "../assets/Edinburgh.png";
import Florance from "../assets/Florance.png";
import Grodno from "../assets/Grodno.png";
import Minsk from "../assets/Minsk.png";
import Prague from "../assets/Prague.png";
import Stockgholm from "../assets/Stockgholm.png";
import Vilnus from "../assets/Vilnus.png";
import Warsaw from "../assets/Warsaw.png";

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
    imageUrl: Warsaw,
    title: "Королевский путь Варшавы",
  },
  {
    id: "2",
    imageUrl: Bruge,
    title: "Легенды Брюгге",
  },
  {
    id: "3",
    imageUrl: Amsterdam,
    title: "Гармония Гродно",
  },
  {
    id: "4",
    imageUrl: Edinburgh,
    title: "Амстердамская романтика",
  },
  {
    id: "5",
    imageUrl: Grodno,
    title: "Эдинбург: от замка до королевского сада",
  },
  {
    id: "6",
    imageUrl: Florance,
    title: "Солнечная Флоренция",
  },
  {
    id: "7",
    imageUrl: Minsk,
    title: "Сердце Минска: архитектура и современность",
  },
  {
    id: "8",
    imageUrl: Prague,
    title: "Прага сквозь века",
  },
  {
    id: "9",
    imageUrl: Stockgholm,
    title: "Скандинавская одиссея в Стокгольме",
  },
  {
    id: "10",
    imageUrl: Vilnus,
    title: "Кофейная Вильнюсская променад",
  },
];

export const CATEGORY_OPTIONS: { value: string; title: string }[] = [
  { value: "romance", title: "Romance" },
  { value: "adventure", title: "Adventure" },
  { value: "action", title: "Action" },
  { value: "thriller", title: "Thriller" },
];

export const REGION_OPTIONS: { value: string; title: string }[] = [
  { value: "minsk", title: "Minsk" },
  { value: "gomel", title: "Gomel" },
  { value: "brest", title: "Brest" },
];

export const UPDATE_TRAVEL_ROUTES_EVENT = "onTravelRouteUpdate";
export const UPDATE_GUIDES_EVENT = "onGuidesUpdate";

export const LOCAL_STORAGE_USER_KEY = "user";
