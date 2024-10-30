import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import { TravelRoute, TravelRouteService } from "@/entities/trabelRoute";
import { useAppSelector } from "@/app/redux";
import { NotificationService } from "@/shared/utils/notificationService";
import {
  PAGE_ROUTES,
  UPDATE_TRAVEL_ROUTES_EVENT,
} from "@/shared/utils/constants";
import { useState } from "react";
import { ModalWindow } from "@/shared/ui/ModalWindow";
import { BookRoute } from "@/widgets/BookRoute";
import { Link } from "react-router-dom";

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

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddToFavorites = () => {
    TravelRouteService.addFavorite(userId, id).then(() => {
      NotificationService.dispatchEvent(UPDATE_TRAVEL_ROUTES_EVENT);
    });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.card}>
      <Link to={PAGE_ROUTES.TRAVEL_ROUTES} state={id}></Link>
      {isModalOpen ? (
        <ModalWindow onClose={handleCloseModal}>
          <BookRoute onSubmit={handleCloseModal} routeId={id} />
        </ModalWindow>
      ) : null}
      <h3>{title}</h3>
      <div>
        <div>
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
          <Button color="yellow" onClick={handleOpenModal}>
            Забронировать
          </Button>
        </div>
      )}
    </div>
  );
}
