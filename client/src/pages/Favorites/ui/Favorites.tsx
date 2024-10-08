import styles from "./style.module.scss";
import { RouteCardProps } from "@/widgets/RouteCard";
import { CardContainer } from "@/widgets/CardContainer";

const cardData: RouteCardProps[] = [
  {
    id: 1,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: true,
  },
  {
    id: 3,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: true,
  },
  {
    id: 4,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: true,
  },
];

export function Favorites() {
  return (
    <main className={styles.homePage}>
      <h1>Избранные маршруты</h1>
      <CardContainer cardData={cardData} />
    </main>
  );
}
