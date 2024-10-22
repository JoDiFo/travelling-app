import { Booking } from 'src/booking/booking.model';
import { Favourite } from 'src/favourites/favourites.model';
import { Guide } from 'src/guides/guide.model';
import { Map } from 'src/maps/maps.model';
import { Region } from 'src/regions/regions.model';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, OneToOne } from 'typeorm';

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

  @ManyToOne(() => Guide, guide => guide.routes)
  guide: Guide;

  @ManyToOne(() => Region, region => region.routes)
  region: Region;

  @ManyToOne(() => Map, region => region.routes)
  map: Map;

  @Column('text', { array: true })
  time: string[];

  @OneToMany(type => Booking, booking => booking.route)
  bookings: Booking[];

  @OneToMany(type => Favourite, favourite => favourite.route)
  favourites: Favourite[]
}
