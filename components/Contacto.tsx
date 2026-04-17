"use client";
import Container from "./Container";
import Form from "./Form";
import Social from "./Social2";
import { useInView } from "react-intersection-observer";

const Contacto = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="scroll-m-20" id="contact" ref={ref}>
      <Container className="py-24 flex flex-col lg:flex-row gap-x-20 gap-y-8">
        <div className={`opacity-0 ${inView ? "animate-fade-right" : ""}`}>
          <Form />
        </div>
        <div
          className={`flex flex-col gap-y-8 opacity-0 ${inView ? "animate-fade-left" : ""}`}
        >
          <div>
            <h3 className="text-secondary text-xl">Dirección</h3>
            <p className="text-2xl lg:text-4xl font-semibold">
              Av. Belgrano 1557 of.3 - Salta
            </p>
          </div>
          <div>
            <h3 className="text-secondary text-xl">Teléfono</h3>
            <p className="text-2xl lg:text-4xl font-semibold">
              +54 387 40660014
            </p>
          </div>
          <div>
            <h3 className="text-secondary text-xl mb-2">Redes</h3>
            <Social />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacto;
