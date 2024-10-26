import { Button } from "@/shared/ui/Button";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
import { Keyword } from "@/shared/ui/Keyword";
import { TravelRouteService } from "@/entities/trabelRoute";
import { selectUser, useAppSelector } from "@/app/redux";

const times = [
  "19.01/13:00",
  "20.01/13:00",
  "21.01/13:00",
  "22.01/13:00",
  "23.01/13:00",
];

interface BookRouteProps {
  onSubmit: () => void;
  routeId: string;
}

export function BookRoute({ onSubmit, routeId }: BookRouteProps) {
  const userId = useAppSelector(selectUser)?.sub as string;

  const [selected, setSelected] = useState("");

  const handleSelect = (item: string) => () => {
    setSelected(item);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();

    if (!selected) {
      return;
    }

    TravelRouteService.bookRoute(userId, routeId, selected);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.bookModal}>
      <h2>Бронирование</h2>
      <h3>Выберите удобное время</h3>
      <div className={styles.time}>
        {times.map((time) => (
          <Keyword
            key={time}
            isSelected={selected === time}
            onClick={handleSelect(time)}
          >
            {time}
          </Keyword>
        ))}
      </div>
      <div className={styles.navBar}>
        <Button type="button" onClick={onSubmit}>
          Назад
        </Button>
        <Button color="yellow" type="submit" disabled={selected === ""}>
          Забронировать
        </Button>
      </div>
    </form>
  );
}
