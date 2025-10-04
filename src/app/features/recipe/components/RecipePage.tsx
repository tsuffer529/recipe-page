import Image from "next/image";
import { RecipePageProps } from "../types";
import { RecipeTitle } from "./RecipeTitle";
import { PreparationTime } from "./PreparationTime";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { Nutrition } from "./Nutrition";

export const RecipePage = ({
  title,
  image,
  preparations,
  ingredients,
  instructions,
  nutrition,
}: RecipePageProps) => {
  return (
    <div className="md:py-1600">
      <main className="mx-auto max-w-[clamp(23.438rem,9.065rem+61.32vw,38.5rem)] bg-white md:max-w-[clamp(38.5rem,29.929rem+17.86vw,46rem)] md:space-y-500 md:rounded-3xl md:p-500">
        <Image
          alt={image.alt}
          src={image.src}
          width={375}
          height={171}
          className="mx-auto w-full md:rounded-xl"
        />
        <article className="space-y-400 px-400 py-500 md:p-0">
          <RecipeTitle title={title} />
          <PreparationTime preparations={preparations} />
          <Ingredients ingredients={ingredients} />
          <Instructions instructions={instructions} />
          <Nutrition nutrition={nutrition} />
        </article>
      </main>
    </div>
  );
};
export default RecipePage;
