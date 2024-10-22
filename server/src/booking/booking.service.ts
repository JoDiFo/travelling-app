import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../booking/booking.model';
import { Route } from 'src/routes/routes.model';
import { User } from 'src/users/user.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Booking)
    private userRepository: Repository<User>,
    @InjectRepository(Booking)
    private routeRepository: Repository<Route>

  ) {}

  async bookRoute(bookData: { userId: string, routeId: string }) {
    const user = await this.userRepository.findOne({ where: { id: bookData.userId } })
    const route = await this.routeRepository.findOne({ where: { id: bookData.routeId } })
    
    const book = this.bookingRepository.create({route: route, user: user})
    
    return await this.bookingRepository.save(book);
  }

//   async getBookingById(id: string): Promise<Booking> {
//     return this.bookingRepository.findOne({where: { id } });
//   }

  async getRoutesForUser(userId: string) {
    const bookings = await this.bookingRepository.find({ where: { user: {id: userId} } });
    return bookings.map(booking => booking.route);
  }

//   async updateBooking(id: string, booking: Booking): Promise<Booking> {
//     await this.bookingRepository.update(id, booking);
//     return this.bookingRepository.findOne({where: { id } });
//   }

//   async deleteBooking(id: string): Promise<void> {
//     await this.bookingRepository.delete(id);
//   }
}
