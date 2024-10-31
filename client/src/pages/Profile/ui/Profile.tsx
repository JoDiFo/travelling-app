import { CardContainer } from "@/widgets/CardContainer";
import styles from "./style.module.scss";
import {
  useAppSelector,
  selectUser,
  useAppDispatch,
  logout,
} from "@/app/redux";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";
import { UPDATE_TRAVEL_ROUTES_EVENT } from "@/shared/utils/constants";
import { NotificationService } from "@/shared/utils/notificationService";
import { useState, useEffect } from "react";
import { Button } from "@/shared/ui/Button";

export function Profile() {
  const userId = useAppSelector(selectUser)?.sub;
  const dispatch = useAppDispatch();
  const [travelRoutes, setTravelRoutes] = useState<TravelRoute[]>([]);

  const getTravelRoutes = async () => {
    if (!userId) {
      return;
    }

    const bookedRoutes = await TravelRouteService.getBookedRoutes(userId);
    const allRoutes = await TravelRouteService.getRoutes();

    const res = allRoutes.data.filter((route) =>
      bookedRoutes.data.find((bookedRoute) => bookedRoute.id === route.id)
    );

    setTravelRoutes(res);
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

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <main className={styles.homePage}>
      <h1>Забронированные маршруты</h1>
      <CardContainer cardData={travelRoutes} />
      <Button onClick={handleLogout}>Выйти</Button>
    </main>
  );
}
