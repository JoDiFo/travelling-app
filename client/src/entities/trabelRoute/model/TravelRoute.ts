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
  time: string[];
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
  time: string[];
}

export interface CreateRouteData {
  title: string;
  duration: string;
  cost: string;
  description: string;
  category: string;
  map: string;
  guide: string;
  region: string;
  time: string[];
}

export class RouteDataDto implements Omit<TravelRoute, "id"> {
  title: string;
  duration: number;
  cost: number;
  description: string;
  category: string;
  map: string;
  guide: string;
  region: string;
  time: string[];

  constructor(route: CreateRouteData) {
    this.title = route.title;
    this.duration = Number(route.duration);
    this.cost = Number(route.cost);
    this.description = route.description;
    this.category = route.category;
    this.map = route.map;
    this.guide = route.guide;
    this.region = route.region;
    this.time = route.time;
  }
}
