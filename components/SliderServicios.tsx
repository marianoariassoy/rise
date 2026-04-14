"use client";
import { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Service } from "@/types/types";
import ServiciosItem from "./ServiciosItem";
import { Forward } from "@/lib/icons";

const Slider = ({ data }: { data: Service[] }) => {
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
    <div className="relative">
      <button className="cursor-pointer" onClick={() => goToSlide(current + 1)}>
        <span className="bg-secondary text-white h-12 w-12 rounded-full flex items-center justify-center hover:scale-105 transition-all z-20 absolute top-1/2 -translate-y-1/2 right-4">
          <Forward />
        </span>
      </button>

      <Slide
        ref={slideRef}
        onChange={(oldIndex, newIndex) => setCurrent(newIndex)}
        autoplay={false}
        transitionDuration={400}
        infinite={true}
        pauseOnHover={false}
        arrows={false}
      >
        {data.map((item, index) => (
          <ServiciosItem
            key={index}
            goToSlide={goToSlide}
            index={index}
            data={item}
          />
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
