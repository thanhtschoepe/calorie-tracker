"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const MealFoods_1 = require("./entity/MealFoods");
const DiaryEntries_1 = require("./entity/DiaryEntries");
const DiaryEntryFoods_1 = require("./entity/DiaryEntryFoods");
const DiaryEntryMeals_1 = require("./entity/DiaryEntryMeals");
const Food_1 = require("./entity/Food");
const Meal_1 = require("./entity/Meal");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [
        User_1.User,
        Food_1.Food,
        Meal_1.Meal,
        MealFoods_1.MealFoods,
        DiaryEntries_1.DiaryEntries,
        DiaryEntryFoods_1.DiaryEntryFoods,
        DiaryEntryMeals_1.DiaryEntryMeals,
    ],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map