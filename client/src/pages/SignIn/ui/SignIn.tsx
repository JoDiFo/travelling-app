import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginUser, useAppDispatch } from "@/app/redux";

interface FormData {
  login: string;
  password: string;
}

const defaultData: FormData = {
  login: "",
  password: "",
};

export function SignIn() {
  const [formData, setFormData] = useState<FormData>(defaultData);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name as keyof FormData]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    dispatch(loginUser())
  }

  return (
    <main className={styles.page}>
      <div>
        <h1>Для продолжения необходимо войти в систему</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Логин</label>
          <input
            id="login"
            name="login"
            type="text"
            placeholder="Введите логин"
            onChange={handleChange}
          />
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Введите пароль"
            onChange={handleChange}
          />
          <Button color="yellow">Войти</Button>
        </form>
        <p>
          Еще нету аккаунта?
          <Link to={PAGE_ROUTES.SIGNUP}>Создать</Link>
        </p>
      </div>
    </main>
  );
}
