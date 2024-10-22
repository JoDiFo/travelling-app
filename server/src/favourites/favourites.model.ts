import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../users/user.model';
import { Route } from 'src/routes/routes.model';

@Entity({name: 'favourites'})
export class Favourite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.favourites)
  user: User;

  @ManyToOne(() => Route, user => user.favourites)
  route: Route;
}
