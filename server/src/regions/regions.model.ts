import { Route } from 'src/routes/routes.model';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({name: 'regions'})
export class Region {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string
  
  @OneToMany(() => Route, route => route.region)
  routes: Route[];
}
