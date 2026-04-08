import Count from "./Count";

const ProgressBar = ({ percentage = 0 }: { percentage?: number }) => {
  const total = 5;
  const active = Math.floor((percentage / 100) * total);

  return (
    <div className="flex items-center gap-4">
      <ul className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <li
            key={i}
            className={`w-6 lg:w-10 h-3 rounded-full border transition-all duration-300
              ${i < active ? "bg-white border-white" : "border-white/60 bg-transparent"}`}
          />
        ))}
      </ul>

      <Count end={percentage} duration={1} />
    </div>
  );
};

export default ProgressBar;
