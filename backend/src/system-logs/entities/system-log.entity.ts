import { User } from "../../users/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SystemLog {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => User)
    @JoinColumn({referencedColumnName: "id"})
    user: number

    @CreateDateColumn({
        default: () => 'CURRENT_TIMESTAMP(6)',
        nullable: false,
        type: 'datetime',
        name: "date_login",     
     })
     date_login: Date
}
