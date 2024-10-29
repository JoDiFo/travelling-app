import { GuideContainer } from "@/widgets/GuideContainer";
import styles from "./styles.module.scss";
import { Guide } from "@/entities/guide";
import { Button } from "@/shared/ui/Button";

const guides: Guide[] = [
  { id: "0", name: "Roland", phone: "+375291234567" },
  { id: "1", name: "Roland", phone: "+375291234567" },
  { id: "2", name: "Roland", phone: "+375291234567" },
  { id: "3", name: "Roland", phone: "+375291234567" },
  { id: "4", name: "Roland", phone: "+375291234567" },
  { id: "5", name: "Roland", phone: "+375291234567" },
];

export function Guides() {
  return (
    <main className={styles.guides}>
      <h1>Экскурсионные гиды</h1>
      <GuideContainer guides={guides} />
      <div className={styles.menu}>
        <Button color="yellow">Новый гид</Button>
      </div>
    </main>
  );
}
