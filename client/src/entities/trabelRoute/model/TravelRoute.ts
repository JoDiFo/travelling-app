export interface TravelRoute {
  id: string;
  title: string;
  duration: number;
  cost: number;
  description: string;
  category: string;
  map: string;
  guide: string;
  region: string;
  time: [string, string];
  isFavorite?: boolean;
  isBooked?: boolean;
}

export interface TravelRouteResponse {
  id: string;
  title: string;
  duration: number;
  cost: number;
  description: string;
  category: string;
  map: string;
  guide: string;
  region: string;
  time: [string, string];
}

export type CreateRouteData = Omit<TravelRoute, "id">