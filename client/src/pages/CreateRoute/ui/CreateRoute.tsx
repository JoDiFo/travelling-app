import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Keyword } from "@/shared/ui/Keyword";
import FileIcon from "@/shared/assets/File.svg";

export function CreateRoute() {
  return (
    <main className={styles.articlesPage}>
      <h1>Новый маршрут</h1>
      <form action="">
        <div className={styles.inputCells}>
          <div className={styles.inputCell}>
            <label htmlFor="">Название</label>
            <input type="text" placeholder="Введите данные" />
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Длительность (часов)</label>
            <input type="text" placeholder="Введите данные" />
          </div>
          <div className={styles.inputCell}>
            <label htmlFor="">Цена (BYN)</label>
            <input type="text" placeholder="Введите данные" />
          </div>
        </div>
        <label htmlFor="">Файл со статьей (только pdf)</label>
        <div className={styles.fileDownload}>
          <input type="file" accept=".pdf" />
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
          <Button>Назад</Button>
          <Button color="yellow">Создать</Button>
        </div>
      </form>
    </main>
  );
}
