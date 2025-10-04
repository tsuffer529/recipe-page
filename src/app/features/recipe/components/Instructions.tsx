import { InstructionsType } from "../types";

export const Instructions = ({
  instructions,
}: {
  instructions: InstructionsType;
}) => {
  return (
    <section className="border-stone-150 space-y-300 border-b pb-400">
      <h2 className="text-brown-800 typo-2">Instructions</h2>
      <ol className="typo-4 marker:typo-5 marker:text-brown-800 list-outside list-decimal space-y-100 pl-300">
        {instructions.map((item, index) => (
          <li key={index} className="pl-200">
            <span className="typo-5">{item.stepTitle}</span>
            : {item.description}
          </li>
        ))}
      </ol>
    </section>
  );
};
