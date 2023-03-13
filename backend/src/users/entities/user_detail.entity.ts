
import { UserType } from "src/user_type/entities/user_type.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}
