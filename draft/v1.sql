CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    fullname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    hash VARCHAR(100) NOT NULL
);

CREATE TABLE Foods (
    id SERIAL PRIMARY KEY,
    'name' VARCHAR(50) NOT NULL,
    portion_size FLOAT NOT NULL,
    calories INT NOT NULL,
    protein DECIMAL NOT NULL,
    carbs DECIMAL NOT NULL,
    fats DECIMAL NOT NULL,
    'owner' INT,
    barcode VARCHAR(13) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    active BOOLEAN NOT NULL DEFAULT true,
    micros JSONB,
    FOREIGN KEY ('owner') REFERENCES Users(id)
);

CREATE TABLE Meals (
    id SERIAL PRIMARY KEY,
    'name' VARCHAR(50) NOT NULL,
    note TEXT,
    'owner' INT,
    FOREIGN KEY ('owner') REFERENCES Users(id)
);

CREATE TABLE MealFoods (
    id SERIAL PRIMARY KEY,
    mealId INT,
    foodId INT,
    quantity DECIMAL NOT NULL,
    FOREIGN KEY (mealId) REFERENCES Meals(id),
    FOREIGN KEY (foodId) REFERENCES Foods(id)
);

CREATE TABLE DiaryEntries (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    userId INT,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

CREATE TABLE DiaryEntryFoods (
    id SERIAL PRIMARY KEY,
    diaryEntryId INT,
    foodId INT,
    quantity DECIMAL NOT NULL,
    totalCalories DECIMAL NOT NULL,
    totalProtein DECIMAL NOT NULL,
    totalCarbs DECIMAL NOT NULL,
    totalFats DECIMAL NOT NULL,
    FOREIGN KEY (diaryEntryId) REFERENCES DiaryEntries(id),
    FOREIGN KEY (foodId) REFERENCES Foods(id)
);

CREATE TABLE DiaryEntryMeals (
    id SERIAL PRIMARY KEY,
    diaryEntryId INT,
    mealId INT,
    quantity DECIMAL NOT NULL,
    totalCalories DECIMAL NOT NULL,
    totalProtein DECIMAL NOT NULL,
    totalCarbs DECIMAL NOT NULL,
    totalFats DECIMAL NOT NULL,
    FOREIGN KEY (diaryEntryId) REFERENCES DiaryEntries(id),
    FOREIGN KEY (mealId) REFERENCES Meals(id)
);
