import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import FileIcon from "@/shared/assets/File.svg";
import {
  CreateRouteData,
  RouteDataDto,
  TravelRouteService,
} from "@/entities/trabelRoute";
import { ChangeEvent, FormEvent, useState } from "react";
import { NotificationService } from "@/shared/utils/notificationService";
import { UPDATE_TRAVEL_ROUTES_EVENT } from "@/shared/utils/constants";

const initialData: CreateRouteData = {
  title: "",
  duration: "",
  cost: "",
  description: "",
  category: "",
  map: "",
  guide: "",
  region: "",
  time: ["", ""],
};

export function CreateRoute() {
  const [formData, setFormData] = useState<CreateRouteData>(initialData);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    TravelRouteService.createRoute(new RouteDataDto(formData)).then(() => {
      NotificationService.dispatchEvent(UPDATE_TRAVEL_ROUTES_EVENT);
    });

    setFormData(initialData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className={styles.articlesPage}>
      <h1>Новый маршрут</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputCells}>
          <div className={styles.inputCell}>
            <label htmlFor="">Название</label>
            <input
              type="text"
              placeholder="Введите данные"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Длительность (часов)</label>
            <input
              type="text"
              placeholder="Введите данные"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Цена (BYN)</label>
            <input
              type="text"
              placeholder="Введите данные"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <label htmlFor="">Файл со статьей (только pdf)</label>
        <div className={styles.fileDownload}>
          <input type="image" />
          <img src={FileIcon} alt="file icon" />
        </div>
        <div className={styles.inputCells}>
          <div className={styles.inputCell}>
            <label htmlFor="">Категория</label>
            <input type="text" placeholder="Выберите значение" />
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Регион</label>
            <input type="text" placeholder="Выберите значение" />
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Карта маршрута</label>
            <input type="text" placeholder="Выберите значение" />
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Гид</label>
            <input type="text" placeholder="Выберите значение" />
          </div>
        </div>
        <div className={styles.timeArea}>
          <div className={styles.inputCell}>
            <label htmlFor="">Даты бронирования</label>
            <input type="text" placeholder="Введите данные" />
          </div>
          <div className={styles.keywords}>
            <Keyword>ключевое</Keyword>
            <Keyword>ключевое</Keyword>
            <Keyword>ключевое</Keyword>
            <Keyword>ключевое</Keyword>
            <Keyword>ключевое</Keyword>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button type="button">Назад</Button>
          <Button type="submit" color="yellow">
            Создать
          </Button>
        </div>
      </form>
    </main>
  );
}
