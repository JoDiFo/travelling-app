import { Link, useLocation } from "react-router-dom";

import styles from "./style.module.scss";

import { PAGE_ROUTES } from "@/shared/utils/constants";
import classNames from "classnames";

export function Header() {
  const { HOME, PROFILE, FAVORITES } = PAGE_ROUTES;
  const path = useLocation().pathname;

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link className={classNames({ link__active: path === HOME })} to={HOME}>
          Маршруты
        </Link>
        <Link
          className={classNames({ link__active: path === FAVORITES })}
          to={FAVORITES}
        >
          Избранное
        </Link>
        <Link
          className={classNames({ link__active: path === PROFILE })}
          to={PROFILE}
        >
          Профиль
        </Link>
        <Link to="#">Помощь</Link>
      </nav>
    </header>
  );
}
