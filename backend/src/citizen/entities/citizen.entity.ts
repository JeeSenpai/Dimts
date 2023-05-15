import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Citizen {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'text'
    })
    fname: string
    
    @Column({
        type: 'text',
        default: null
    })
    mname: string

    @Column({
        type: 'text'
    })
    lname: string

    @Column({
        type: 'text'
    })
    age: string

    @Column({
        type: 'text'
    })
    contact_no: string

    @Column({
        type: 'text'
    })
    email: string

    @Column({
        type: 'text'
    })
    address: string

    @Column({
        nullable: false,
        unique: true
    })
    username: string;
    
    @Column({
        nullable: false,
    })
    password: string;

    @Column({
        type: 'text',
        default: null
    })
    valid_id: string

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
