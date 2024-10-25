import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import { TravelRoute } from "@/entities/trabelRoute";

export interface RouteCardProps extends TravelRoute {
  isFavorite?: boolean;
  isBooked?: boolean;
}

export function RouteCard({
  title,
  category,
  region,
  duration,
  guide,
  cost,
  isFavorite = false,
  isBooked = false,
  time,
}: RouteCardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div>
        <div>
          <p>
            <span>Категория:</span> {category}
          </p>
          <p>
            <span>Регон:</span> {region}
          </p>
          <p>
            <span>Длинтельность:</span> {duration}
          </p>
          <p>
            <span>Гид:</span> {guide}
          </p>
        </div>
        <div className={isBooked ? styles.right : styles.notBooked}>
          {isBooked && <Keyword>{time[0]}-{time[1]}</Keyword>}
          <p className={styles.cost}>{cost} BYN</p>
        </div>
      </div>
      {!isBooked && (
        <div>
          <Button>{isFavorite ? "Удалить" : "В избранное"}</Button>
          <Button color="yellow">Забронировать</Button>
        </div>
      )}
    </div>
  );
}
