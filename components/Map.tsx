"use client";
import { useInView } from "react-intersection-observer";
import { Pin } from "@/lib/icons";

const Map = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="w-full relative" ref={ref}>
      <div
        className={`absolute top-12 lg:top-[20vh] left-0 z-10 flex items-center opacity-0 ${inView ? "animate-fade-right" : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        <hr className="border-secondary w-8 lg:w-32" />
        <span className="flex items-center gap-x-2 pr-2 pl-6 py-2 rounded-full bg-secondary text-white shadow max-w-48 lg:max-w-auto">
          <span className="font-bold lg:text-lg leading-tight">
            Ubicaciónes Privilegiadas
          </span>
          <span className="bg-white shrink-0 text-secondary h-8 w-8 rounded-full flex items-center justify-center">
            <Pin />
          </span>
        </span>
      </div>
      <div className={`opacity-0 ${inView ? "animate-fade-in-slow" : ""}`}>
        <img src="/assets/map.webp" alt="Mapa" className="w-full" />
      </div>
    </div>
  );
};

export default Map;
