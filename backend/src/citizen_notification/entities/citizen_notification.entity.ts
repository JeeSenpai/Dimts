import { Citizen } from "src/citizen/entities/citizen.entity";
import { Case } from "../../cases/entities/case.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CitizenNotification {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Case) 
    @JoinColumn({referencedColumnName: "id"}) 
    case: any;

    @ManyToOne(type => Citizen) 
    @JoinColumn({referencedColumnName: "id"}) 
    citizen: any;

    @Column()
    description: string

    @Column()
    isViewed: boolean

    @Column()
    isClicked: boolean

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
