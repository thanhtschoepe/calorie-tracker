"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealFoods = void 0;
const typeorm_1 = require("typeorm");
const Meal_1 = require("./Meal");
const Food_1 = require("./Food");
let MealFoods = class MealFoods {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MealFoods.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Meal_1.Meal, (meal) => meal.id),
    __metadata("design:type", Meal_1.Meal)
], MealFoods.prototype, "mealId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Food_1.Food, (food) => food.id),
    __metadata("design:type", Food_1.Food)
], MealFoods.prototype, "foodId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], MealFoods.prototype, "quantity", void 0);
MealFoods = __decorate([
    (0, typeorm_1.Entity)("mealFoods")
], MealFoods);
exports.MealFoods = MealFoods;
//# sourceMappingURL=MealFoods.js.map