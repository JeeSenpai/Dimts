import { CitizenMonitor } from "../../citizen_monitors/entities/citizen_monitor.entity";
import { Document } from "../../documents/entities/document.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Document) 
    @JoinColumn({referencedColumnName: "id"}) 
    document: number;

    @ManyToOne(type => CitizenMonitor) 
    @JoinColumn({referencedColumnName: "id"}) 
    monitor: number;

    @Column({
        nullable: true
    })
    notif_type: number

    @Column({
        nullable: true
    })
    notif_for: number 
    
    @Column({
        nullable: true
    })
    is_clicked: boolean

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
