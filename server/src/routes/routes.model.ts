import { Booking } from 'src/booking/booking.model';
import { Favourite } from 'src/favourites/favourites.model';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class Route {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  cost: number;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  guide: string;

  @Column()
  region: string;

  @Column('text', { array: true })
  time: string[];

  @OneToMany(type => Booking, booking => booking.route)
  bookings: Booking[];

  @OneToMany(type => Favourite, favourite => favourite.route)
  favourites: Favourite[]
}
