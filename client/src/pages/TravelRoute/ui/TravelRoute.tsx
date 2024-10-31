import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  TravelRouteService,
  TravelRoute as TTravelRoute,
} from "@/entities/trabelRoute";
import { IMAGE_MAP } from "@/shared/utils/constants";

export function TravelRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoBack = () => {
    navigate(-1);
  };

  const [route, setRoute] = useState<TTravelRoute | null>(null);

  const handleGetRoute = async () => {
    const res = await TravelRouteService.getRoute(location.state.guideId);
    setRoute(res.data);
  };

  useEffect(() => {
    handleGetRoute();
  }, []);

  if (!route) {
    return "Loading...";
  }

  const { title, category, description, region, duration, guide, map } = route;
  console.log(map);
  const img = IMAGE_MAP.find((imageMap) => imageMap.id === map)?.imageUrl;
  console.log(img);

  return (
    <main className={styles.articlesPage}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.credits}>
        <p>
          <span>Категория:</span> {category}
        </p>
        <p>
          <span>Регон:</span> {region.name}
        </p>
        <p>
          <span>Длинтельность:</span> {duration} ч.
        </p>
        <p>
          <span>Гид:</span> {guide.name} {guide.surname} {guide.patronymic}
        </p>
      </div>
      <img src={img} />
      <div className={styles.buttons}>
        <Button onClick={handleGoBack}>Назад</Button>
        <Button>В избранное</Button>
        <Button color="yellow">Забронировать</Button>
      </div>
    </main>
  );
}
