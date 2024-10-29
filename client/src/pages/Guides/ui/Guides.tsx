import { GuideContainer } from "@/widgets/GuideContainer";
import styles from "./styles.module.scss";
import { Guide, GuideService } from "@/entities/guide";
import { Button } from "@/shared/ui/Button";
import { useEffect, useState } from "react";

export function Guides() {
  const [guides, setGuides] = useState<Guide[]>([]);

  const handleGetGuides = async () => {
    const res = await GuideService.getGuides();
    setGuides(res.data);
  };

  useEffect(() => {
    handleGetGuides();
  }, []);

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
