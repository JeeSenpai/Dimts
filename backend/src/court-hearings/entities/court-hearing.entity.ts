import { Case } from "src/cases/entities/case.entity";
import { HearingType } from "src/hearing-types/entities/hearing-type.entity";
import { Judge } from "src/judges/entities/judge.entity";
import { RaffledCourt } from "src/raffled-court/entities/raffled-court.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CourtHearing {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Case) 
    @JoinColumn({referencedColumnName: "id"}) 
    case: number;

    @ManyToOne(type => HearingType) 
    @JoinColumn({referencedColumnName: "id"}) 
    hearingType: number;

    @ManyToOne(type => RaffledCourt) 
    @JoinColumn({referencedColumnName: "id"}) 
    raffledCourt: number;

    @ManyToOne(type => Judge) 
    @JoinColumn({referencedColumnName: "id"}) 
    judgeAssigned: number;

    @Column({
        type: "date"
    })
    hearing_schedule: string

    @Column({
        type: "time"
    })
    start_time: string

    @Column({
        type: "time"
    })
    end_time: string

    @Column({
        type: "text"
    })
    remarks: string

    @Column({
        type: 'int'
    })
    status: number

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
