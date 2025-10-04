import {
  IngredientsType,
  InstructionsType,
  NutritionType,
  PreparationsType,
  RecipeImageType,
  RecipeTitleType,
} from "../types";

export const omeletteTitle: RecipeTitleType = {
  title: "Simple Omelette Recipe",
  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
};

export const omeletteImage: RecipeImageType = {
  alt: "image-omelette",
  src: "/images/image-omelette.jpeg",
};

export const omelettePreparations: PreparationsType = [
  { timeLabel: "Total", timeValue: "Approximately 10 minutes" },
  { timeLabel: "Preparation", timeValue: "5 minutes" },
  { timeLabel: "Cooking", timeValue: "5 minutes" },
];

export const omeletteIngredients: IngredientsType = [
  "2-3 large eggs",
  "Salt, to tastes",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

export const omeletteInstructions: InstructionsType = [
  {
    stepTitle: "Beat the eggs",
    description:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    stepTitle: "Heat the pan",
    description:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    stepTitle: "Cook the omelette",
    description:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    stepTitle: "Add fillings (optional)",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    stepTitle: "Fold and serve",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    stepTitle: "Enjoy",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
];

export const omeletteNutrition: NutritionType = [
  { nutrient: "Calories", amount: "277kcal" },
  { nutrient: "Carbs", amount: "0g" },
  { nutrient: "Protein", amount: "20g" },
  { nutrient: "Fat", amount: "22g" },
];
