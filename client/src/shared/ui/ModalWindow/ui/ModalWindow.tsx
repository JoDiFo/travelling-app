import { ReactNode, MouseEvent } from "react";
import styles from "./styles.module.scss";

interface ModalWindowProps {
  children?: ReactNode;
  onClose: () => void;
}

export function ModalWindow({ children, onClose }: ModalWindowProps) {
  const handleChildrenClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className={styles.modalWindow} onClick={onClose}>
      <div onClick={handleChildrenClick}>{children}</div>
    </div>
  );
}
