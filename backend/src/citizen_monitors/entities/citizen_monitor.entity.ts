import { Case } from "../../cases/entities/case.entity";
import { Citizen } from "../../citizen/entities/citizen.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CitizenMonitor {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Citizen) 
    @JoinColumn({referencedColumnName: "id"}) 
    citizen: any;

    @ManyToOne(type => Case) 
    @JoinColumn({referencedColumnName: "id"}) 
    case: any;

    @Column({
        type: 'text'
    })
    relationship: string

    @Column()
    is_verified: boolean

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
