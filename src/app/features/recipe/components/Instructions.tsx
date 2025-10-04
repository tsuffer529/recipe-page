import { InstructionsType } from "../types";

export const Instructions = ({
  instructions,
}: {
  instructions: InstructionsType;
}) => {
  return (
    <section className="border-stone-150 space-y-300 border-b pb-400">
      <h2 className="text-brown-800 typo-2">Instructions</h2>
      <ol className="typo-4 space-y-100">
        {instructions.map((item, index) => (
          <li key={index} className="flex space-x-200 pl-100">
            <p className="text-brown-800 typo-5">{index + 1}.</p>
            <p>
              <span className="typo-5">{item.stepTitle}</span>
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
