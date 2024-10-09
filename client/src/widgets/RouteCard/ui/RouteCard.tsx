import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";

export interface RouteCardProps {
  id: number;
  title: string;
  type: string;
  region: string;
  duration: string;
  guide: string;
  cost: number;
  isFavorite?: boolean;
  isBooked?: boolean;
  date?: string;
}

export function RouteCard({
  title,
  type,
  region,
  duration,
  guide,
  cost,
  isFavorite = false,
  isBooked = false,
  date = "",
}: RouteCardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div>
        <div>
          <p>
            <span>Категория:</span> {type}
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
          {isBooked && <Keyword>{date}</Keyword>}
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
