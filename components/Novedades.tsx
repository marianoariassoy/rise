"use client";
import { useState } from "react";
import Container from "./Container";
import NovedadesItem from "./NovedadesItem";
import { Forward } from "../lib/icons";

const Novedades = () => {
  const [showItems, setShowItems] = useState(3);

  const data = [
    {
      id: 1,
      title: "Nuevo edificio",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "13-10-25",
    },
    {
      id: 2,
      title: "Nuevo edificio",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "13-10-25",
    },
    {
      id: 3,
      title: "Nuevo edificio",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "13-10-25",
    },
    {
      id: 4,
      title: "Nuevo edificio",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "13-10-25",
    },
    {
      id: 5,
      title: "Nuevo edificio",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "13-10-25",
    },
  ];
  return (
    <section className="bg-primary text-white scroll-m-20" id="news">
      <Container className="py-24">
        <h1 className="text-center text-secondary text-xl">Novedades</h1>
        <h1 className="text-center text-4xl lg:text-6xl font-bold mb-12 lg:mb-20">
          Nuestras ultimas noticias
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.slice(0, showItems).map((item, index) => (
            <NovedadesItem
              key={index}
              title={item.title}
              text={item.text}
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
      </Container>
    </section>
  );
};

export default Novedades;
