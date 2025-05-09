import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from './entities/trip.entity';
import { UsersModule } from 'src/users/users.module';
import { BusModule } from 'src/bus/bus.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Trip ]),
    UsersModule,
    BusModule 
  ],
  controllers: [TripController],
  providers: [TripService],
  exports: [ TripService ]
})
export class TripModule {}
