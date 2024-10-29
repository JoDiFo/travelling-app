import { GuideContainer } from "@/widgets/GuideContainer";
import styles from "./styles.module.scss";
import { Guide, GuideService } from "@/entities/guide";
import { Button } from "@/shared/ui/Button";
import { useEffect, useState } from "react";
import { ModalWindow } from "@/shared/ui/ModalWindow";
import { CreateGuide } from "@/widgets/CreateGuide";
import { NotificationService } from "@/shared/utils/notificationService";
import { UPDATE_GUIDES_EVENT } from "@/shared/utils/constants";

export function Guides() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleGetGuides = async () => {
    const res = await GuideService.getGuides();
    setGuides(res.data);
  };

  useEffect(() => {
    handleGetGuides();
  }, []);

  useEffect(() => {
    NotificationService.subscribe(UPDATE_GUIDES_EVENT, handleGetGuides);

    return () => {
      NotificationService.unsubscribe(UPDATE_GUIDES_EVENT, handleGetGuides);
    };
  });

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <main className={styles.guides}>
      <h1>Экскурсионные гиды</h1>
      <GuideContainer guides={guides} />
      <div className={styles.menu}>
        <Button color="yellow" onClick={handleOpenModal}>
          Новый гид
        </Button>
      </div>
      {isOpen && (
        <ModalWindow onClose={handleCloseModal}>
          <CreateGuide onSubmit={handleCloseModal} />
        </ModalWindow>
      )}
    </main>
  );
}
