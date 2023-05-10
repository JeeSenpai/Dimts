
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserDetails } from "./user_detail.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    email: string;
    
    @Column({
        nullable: false,
    })
    password: string;

    @Column()
    isValidated: boolean;

    @Column()
    otpVerified: boolean;

    @OneToOne(type => UserDetails) 
    @JoinColumn({referencedColumnName: "id"}) 
    userDetails: UserDetails;

    @Column()
    status: boolean;

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


