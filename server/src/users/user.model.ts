import { Booking } from "src/booking/booking.model";
import { Favourite } from "src/favourites/favourites.model";
import { Role } from "src/roles/roles.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', unique: true, nullable: false})
    email: string

    @Column({type: 'bytea', name: 'pass_hash'})
    password: string

    @ManyToMany(type => Role, role => role.users, {onDelete: 'CASCADE'})
    @JoinTable({name: 'users_roles'})
    roles: Role[]

    @OneToMany(type => Booking, booking => booking.user)
    bookings: Booking[]

    @OneToMany(type => Favourite, favourite => favourite.route)
    favourites: Favourite[]
}