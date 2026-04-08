"use client";
import { useInView } from "react-intersection-observer";

interface Props {
  image: string;
}

const Gallery = ({ data }: { data: Props[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const delays = [0, 0.4, 0.2, 0.6];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 " ref={ref}>
      {data.map((item, index) => (
        <article
          className={`aspect-4/5 ${inView ? "animate-fade-in" : ""}`}
          key={index}
          style={{
            animationDelay: `${delays[index % 4]}s`,
          }}
        >
          <img
            src={item.image}
            alt="Gallery"
            className="w-full h-full object-cover object-center"
          />
        </article>
      ))}
    </div>
  );
};

export default Gallery;
