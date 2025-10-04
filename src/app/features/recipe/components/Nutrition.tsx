import { NutritionType } from "../types";

export const Nutrition = ({ nutrition }: { nutrition: NutritionType }) => {
  return (
    <section className="space-y-300">
      <h2 className="text-brown-800 typo-2">Nutrition</h2>
      <p className="typo-4">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="w-full table-auto">
        <tbody>
          {nutrition.map((item, index) => (
            <tr key={index}>
              <th
                scope="row"
                className={`typo-4 pr-200 pl-400 text-left ${index === 0 ? "pb-150" : "py-150"} ${index < nutrition.length - 1 ? "border-stone-150 border-b" : ""}`}
              >
                {item.nutrient}
              </th>
              <td
                className={`typo-5 text-brown-800 pr-400 ${index === 0 ? "pb-150" : "py-150"} ${index < nutrition.length - 1 ? "border-stone-150 border-b" : ""}`}
              >
                {item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
