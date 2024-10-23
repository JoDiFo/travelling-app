import { CardContainer } from "@/widgets/CardContainer";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";

export function Home() {
  const [travelRoutes, setTravelRoutes] = useState<TravelRoute[]>([])

  const getTravelRoutes = async () => {
    const res = await TravelRouteService.getRoutes()
    setTravelRoutes(res.data)
  }

  useEffect(() => {
    getTravelRoutes()
  }, [])

  return (
    <main className={styles.homePage}>
      <h1>Все маршруты</h1>
      <CardContainer cardData={travelRoutes} />
    </main>
  );
}
