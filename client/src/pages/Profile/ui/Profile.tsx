import { RouteCardProps } from "@/widgets/RouteCard";
import { CardContainer } from "@/widgets/CardContainer";
import styles from "./style.module.scss";

const cardData: RouteCardProps[] = [
  {
    id: 1,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isBooked: true,
    date: "19/02",
  },
  {
    id: 2,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isBooked: true,
    date: "19/02",
  },
  {
    id: 3,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isBooked: true,
    date: "19/02",
  },
  {
    id: 4,
    title: "Великолепная троица",
    type: "Пеший",
    region: "Минск",
    duration: "4,5 часа",
    guide: "Симон Кирилл",
    cost: 24,
    isBooked: true,
    date: "19/02",
  },
];

export function Profile() {
  return (
    <main className={styles.homePage}>
      <h1>Забронированные маршруты</h1>
      <CardContainer cardData={cardData} />
    </main>
  );
}
