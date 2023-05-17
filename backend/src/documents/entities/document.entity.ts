import { Case } from "../../cases/entities/case.entity";
import { DocumentType } from "../../document-type/entities/document-type.entity";
import { Office } from "../../offices/entities/office.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Case) 
    @JoinColumn({referencedColumnName: "id"}) 
    case: number;

    @ManyToOne(type => DocumentType) 
    @JoinColumn({referencedColumnName: "id"}) 
    documentType: number;

    @ManyToOne(type => Office) 
    @JoinColumn({referencedColumnName: "id"}) 
    office: number;

    @ManyToOne(type => Office) 
    @JoinColumn({referencedColumnName: "id"}) 
    fromOffice: number

    @Column({
        type: 'varchar',
        nullable: true
    })
    control_number: string

    @Column({
        type: 'text',
        nullable: true
    })
    sender: string

    @Column({
        type: 'text',
        nullable: true
    })
    reciever: string

    @Column({
        type: 'text',
        nullable: true
    })
    address: string

    @Column({
        type: 'text',
        nullable: true
    })
    remarks: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    status: number

    @Column({
        type: 'date',
        nullable: true
    })
    sended_date: string

    
    @Column({
        type: 'date',
        nullable: true
    })
    acknowledge_date: string

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
