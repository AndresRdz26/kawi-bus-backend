import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    declare id: number;

    @Column({ type: "int", unique: true})
    declare code: number

    @Column({ type: "varchar", unique: true, length: 255 })
    declare email: string

    @Exclude()
    @Column({ type: "varchar", length: 255})
    declare nip: string
}
