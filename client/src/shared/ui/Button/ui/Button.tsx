import { ButtonHTMLAttributes, ReactNode } from "react";

import classNames from "classnames";

import styles from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: "blue" | "yellow";
  className?: string;
}

export function Button(props: ButtonProps) {
  const { children, color = "blue", className, ...rest } = props;

  return (
    <button
      {...rest}
      className={classNames(styles.primaryButton, className, {
        [styles.blue]: color === "blue",
        [styles.yellow]: color === "yellow",
      })}
    >
      {children}
    </button>
  );
}
