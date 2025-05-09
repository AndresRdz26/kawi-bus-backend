import { Injectable } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { Bus } from './entities/bus.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BusService {
  constructor(
    @InjectRepository(Bus)
    private readonly _repository: Repository<Bus>
  ) {

  }

  create(createBusDto: CreateBusDto) {
    const bus = new Bus()
    bus.chofer = createBusDto.chofer
    bus.location = createBusDto.location
    bus.startTripAt = createBusDto.startTripAt
    bus.endTripAt = createBusDto.endTripAt
    return this._repository.save(bus)
  }

  findAll() {
    return this._repository.find();
  }

  findOne(id: number) {
    return this._repository.findOne({ where: { id }});
  }

  update(id: number, updateBusDto: UpdateBusDto) {
    return `This action updates a #${id} bus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bus`;
  }
}
