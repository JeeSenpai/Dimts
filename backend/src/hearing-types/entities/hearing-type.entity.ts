import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class HearingType {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    description: string

    @Column({
        default: true
    })
    status: boolean

    @CreateDateColumn({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "created_at",     
     })
     datecreated: Date

    @UpdateDateColumn({
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at',
        type: "datetime"
     })
     dateupdated: Date
}