import { AxiosResponse } from "axios";
import { Guide } from "../model/Guide";
import { api } from "@/app/api";

export class GuideService {
  static getGuides(): Promise<AxiosResponse<Guide[]>> {
    return api.get("/guides");
  }

  static createGuide(guide: Omit<Guide, "id">): Promise<void> {
    return api.post("/guides", guide);
  }
}
