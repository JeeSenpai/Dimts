
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

}


