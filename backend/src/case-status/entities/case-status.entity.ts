import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaseStatus {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    description: string
}
