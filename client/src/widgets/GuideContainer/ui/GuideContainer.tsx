import { Guide, GuideCard } from "@/entities/guide";
import styles from "./styles.module.scss";

interface GuideContainerProps {
  guides: Guide[];
}

export function GuideContainer({ guides }: GuideContainerProps) {
  return (
    <div className={styles.guideContainer}>
      {guides.map((guide) => (
        <GuideCard key={guide.id} {...guide} />
      ))}
    </div>
  );
}
