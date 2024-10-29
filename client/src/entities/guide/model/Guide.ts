export interface Guide {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
}

export type GuideFormData = Omit<Guide, "id">;
