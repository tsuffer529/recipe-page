import { IngredientsType } from "../types";

export const Ingredients = ({
  ingredients,
}: {
  ingredients: IngredientsType;
}) => {
  return (
    <section className="border-stone-150 space-y-300 border-b pb-400">
      <h2 className="text-brown-800 typo-2">Ingredients</h2>
      <ul className="typo-4 marker:text-brown-800 list-outside list-disc space-y-100 pl-300 marker:text-xs">
        {ingredients.map((item, index) => (
          <li key={index} className="pl-200">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
