import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";
import { useAppSelector } from "@/app/redux";
import { NotificationService } from "@/shared/utils/notificationService";
import { UPDATE_TRAVEL_ROUTES_EVENT } from "@/shared/utils/constants";

export function RouteCard({
  id,
  title,
  category,
  region,
  duration,
  guide,
  cost,
  isFavorite = false,
  isBooked = false,
  time,
}: TravelRoute) {
  const userId = useAppSelector((state) => state.userSlice.user?.sub) as string;

  const handleAddToFavorites = () => {
    TravelRouteService.addFavorite(userId, id).then(() => {
      NotificationService.dispatchEvent(UPDATE_TRAVEL_ROUTES_EVENT);
    });
  };

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
          {isBooked && (
            <Keyword>
              {time[0]}-{time[1]}
            </Keyword>
          )}
          <p className={styles.cost}>{cost} BYN</p>
        </div>
      </div>
      {!isBooked && (
        <div>
          {isFavorite ? (
            <Button>Удалить</Button>
          ) : (
            <Button onClick={handleAddToFavorites}>В избранное</Button>
          )}
          <Button color="yellow">Забронировать</Button>
        </div>
      )}
    </div>
  );
}
