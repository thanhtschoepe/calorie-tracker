import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("diaryEntries")
export class DiaryEntries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;
}
