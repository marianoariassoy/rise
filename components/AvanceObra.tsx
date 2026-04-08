import Count from "./Count";
import { Forward } from "../lib/icons";

const ProgressBar = ({ percentage = 0 }: { percentage?: number }) => {
  const total = 5;
  const active = Math.floor((percentage / 100) * total);

  return (
    <div className="flex flex-col gap-y-2 mt-4">
      <div className="flex items-center gap-x-3">
        <span className="bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center">
          <Forward />
        </span>
        <span className="font-bold lg:text-2xl">Avance de obra</span>
      </div>
      <div className="flex items-center gap-3">
        <ul className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <li
              key={i}
              className={`w-10 lg:w-12 h-3 rounded-full border transition-all duration-300
              ${i < active ? "bg-primary border-primary" : "border-primary/60 bg-transparent"}`}
            />
          ))}
        </ul>

        <Count end={percentage} duration={3} />
      </div>
    </div>
  );
};

export default ProgressBar;
