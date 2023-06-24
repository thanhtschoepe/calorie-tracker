import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { MealFoods } from "./entity/MealFoods";
import { DiaryEntries } from "./entity/DiaryEntries";
import { DiaryEntryFoods } from "./entity/DiaryEntryFoods";
import { DiaryEntryMeals } from "./entity/DiaryEntryMeals";
import { Food } from "./entity/Food";
import { Meal } from "./entity/Meal";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [
    User,
    Food,
    Meal,
    MealFoods,
    DiaryEntries,
    DiaryEntryFoods,
    DiaryEntryMeals,
  ],
  migrations: [],
  subscribers: [],
});
