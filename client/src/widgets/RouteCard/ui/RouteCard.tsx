import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";

export interface RouteCardProps {
  id: number;
  title: string;
  type: string;
  region: string;
  duration: string;
  guide: string;
  cost: number;
}

export function RouteCard({
  title,
  type,
  region,
  duration,
  guide,
  cost,
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
        <p className={styles.cost}>{cost} BYN</p>
      </div>
      <div>
        <Button>В избранное</Button>
        <Button color="yellow">Забронировать</Button>
      </div>
    </div>
  );
}
