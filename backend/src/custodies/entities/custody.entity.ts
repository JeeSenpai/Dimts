import { Case } from "../../cases/entities/case.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Custody {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Case) 
    @JoinColumn({referencedColumnName: "id"}) 
    case: number;

    @Column({
        type: 'varchar',
        nullable: true
    })
    fname: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    mname: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    lname: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    suffix: string

    @Column({
        type: 'date',
        nullable: true
    })
    birth_date: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    height: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    weight: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    blood_type: string

    @Column({
        type: 'text',
        nullable: true
    })
    address: string

    @Column({
        nullable: true
    })
    pnp_status: boolean

    @Column({
        type: 'date',
        nullable: true
    })
    pnp_status_date: string

    @Column({
        nullable: true
    })
    bjmp_status: boolean

    @Column({
        type: 'date',
        nullable: true
    })
    bjmp_status_date: string

    @Column({
        nullable: true
    })
    bucor_status: boolean

    @Column({
        type: 'date',
        nullable: true
    })
    bucor_status_date: string

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



