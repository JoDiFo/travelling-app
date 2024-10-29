import { Button } from "@/shared/ui/Button";
import styles from "./styles.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { GuideFormData, GuideService } from "@/entities/guide";
import { NotificationService } from "@/shared/utils/notificationService";
import { UPDATE_GUIDES_EVENT } from "@/shared/utils/constants";

const initialState: GuideFormData = {
  name: "",
  patronymic: "",
  phone: "",
  surname: "",
};

interface CreateGuideProps {
  onSubmit: () => void;
}

export function CreateGuide({ onSubmit }: CreateGuideProps) {
  const [formData, setFormData] = useState<GuideFormData>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();

    GuideService.createGuide(formData).then(() => {
      NotificationService.dispatchEvent(UPDATE_GUIDES_EVENT);
    });
    setFormData(initialState);
  };

  return (
    <div className={styles.createGuideModal}>
      <h2>Новый гид</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputFields}>
          <div className={styles.inputField}>
            <label htmlFor="surname">Фамилия</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Фамилия"
              onChange={handleChange}
              value={formData.surname}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="patronymic">Отчество</label>
            <input
              type="text"
              name="patronymic"
              id="patronymic"
              placeholder="Отчество"
              onChange={handleChange}
              value={formData.patronymic}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="phone">Телефон</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Телефон"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </div>
        </div>
        <div className={styles.menu}>
          <Button type="button">Назад</Button>
          <Button color="yellow" type="submit">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
}
