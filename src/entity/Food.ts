import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("foods")
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "float" })
  portion_size: number;

  @Column({ type: "int" })
  calories: number;

  @Column({ type: "decimal" })
  protein: number;

  @Column({ type: "decimal" })
  carbs: number;

  @Column({ type: "decimal" })
  fats: number;

  @Column({ type: "varchar", length: 13 })
  barcode: string;

  @Column({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date;

  @Column({ default: true })
  active: boolean;

  @Column({ type: "jsonb", nullable: true })
  micros: any;

  @ManyToOne(() => User, (user) => user.id)
  owner: User;
}
