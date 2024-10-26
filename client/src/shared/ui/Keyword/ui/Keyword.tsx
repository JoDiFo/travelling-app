import { HtmlHTMLAttributes, ReactNode } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface KeywordProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  isSelected?: boolean;
  children?: ReactNode;
  className?: string;
}

export function Keyword(props: KeywordProps) {
  const { children, className, isSelected = false, ...rest } = props;
  return (
    <span
      className={classNames(className, styles.keyword, {
        [styles.selected]: isSelected,
      })}
      {...rest}
    >
      {children}
    </span>
  );
}
