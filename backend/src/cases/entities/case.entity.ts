import { CaseDecision } from "src/case-decision/entities/case-decision.entity";
import { CaseStatus } from "src/case-status/entities/case-status.entity";
import { CaseType } from "src/case-type/entities/case-type.entity";
import { DocumentType } from "src/document-type/entities/document-type.entity";
import { Judge } from "src/judges/entities/judge.entity";
import { RaffledCourt } from "src/raffled-court/entities/raffled-court.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Case {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => CaseType) 
    @JoinColumn({referencedColumnName: "id"}) 
    caseType: number;

    @ManyToOne(type => CaseStatus) 
    @JoinColumn({referencedColumnName: "id"}) 
    caseStatus: number;

    @Column({
        type: "varchar"
    })
    case_no: string

    @Column({
        type: "text"
    })
    case_title: string

    @Column({
        type: "text"
    })
    case_description: string

    @Column({
        type: "date"
    })
    date_recieved: string
  
}
