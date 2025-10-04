import { IngredientsType } from "../types";

export const Ingredients = ({
  ingredients,
}: {
  ingredients: IngredientsType;
}) => {
  return (
    <section className="border-stone-150 space-y-300 border-b pb-400">
      <h2 className="text-brown-800 typo-2">Ingredients</h2>
      <ul className="typo-4 space-y-100">
        {ingredients.map((item, index) => (
          <li key={index} className="flex items-center space-x-200 pl-100">
            <p className="text-brown-800">・</p>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
