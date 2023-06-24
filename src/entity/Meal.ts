import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";

@Entity("meals")
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "text", nullable: true })
  note: string;

  @ManyToOne(() => User, (user) => user.id)
  owner: User;
}
