import { Button } from "@/shared/ui/Button";
import styles from "./styles.module.scss";
import { FormEvent } from "react";
import { Keyword } from "@/shared/ui/Keyword";

const times = [
  "19.01/13:00",
  "19.01/13:00",
  "19.01/13:00",
  "19.01/13:00",
  "19.01/13:00",
];

interface BookRouteProps {
  onSubmit: () => void;
}

export function BookRoute({ onSubmit }: BookRouteProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.bookModal}>
      <h2>Бронирование</h2>
      <h3>Выберите удобное время</h3>
      <div className={styles.time}>
        {times.map((time) => (
          <Keyword>{time}</Keyword>
        ))}
      </div>
      <div className={styles.navBar}>
        <Button type="button" onClick={onSubmit}>
          Назад
        </Button>
        <Button color="yellow" type="submit">
          Забронировать
        </Button>
      </div>
    </form>
  );
}
