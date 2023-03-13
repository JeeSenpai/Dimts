import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RaffledCourt {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    description: string
}
