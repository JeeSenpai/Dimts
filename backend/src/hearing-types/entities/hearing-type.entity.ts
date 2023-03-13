import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HearingType {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    description: string
}