"use client";
import Container from "./Container";
import { Forward } from "../lib/icons";
import { Service } from "@/types/types";
import { useInView } from "react-intersection-observer";

interface Props {
  data: Service;
  goToSlide: (index: number) => void;
  index: number;
}

const ServiciosItem = ({ data, goToSlide, index }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <article className="w-full relative" ref={ref}>
      <hr className="absolute border-primary w-1/5 top-1/2 -z-1 -translate-y-30 right-8" />
      <hr className="absolute border-primary w-1/2 top-1/2 -z-1 -translate-y-30 left-8" />

      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-26 gap-y-8 lg:gap-y-12 py-24">
        <div
          className={`aspect-square lg:aspect-5/7 opacity-0 
          ${inView ? "animate-fade-right" : ""}`}
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover object-center rounded-3xl"
          />
        </div>
        <div
          className={`flex flex-col px-4 items-start gap-y-4 lg:gap-y-8 bg-white opacity-0 
             ${inView ? "animate-fade-left" : ""}`}
        >
          <div>
            <h2 className="text-secondary text-xl lg:text-3xl mb-1">
              Nuestros Servicios
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              {data.title}
            </h1>
          </div>
          <p className="leading-tight">{data.text}</p>
          <button
            className="flex items-center gap-x-4 pr-2 pl-6 py-2 rounded-full border border-secondary bg-secondary text-white hover:gap-x-6 transition-all cursor-pointer"
            onClick={() => goToSlide(index + 1)}
          >
            <span className="font-bold lg:text-lg">Más servicios</span>
            <span className="bg-white text-secondary h-8 w-8 rounded-full flex items-center justify-center">
              <Forward />
            </span>
          </button>
        </div>
      </Container>
    </article>
  );
};

export default ServiciosItem;
