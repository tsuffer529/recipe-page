import { PreparationsType } from "../types";

export const PreparationTime = ({
  preparations,
}: {
  preparations: PreparationsType;
}) => {
  return (
    <section className="space-y-200 rounded-xl bg-rose-50 p-300">
      <h2 className="typo-3 text-rose-800">Preparation time</h2>
      <ul className="typo-4 list-outside list-disc space-y-100 pl-300 marker:text-xs marker:text-rose-800">
        {preparations.map((item, index) => (
          <li key={index} className="pl-200">
            <span className="typo-5">{item.timeLabel}</span>
            {item.timeValue}
          </li>
        ))}
      </ul>
    </section>
  );
};
