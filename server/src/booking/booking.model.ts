import { Route } from "src/routes/routes.model";
import { User } from "src/users/user.model";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne((type) => Route, (route) => route.id)
  @JoinColumn({ name: "route_id" })
  route: Route;

  @Column()
  time: Date;
}
