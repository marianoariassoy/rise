"use client";
import { Team } from "@/types/types";
import { useInView } from "react-intersection-observer";

const TeamComponent = ({ data }: { data: Team[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const delays = [0, 0.4, 0.2, 0.6];

  return (
    <section
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
      ref={ref}
    >
      {data.map((item, index) => (
        <article
          key={index}
          className={`flex flex-col gap-y-4 opacity-0 ${inView ? "animate-fade-in" : ""}`}
          style={{
            animationDelay: `${delays[index % 4]}s`,
          }}
        >
          <div className="rounded-3xl overflow-hidden aspect-4/5">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="lg:text-lg font-bold text-center">{item.title}</h1>
        </article>
      ))}
    </section>
  );
};

export default TeamComponent;
