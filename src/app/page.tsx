import {
  omeletteImage,
  omeletteIngredients,
  omeletteInstructions,
  omeletteNutrition,
  omelettePreparations,
  omeletteTitle,
  RecipePage,
} from "./features/recipe";

const Home = () => {
  return (
    <RecipePage
      title={omeletteTitle}
      image={omeletteImage}
      preparations={omelettePreparations}
      ingredients={omeletteIngredients}
      instructions={omeletteInstructions}
      nutrition={omeletteNutrition}
    />
  );
};

export default Home;
