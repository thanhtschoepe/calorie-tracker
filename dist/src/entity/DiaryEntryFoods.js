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
exports.DiaryEntryFoods = void 0;
const typeorm_1 = require("typeorm");
const DiaryEntries_1 = require("./DiaryEntries");
const Food_1 = require("./Food");
let DiaryEntryFoods = class DiaryEntryFoods {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DiaryEntryFoods.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DiaryEntries_1.DiaryEntries, (diaryEntry) => diaryEntry.id),
    __metadata("design:type", DiaryEntries_1.DiaryEntries)
], DiaryEntryFoods.prototype, "diaryEntryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Food_1.Food, (food) => food.id),
    __metadata("design:type", Food_1.Food)
], DiaryEntryFoods.prototype, "foodId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], DiaryEntryFoods.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], DiaryEntryFoods.prototype, "runningCalories", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], DiaryEntryFoods.prototype, "runningProtein", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], DiaryEntryFoods.prototype, "runningCarbs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], DiaryEntryFoods.prototype, "runningFats", void 0);
DiaryEntryFoods = __decorate([
    (0, typeorm_1.Entity)("diaryEntryFoods")
], DiaryEntryFoods);
exports.DiaryEntryFoods = DiaryEntryFoods;
//# sourceMappingURL=DiaryEntryFoods.js.map