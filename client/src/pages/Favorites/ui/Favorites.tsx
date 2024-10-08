import styles from "./style.module.scss";
import { Button } from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";

export function Favorites() {
  return (
    <main className={styles.homePage}>
      <h1>Избранные статьи</h1>
      <div className={styles.pagination}>
        <Link to={PAGE_ROUTES.CREATE_ROUTE}>
          <Button className={styles.button}>Новая статья</Button>
        </Link>
      </div>
    </main>
  );
}
