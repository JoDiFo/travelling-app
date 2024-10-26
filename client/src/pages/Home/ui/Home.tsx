import { CardContainer } from "@/widgets/CardContainer";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";
import { NotificationService } from "@/shared/utils/notificationService";
import { UPDATE_TRAVEL_ROUTES_EVENT } from "@/shared/utils/constants";

export function Home() {
  const [travelRoutes, setTravelRoutes] = useState<TravelRoute[]>([]);

  const getTravelRoutes = async () => {
    const res = await TravelRouteService.getRoutes();
    setTravelRoutes(res.data);
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
    </main>
  );
}
