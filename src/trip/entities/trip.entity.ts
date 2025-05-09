import { Bus } from "src/bus/entities/bus.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Trip {
    @PrimaryGeneratedColumn()
    declare id: number;
    
    @Column()
    declare userId: number

    @Column()
    declare busId: number

    @CreateDateColumn()
    declare createdAt: Date

    @ManyToOne(() => User, user => user.trips)
    declare user: User;

    @ManyToOne(() => Bus, bus => bus.trips, { eager: true  })
    declare bus: Bus;
}
