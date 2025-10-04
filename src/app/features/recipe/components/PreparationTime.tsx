import { PreparationsType } from "../types";

export const PreparationTime = ({
  preparations,
}: {
  preparations: PreparationsType;
}) => {
  return (
    <section className="space-y-200 rounded-xl bg-rose-50 p-300">
      <h2 className="typo-3 text-rose-800">Preparation time</h2>
      <ul className="typo-4 space-y-100">
        {preparations.map((item, index) => (
          <div key={index} className="flex items-center space-x-200 pl-100">
            <p className="text-rose-800">・</p>
            <li>
              <span className="typo-5">{item.timeLabel}</span>
              {item.timeValue}
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};
