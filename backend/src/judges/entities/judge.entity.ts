import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Judge {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "text"
    })
    name: string
}
