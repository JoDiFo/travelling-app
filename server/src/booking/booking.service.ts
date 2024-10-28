import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Booking } from "../booking/booking.model";
import { Route } from "src/routes/routes.model";
import { User } from "src/users/user.model";

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Route)
    private routeRepository: Repository<Route>
  ) {}

  async bookRoute(bookData: { userId: string; routeId: string; time: string }) {
    const user = await this.userRepository.findOneBy({ id: bookData.userId });
    if (!user) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    const route = await this.routeRepository.findOne({
      where: { id: bookData.routeId },
    });

    if (!route) {
      throw new HttpException("Route not found", HttpStatus.NOT_FOUND);
    }

    const book = this.bookingRepository.create({
      route: route,
      user: user,
      time: bookData.time,
    });

    return await this.bookingRepository.save(book);
  }

  //   async getBookingById(id: string): Promise<Booking> {
  //     return this.bookingRepository.findOne({where: { id } });
  //   }

  async getRoutesForUser(userId: string) {
    const bookings = await this.bookingRepository.find({
      where: { user: { id: userId } },
      relations: ["route"],
    });

    return bookings.map((booking) => booking.route);
  }

  //   async updateBooking(id: string, booking: Booking): Promise<Booking> {
  //     await this.bookingRepository.update(id, booking);
  //     return this.bookingRepository.findOne({where: { id } });
  //   }

  //   async deleteBooking(id: string): Promise<void> {
  //     await this.bookingRepository.delete(id);
  //   }
}
