import { CaseDecision } from "src/case-decision/entities/case-decision.entity";
import { Case } from "src/cases/entities/case.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Proceeding {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Case) 
    @JoinColumn({referencedColumnName: "id"}) 
    case: number

    @ManyToOne(type => CaseDecision) 
    @JoinColumn({referencedColumnName: "id"}) 
    caseDecision: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    minimum_sentence: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    minimum_duration: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    maximum_sentence: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    maximum_duration: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    minimum_fines: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    maximum_fines: string

    @Column({
        type: 'date',
        nullable: true
    })
    last_court_action: string

    @Column({
        type: 'text',
        nullable: true
    })
    remarks: string

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