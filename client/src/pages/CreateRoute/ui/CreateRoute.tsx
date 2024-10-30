import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import FileIcon from "@/shared/assets/File.svg";
import {
  CreateRouteData,
  RouteDataDto,
  TravelRouteService,
} from "@/entities/trabelRoute";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NotificationService } from "@/shared/utils/notificationService";
import {
  IMAGE_MAP,
  UPDATE_TRAVEL_ROUTES_EVENT,
  REGION_OPTIONS,
  CATEGORY_OPTIONS,
} from "@/shared/utils/constants";
import { Guide, GuideService } from "@/entities/guide";

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
  const [guides, setGuides] = useState<Guide[]>([]);

  const handleGetGuides = async () => {
    const res = await GuideService.getGuides();
    setGuides(res.data);
  };

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

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    handleGetGuides();
  }, []);

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
        <div className={styles.inputCell}>
          <label htmlFor="">Описание</label>
          <input
          className={styles.description}
            type="text"
            placeholder="Введите данные"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputCells}>
          <div className={styles.inputCell}>
            <label htmlFor="">Категория</label>
            <select
              name="category"
              onChange={handleSelect}
              value={formData.category}
            >
              {CATEGORY_OPTIONS.map(({ value, title }) => (
                <option key={value} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Регион</label>
            <select
              name="region"
              onChange={handleSelect}
              value={formData.category}
            >
              {REGION_OPTIONS.map(({ value, title }) => (
                <option key={value} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Карта маршрута</label>
            <select
              name="map"
              onChange={handleSelect}
              value={formData.category}
            >
              {IMAGE_MAP.map(({ id, title }) => (
                <option key={id} value={id}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Гид</label>
            <select
              name="guide"
              onChange={handleSelect}
              value={formData.category}
            >
              {guides.map(({ id, name, surname, patronymic }) => (
                <option key={id} value={`${name} ${surname} ${patronymic}`}>
                  {name} {surname} {patronymic}
                </option>
              ))}
            </select>
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
