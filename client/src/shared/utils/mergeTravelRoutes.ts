import { TravelRoute } from "@/entities/trabelRoute";

export function mergeTravelRoutes(
  travelRoutes: TravelRoute[],
  favoriteTravelRoutes: TravelRoute[]
) {
  travelRoutes.forEach((route) => {
    if (favoriteTravelRoutes.find((favorite) => favorite.id === route.id)) {
      route.isFavorite = true;
    }
  });

  return travelRoutes;
}
