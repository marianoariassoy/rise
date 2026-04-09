"use client";
import { useState } from "react";
import NovedadesItem from "./NovedadesItem";
import { Forward } from "../lib/icons";
import { News } from "@/types/types";

const NovedadesCards = ({ data }: { data: News[] }) => {
  const [showItems, setShowItems] = useState(3);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.slice(0, showItems).map((item, index) => (
          <NovedadesItem
            key={index}
            title={item.title}
            slug={item.slug}
            short_text={item.short_text}
            image={item.image}
            date={item.date}
            index={index}
          />
        ))}
      </div>
      {showItems < data.length && (
        <div className="flex justify-center mt-20">
          <button
            onClick={() => setShowItems(showItems + 3)}
            className="flex items-center gap-x-4 pr-2 pl-6 py-2 rounded-full border border-secondary hover:gap-x-6 transition-all cursor-pointer"
          >
            <span className="font-bold text-lg">Más novedades</span>
            <span className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
              <span className="rotate-90">
                <Forward />
              </span>
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default NovedadesCards;
