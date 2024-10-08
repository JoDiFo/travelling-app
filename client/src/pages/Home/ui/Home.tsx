import { CardContainer } from "@/widgets/CardContainer";
import styles from "./style.module.scss";
import { RouteCardProps } from "@/widgets/RouteCard";

const cardData: RouteCardProps[] = [
  {
    id: 1,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: false,
  },
  {
    id: 2,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: false,
  },
  {
    id: 3,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: false,
  },
  {
    id: 4,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isFavorite: false,
  },
];

export function Home() {
  return (
    <main className={styles.homePage}>
      <h1>Все маршруты</h1>
      <CardContainer cardData={cardData} />
    </main>
  );
}
