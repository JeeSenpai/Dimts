import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaseType {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar'
    })
    description: string
}
