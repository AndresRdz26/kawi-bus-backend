import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Locations } from "../common/location.enum";
import { Trip } from "src/trip/entities/trip.entity";

@Entity()
export class Bus {
    @PrimaryGeneratedColumn()
    declare id: number;

    @Column({ type: "varchar", length: 255 })
    declare chofer: string;

    @Column({ type: "varchar" })
    declare location: string

    @Column({ type: "datetime"})
    declare startTripAt: Date

    @Column({ type: "datetime" })
    declare endTripAt: Date

    @OneToMany(() => Trip, trip => trip.bus)
    declare trips: Trip[]
}
