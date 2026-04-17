"use client";
import Container from "./Container";
import Button from "./Button";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Acercade = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      className="bg-primary text-white scroll-m-20 bg-no-repeat bg-contain relative"
      id="about"
      style={{ backgroundImage: `url(/assets/k.svg)` }}
      ref={ref}
    >
      <div className="absolute bottom-4 right-2 z-20">
        <img src="/assets/cross.svg" alt="Cross" />
      </div>
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-26 gap-y-12 py-24 pb-30">
        <div className="flex flex-col gap-y-12 lg:gap-y-20 relative">
          <div className={`opacity-0 ${inView ? "animate-fade-right" : ""}`}>
            <div className="absolute -translate-y-10 lg:-translate-y-6 lg:-translate-x-6 text-3xl font-light">
              +
            </div>
            <h1 className="text-3xl lg:text-5xl flex flex-col">
              <span className="font-bold">Nuestra historia</span>
              <span>como cimiento.</span>
            </h1>
          </div>
          <div
            className={`uppercase grid grid-cols-3 border border-white opacity-0 ${inView ? "animate-fade-in" : ""}`}
          >
            <div className="px-2 py-6 border-r border-white text-center">
              <h3 className="font-black text-xl lg:text-2xl">
                +<CountUp end={inView ? 40 : 0} duration={2} />
              </h3>
              <p className="font-light text-xs">Edificios Construidos</p>
            </div>
            <div className="px-2 py-6 border-r border-white text-center">
              <h3 className="font-black text-xl lg:text-2xl">
                +<CountUp end={inView ? 150 : 0} duration={3} /> MIL
              </h3>
              <p className="font-light text-xs">M2 Construidos</p>
            </div>
            <div className="px-2 py-6 text-center">
              <h3 className="font-black text-xl lg:text-2xl">
                +<CountUp end={inView ? 30 : 0} duration={4} />
              </h3>
              <p className="font-light text-xs">Años de Trayectoria</p>
            </div>
          </div>
        </div>
        <div
          className={`relative flex flex-col items-start gap-y-8 opacity-0 ${inView ? "animate-fade-left" : ""}`}
        >
          <div className="absolute -translate-y-10 lg:-translate-y-6 lg:-translate-x-8 text-3xl font-light text-secondary">
            +
          </div>
          <h1 className="text-2xl lg:text-4xl flex gap-x-2">
            <span className="font-bold">Seguimos</span>
            <span>Construyendo</span>
          </h1>
          <p>
            Con más de tres décadas de trayectoria en el Desarrollo
            Inmobiliario, seguimos construyendo con la misma visión y compromiso
            de siempre. Hoy evolucionamos hacia Riise y asociados, una marca que
            surge desde la experiencia y la confianza que nos caracterizan,
            impulsada por los mismos socios —Ing. Néstor Riise, Arq. Gabriel
            Layún y Arq. Lucio Mármol— para seguir desarrollando espacios que
            generen valor, bien- estar y futuro. <br />
            <br />
            Evolucionamos para seguir creciendo.
          </p>
          <Button title="Nuestro equipo" href="equipo" />
        </div>
      </Container>
    </section>
  );
};

export default Acercade;
