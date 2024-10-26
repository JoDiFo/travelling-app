import { selectUser, useAppSelector } from "@/app/redux";
import styles from "./style.module.scss";
import { CardContainer } from "@/widgets/CardContainer";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";
import { UPDATE_TRAVEL_ROUTES_EVENT } from "@/shared/utils/constants";
import { NotificationService } from "@/shared/utils/notificationService";
import { useState, useEffect } from "react";

export function Favorites() {
  const userId = useAppSelector(selectUser)?.sub as string;
  const [travelRoutes, setTravelRoutes] = useState<TravelRoute[]>([]);

  const getTravelRoutes = async () => {
    const favorites = await TravelRouteService.getFavorites(userId);
    favorites.data.forEach((route) => (route.isFavorite = true));

    setTravelRoutes(favorites.data);
  };

  useEffect(() => {
    getTravelRoutes();
  }, []);

  useEffect(() => {
    NotificationService.subscribe(UPDATE_TRAVEL_ROUTES_EVENT, getTravelRoutes);

    return () => {
      NotificationService.unsubscribe(
        UPDATE_TRAVEL_ROUTES_EVENT,
        getTravelRoutes
      );
    };
  }, []);

  return (
    <main className={styles.homePage}>
      <h1>Избранные маршруты</h1>
      <CardContainer cardData={travelRoutes} />
    </main>
  );
}
