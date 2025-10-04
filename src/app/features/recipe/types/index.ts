export type RecipeTitleType = { title: string; description: string };
export type RecipeImageType = { alt: string; src: string };
export type PreparationsType = { timeLabel: string; timeValue: string }[];
export type IngredientsType = string[];
export type InstructionsType = { stepTitle: string; description: string }[];
export type NutritionType = { nutrient: string; amount: string }[];

export type RecipePageProps = {
  title: RecipeTitleType;
  image: RecipeImageType;
  preparations: PreparationsType;
  ingredients: IngredientsType;
  instructions: InstructionsType;
  nutrition: NutritionType;
};
