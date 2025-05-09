import { Injectable } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Trip } from './entities/trip.entity';
import { Repository } from 'typeorm';
import { BusService } from 'src/bus/bus.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TripService {

  constructor(
    @InjectRepository(Trip)
    private readonly _repository: Repository<Trip>,
    private readonly _busService: BusService,
    private readonly _userService: UsersService
  ){

  }

  async create(createTripDto: CreateTripDto) {
    const trip = new Trip();

    const bus = await this._busService.findOne(createTripDto.busId);
    if(bus == null) {
      return { message: 'Bus not found' };
    }

    const user = await this._userService.findOne(createTripDto.userId);
    if(user == null) {
      return { message: 'User not found' };
    }

    trip.userId = createTripDto.userId
    trip.busId = createTripDto.busId
    trip.bus = bus
    trip.user = user 
    return this._repository.save(trip);
  }

  findAllByUserId(userId: number){
    return this._repository.find({where: {userId: userId}});
  }

  findAll() {
    return `This action returns all trip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trip`;
  }

  update(id: number, updateTripDto: UpdateTripDto) {
    return `This action updates a #${id} trip`;
  }

  remove(id: number) {
    return `This action removes a #${id} trip`;
  }
}
