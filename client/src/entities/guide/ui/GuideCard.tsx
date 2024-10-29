import { Guide } from "../model/Guide";
import styles from "./styles.module.scss";

export function GuideCard({ name, surname, patronymic, phone }: Guide) {
  return (
    <div className={styles.guideCard}>
      <h3>{name} {surname} {patronymic}</h3>
      <p>Контакты: {phone}</p>
    </div>
  );
}
