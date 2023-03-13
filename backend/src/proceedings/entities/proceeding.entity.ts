import { CaseDecision } from "src/case-decision/entities/case-decision.entity";
import { Case } from "src/cases/entities/case.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    maximum_sentence: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    sentence_duration: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    minimum_fines: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    maximum_fines: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    fines_equivalent: number

    @Column({
        type: 'text',
        nullable: true
    })
    remarks: string
}