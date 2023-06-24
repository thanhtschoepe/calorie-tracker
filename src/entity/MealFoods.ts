import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Meal } from "./Meal";
import { Food } from "./Food";

@Entity("mealFoods")
export class MealFoods {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Meal, (meal) => meal.id)
  mealId: Meal;

  @ManyToOne(() => Food, (food) => food.id)
  foodId: Food;

  @Column({ type: "decimal" })
  quantity: number;
}
