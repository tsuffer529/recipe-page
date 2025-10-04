import { RecipeTitleType } from "../types";

export const RecipeTitle = ({
  title: recipeTitle,
}: {
  title: RecipeTitleType;
}) => {
  return (
    <section className="space-y-300">
      <h1 className="typo-1 text-stone-900">{recipeTitle.title}</h1>
      <p className="typo-4">{recipeTitle.description}</p>
    </section>
  );
};
