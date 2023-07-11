import { CaseType } from "../../case-type/entities/case-type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CaseDecision {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    description: number

    @Column({
        default: true
    })
    status: boolean

    @Column({
        default: true
    })
    inputs: boolean

    @ManyToOne(type => CaseType) 
    @JoinColumn({referencedColumnName: "id"}) 
    caseType: number;

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
