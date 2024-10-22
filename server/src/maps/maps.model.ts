import { Route } from 'src/routes/routes.model';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'maps' })
export class Map {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bytea' })
  image: Buffer;

  @OneToMany(() => Route, route => route.map)
  routes: Route[];
}
