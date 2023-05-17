import { CaseTag } from "../../case-tags/entities/case-tag.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CaseChecklist {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type: 'text'
    })
    description: string

    @ManyToOne(type => CaseTag) 
    @JoinColumn({referencedColumnName: "id"}) 
    caseTag: number;

    @Column({
        default: true
    })
    status: boolean

    @Column()
    minPenalty: number

    @Column()
    maxPenalty: number
    
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
