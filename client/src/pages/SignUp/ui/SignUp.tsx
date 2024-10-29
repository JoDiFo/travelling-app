import { Button } from "@/shared/ui/Button";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerUser, useAppDispatch } from "@/app/redux";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultData: FormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

export function SignUp() {
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

    if (formData.password !== formData.password) {
      return;
    }

    dispatch(registerUser(formData)).then(() => {
      navigate(PAGE_ROUTES.HOME);
      setFormData(defaultData);
    });
  };

  return (
    <main className={styles.page}>
      <div>
        <h1>Создание аккаунта</h1>
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
          <label htmlFor="password">Введите пароль</label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Введите пароль"
            onChange={handleChange}
            required
          />
          <label htmlFor="repeatPassword">Повторите пароль</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="text"
            placeholder="Повторите пароль"
            onChange={handleChange}
            required
          />
          <Button type="submit" color="yellow">
            Создать
          </Button>
        </form>
        <p>
          Уже есть аккаунт?
          <Link to={PAGE_ROUTES.SIGNIN}>Войти</Link>
        </p>
      </div>
    </main>
  );
}
