import { CardContainer } from "@/widgets/CardContainer";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";
import { NotificationService } from "@/shared/utils/notificationService";
import {
  PAGE_ROUTES,
  UPDATE_TRAVEL_ROUTES_EVENT,
} from "@/shared/utils/constants";
import { selectAdminRole, selectUser, useAppSelector } from "@/app/redux";
import { mergeTravelRoutes } from "@/shared/utils/mergeTravelRoutes";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";

export function Home() {
  const userId = useAppSelector(selectUser)?.sub as string;
  const isAdmin = useAppSelector(selectAdminRole);
  const { CREATE_ROUTE } = PAGE_ROUTES;
  const [travelRoutes, setTravelRoutes] = useState<TravelRoute[]>([]);

  const getTravelRoutes = async () => {
    const res = await TravelRouteService.getRoutes();
    const favorites = await TravelRouteService.getFavorites(userId);

    const updatedRoutes = mergeTravelRoutes(res.data, favorites.data);
    setTravelRoutes(updatedRoutes);
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
      <h1>Все маршруты</h1>
      <CardContainer cardData={travelRoutes} />
      {isAdmin && (
        <div className={styles.menu}>
          <Button color="yellow">
            <Link to={CREATE_ROUTE}>Добавить маршрут</Link>
          </Button>
        </div>
      )}
    </main>
  );
}
