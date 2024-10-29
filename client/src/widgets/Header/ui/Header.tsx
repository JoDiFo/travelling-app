import { Link, useLocation } from "react-router-dom";

import styles from "./style.module.scss";

import { PAGE_ROUTES } from "@/shared/utils/constants";
import classNames from "classnames";
import { useAppSelector } from "@/app/redux";
import { selectAdminRole } from "@/app/redux/selectors";

export function Header() {
  const { HOME, PROFILE, FAVORITES, GUIDES } = PAGE_ROUTES;
  const path = useLocation().pathname;
  const isAdmin = useAppSelector(selectAdminRole);

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <Link className={classNames({ link__active: path === HOME })} to={HOME}>
          Маршруты
        </Link>
        {!isAdmin && (
          <Link
            className={classNames({ link__active: path === FAVORITES })}
            to={FAVORITES}
          >
            Избранное
          </Link>
        )}
        <Link
          className={classNames({ link__active: path === PROFILE })}
          to={PROFILE}
        >
          Профиль
        </Link>
        {isAdmin && (
          <Link
            className={classNames({ link__active: path === GUIDES })}
            to={GUIDES}
          >
            Добавить гида
          </Link>
        )}
        <Link to="#">Помощь</Link>
      </nav>
    </header>
  );
}
