"use client";
import { useRef, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Project } from "@/types/types";
import Container from "./Container";
import { Forward } from "../lib/icons";

const Slider = ({ data }: { data: Project[] }) => {
  const [current, setCurrent] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slideRef = useRef<any>(null);

  type SlideRef = {
    goTo: (index: number) => void;
  };

  const goToSlide = (index: number) => {
    (slideRef.current as SlideRef)?.goTo(index);
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        className="absolute bottom-30 w-full z-30 text-white opacity-0 animate-fade-up"
        style={{
          animationDelay: `.6s`,
        }}
      >
        <Container className="flex flex-col lg:flex-row justify-between lg:items-end gap-4">
          <div>
            <h1 className="flex flex-col text-3xl lg:text-7xl">
              <span className="font-black">Seguimos</span>
              <span className="font-bold">Construyendo</span>
            </h1>
            <p className="text-lg lg:text-2xl flex flex-col leading-tight">
              <span className="font-light">Un nuevo enfoque que combina</span>
              <span className="font-extrabold">
                trayectoria, calidad y funcionalidad.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-y-8">
            <ul className="flex flex-col lg:items-end lg:gap-1">
              {data.map((item, index) => (
                <li
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span className="text-lg font-extrabold">{item.title}</span>
                  <span
                    className={`w-3 h-3 border border-white rounded-full transition hover:bg-white ${
                      current === index ? "bg-white" : ""
                    }`}
                  />
                </li>
              ))}
            </ul>

            <button
              className="flex items-center gap-x-4 pr-2 pl-6 py-2 rounded-full border border-secondary hover:gap-x-6 transition-all cursor-pointer"
              onClick={() => handleScroll("projects")}
            >
              <span className="font-bold text-lg">+ Proyectos</span>
              <span className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
                <Forward />
              </span>
            </button>
          </div>
        </Container>
      </div>

      <div className="absolute top-0 left-0 bg-black/30 w-full h-full z-10"></div>
      <Fade
        ref={slideRef}
        onChange={(oldIndex, newIndex) => setCurrent(newIndex)}
        autoplay={true}
        duration={4000}
        transitionDuration={500}
        infinite={true}
        pauseOnHover={false}
        arrows={false}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="h-screen w-screen bg-center bg-cover animate-fade-in-slow bg-black"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;
