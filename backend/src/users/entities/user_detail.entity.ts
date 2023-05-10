
import { Office } from "src/offices/entities/office.entity";
import { UserType } from "src/user_type/entities/user_type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    fname: string;

    @Column({
        nullable: true
    })
    mname: string;

    @Column({
        nullable: false
    })
    lname: string;

    @ManyToOne(type => UserType)
    @JoinColumn({referencedColumnName: "id"})
    userType: number

    @ManyToOne(type => Office)
    @JoinColumn({referencedColumnName: "id"})
    office: number

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
