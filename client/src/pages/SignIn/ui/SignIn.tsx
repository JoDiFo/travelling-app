import { Button } from "@/shared/ui/Button";
import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginUser, useAppDispatch } from "@/app/redux";

interface FormData {
  email: string;
  password: string;
}

const defaultData: FormData = {
  email: "",
  password: "",
};

export function SignIn() {
  const [formData, setFormData] = useState<FormData>(defaultData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name as keyof FormData]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser(formData)).then(() => {
      navigate(PAGE_ROUTES.HOME);
      setFormData(defaultData);
    });
  };

  return (
    <main className={styles.page}>
      <div>
        <h1>Для продолжения необходимо войти в систему</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Логин</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Введите логин"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Введите пароль"
            onChange={handleChange}
            required
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
