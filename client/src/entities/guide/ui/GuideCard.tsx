import { Guide } from "../model/Guide";
import styles from "./styles.module.scss";

export function GuideCard({ name, phone }: Guide) {
  return (
    <div className={styles.guideCard}>
      <h3>{name}</h3>
      <p>Контакты: {phone}</p>
    </div>
  );
}
