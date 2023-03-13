import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaseDecision {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    description: number
}
