"use client";
import { News } from "@/types/types";
import Button from "./Button3";
import { useInView } from "react-intersection-observer";

interface Props extends News {
  index: number;
}

const NovedadesItem = ({ title, text, image, date, index }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const delays = [0, 0.3, 0.6];
  const delay = delays[index % 3];

  return (
    <article
      className={`flex flex-col gap-y-4 bg-white rounded-3xl text-primary overflow-hidden opacity-0 ${inView ? "animate-fade-up" : ""}`}
      ref={ref}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="px-6 pt-10 flex justify-end">
        <img src="/assets/iso.svg" alt="Isologo" className="h-8" />
      </div>
      <div className="flex flex-col gap-y-2 px-6">
        <h2 className="font-extrabold text-xl lg:text-3xl">{title}</h2>
        <p className="text-sm">{text}</p>
        <p className="text-sm text-secondary">{date}</p>
      </div>
      <div className="h-44 relative overflow-hidden">
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button title="Ver más" href="#" />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-1/2 bg-white z-10
              [clip-path:polygon(0_0,100%_0,100%_100%,50%_5%,0_100%)] -translate-y-1"
        ></div>
        <img
          src={image}
          alt="Foto de novedades"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </article>
  );
};

export default NovedadesItem;
