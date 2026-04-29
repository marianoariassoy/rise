"use client";
import Image from "next/image";
import { useState } from "react";
import { Pin } from "@/lib/icons";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

type Marker = {
  id: number;
  x: string;
  y: string;
  url: string;
  description: string;
};

const markers: Marker[] = [
  {
    id: 1,
    x: "66.5%",
    y: "20%",
    url: "/proyectos/dean-funes-1172",
    description: "Dean Funes 1172",
  },
  {
    id: 2,
    x: "74%",
    y: "36.5%",
    url: "/proyectos/vicente-lpez-954",
    description: "Vicente Lopez 954",
  },
  {
    id: 3,
    x: "70%",
    y: "49%",
    url: "/proyectos/pueyrredn-788",
    description: "Pueyrredon 788",
  },
  {
    id: 4,
    x: "39%",
    y: "46%",
    url: "/proyectos/25-de-mayo-743",
    description: "25 de Mayo 743",
  },
  {
    id: 5,
    x: "37%",
    y: "50%",
    url: "/proyectos/entre-rios-940",
    description: "Ente Rios 940",
  },
  {
    id: 6,
    x: "4.5%",
    y: "84%",
    url: "/proyectos/italo-ii",
    description: "Belgrano 1541",
  },
  {
    id: 7,
    x: "7%",
    y: "84%",
    url: "/proyectos/italo-ii",
    description: "Belgrano 1541",
  },
];

export default function InteractiveMap() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative w-full mx-auto  " ref={ref}>
      <div
        className={`absolute top-6 lg:top-12 lg:top-[20vh] left-0 z-10 flex items-center opacity-0 ${inView ? "animate-fade-right" : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        <hr className="border-secondary w-8 lg:w-32" />
        <span className="flex items-center gap-x-2 pr-2 pl-6 py-2 rounded-full bg-secondary text-white shadow max-w-40 lg:max-w-52 lg:max-w-auto">
          <span className="font-semibold text-sm lg:text-base leading-tight">
            Ubicaciónes Privilegiadas
          </span>
          <span className="bg-white shrink-0 text-secondary h-8 w-8 rounded-full flex items-center justify-center">
            <Pin />
          </span>
        </span>
      </div>

      {/* mapa */}
      <Image
        src="/assets/map.svg"
        alt="Mapa interactivo"
        width={1400}
        height={900}
        className="w-full h-auto rounded-xl"
      />

      {/* puntos */}
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute"
          style={{
            left: marker.x,
            top: marker.y,
            transform: "translate(-50%, -50%)",
          }}
          onMouseEnter={() => setActiveMarker(marker.id)}
          onMouseLeave={() => setActiveMarker(null)}
        >
          {/* botón */}
          <Link
            href={marker.url}
            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-xl shadow-lg hover:scale-110  cursor-pointer transition-all z-30"
          >
            +
          </Link>
          <div className="absolute bg-secondary top-0 left-0 w-full h-full -z-10 rounded-full ping-slow"></div>

          {/* tooltip */}
          {activeMarker === marker.id && (
            <div className="absolute -translate-x-8  bottom-14  bg-white rounded-xl shadow-xl p-4 min-w-[220px] z-20">
              <p className="text-sm text-gray-600">{marker.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
