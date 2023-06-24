import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DiaryEntries } from "./DiaryEntries";
import { Food } from "./Food";

@Entity("diaryEntryFoods")
export class DiaryEntryFoods {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DiaryEntries, (diaryEntry) => diaryEntry.id)
  diaryEntryId: DiaryEntries;

  @ManyToOne(() => Food, (food) => food.id)
  foodId: Food;

  @Column({ type: "decimal" })
  quantity: number;

  @Column({ type: "int" })
  runningCalories: number;

  @Column({ type: "decimal" })
  runningProtein: number;

  @Column({ type: "decimal" })
  runningCarbs: number;

  @Column({ type: "decimal" })
  runningFats: number;
}
