import { CardContainer } from "@/widgets/CardContainer";
import styles from "./style.module.scss";
import { useAppSelector, selectUser } from "@/app/redux";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";
import { UPDATE_TRAVEL_ROUTES_EVENT } from "@/shared/utils/constants";
import { NotificationService } from "@/shared/utils/notificationService";
import { useState, useEffect } from "react";

export function Profile() {
  const userId = useAppSelector(selectUser)?.sub as string;
  const [travelRoutes, setTravelRoutes] = useState<TravelRoute[]>([]);

  const getTravelRoutes = async () => {
    const res = await TravelRouteService.getBookedRoutes(userId);

    res.data.forEach((route) => (route.isBooked = true));
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
      <h1>Забронированные маршруты</h1>
      <CardContainer cardData={travelRoutes} />
    </main>
  );
}
