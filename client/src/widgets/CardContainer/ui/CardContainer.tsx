import { RouteCard } from "@/widgets/RouteCard";

import styles from "./style.module.scss";
import { TravelRoute } from "@/entities/trabelRoute";

interface CardContainerProps {
  cardData: TravelRoute[];
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
