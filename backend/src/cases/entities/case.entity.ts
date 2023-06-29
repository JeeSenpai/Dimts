import { CaseType } from "../../case-type/entities/case-type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Case {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => CaseType) 
    @JoinColumn({referencedColumnName: "id"}) 
    caseType: number;

    @Column({
        type: 'tinyint'
    })
    caseStatus: boolean

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

    @Column({
        type: "date",
        default: null
    })
    raffle_date: string
    
    @Column({
        type: "int",
        default: 0
    })
    reopenCount: number

    @Column({
        type: "text",
        default: null
    })
    case_tag: string

    @Column({
        type: "text",
        default: null
    })
    case_checklist: string

    @Column({
        type: 'int',
        default: null
    })
    level: number

    @Column({
        type: "float",
        default: null
    })
    point_x: number

    @Column({
        type: "float",
        default: null
    })
    point_y: number

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
