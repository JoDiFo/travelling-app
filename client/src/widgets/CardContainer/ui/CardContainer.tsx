import { RouteCard, RouteCardProps } from "@/widgets/RouteCard";

import styles from "./style.module.scss";

interface CardContainerProps {
  cardData: RouteCardProps[];
}

export function CardContainer({ cardData }: CardContainerProps) {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card) => (
        <RouteCard key={card.id} {...card} />
      ))}
    </div>
  );
}
