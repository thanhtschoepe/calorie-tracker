import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DiaryEntries } from "./DiaryEntries";
import { Meal } from "./Meal";

@Entity("diaryEntryMeals")
export class DiaryEntryMeals {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DiaryEntries, (diaryEntry) => diaryEntry.id)
  diaryEntryId: DiaryEntries;

  @ManyToOne(() => Meal, (meal) => meal.id)
  mealId: Meal;

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
