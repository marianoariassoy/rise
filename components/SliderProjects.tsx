"use client";
import { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Project } from "@/types/types";
import Button from "./Button2";
import Container from "./Container";
import Pildoras from "./Pildoras";
import { Forward } from "@/lib/icons";
import { useInView } from "react-intersection-observer";

const Slider = ({ data }: { data: Project[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [current, setCurrent] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slideRef = useRef<any>(null);

  type SlideRef = {
    goTo: (index: number) => void;
  };

  const goToSlide = (index: number) => {
    (slideRef.current as SlideRef)?.goTo(index);
  };

  return (
    <div className="relative w-full">
      <div
        className={`absolute w-full bottom-12 z-20 transition-all opacity-0 ${inView ? "animate-fade-up" : ""}`}
        ref={ref}
      >
        <Container className="text-white flex flex-col gap-y-8">
          <div className="flex flex-col items-start">
            <h2 className="text-xl text-secondary">Proyectos</h2>
            <h1 className="text-5xl lg:text-7xl font-black mb-4 transition-all">
              {data[current].title}
            </h1>
            <Button
              title="Conocé más"
              href={`/proyectos/${data[current].slug}`}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <Pildoras percentage={data[current].percent} />
            <hr className="border-white w-full" />
            <button
              className="cursor-pointer"
              onClick={() => goToSlide(current + 1)}
            >
              <span className="shrink-0 bg-white h-10 w-10 rounded-full flex items-center justify-center text-secondary hover:bg-secondary transition-all hover:text-white">
                <Forward />
              </span>
            </button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="font-bold text-lg lg:text-2xl">
              {data[current].date}
            </div>
            <div>
              <ul className="flex items-end gap-3">
                {data.map((item, index) => (
                  <li
                    key={item.id}
                    onClick={() => goToSlide(index)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <span
                      className={`w-3 h-3 border border-white rounded-full transition hover:bg-white ${
                        current === index ? "bg-white" : ""
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <Slide
        ref={slideRef}
        onChange={(oldIndex, newIndex) => setCurrent(newIndex)}
        autoplay={true}
        duration={5000}
        transitionDuration={500}
        infinite={true}
        pauseOnHover={false}
        arrows={false}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="h-screen w-screen bg-center bg-cover"
            style={{
              backgroundImage: `url(${item.image_hero})`,
            }}
          ></div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
