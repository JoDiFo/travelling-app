import { Route } from 'src/routes/routes.model';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({name: 'guides'})
export class Guide {
  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column()
  surname: string
  
  @Column()
  name: string

  @Column()
  patronymic: string

  @Column()
  phone: string

  @OneToMany(() => Route, route => route.guide)
  routes: Route[]
}
