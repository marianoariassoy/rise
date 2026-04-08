import SliderServicios from "./SliderServicios";

const Servicios = () => {
  const data = [
    {
      id: 1,
      title: "Desarrollo y construcción",
      text: "En Riise desarrollamos proyectos inmobiliarios desde su con- cepción hasta su ejecución final. Identificamos oportunidades estratégicas, analizamos el potencial de cada ubicación y dise- ñamos propuestas arquitectónicas que combinan calidad, fun- cionalidad y proyección de valor. Nuestro equipo técnico su- pervisa cada etapa de la obra para garantizar estándares constructivos elevados, cumplimiento de plazos y eficiencia en los procesos. Construimos con visión a largo plazo, priorizando solidez, diseño y sustentabilidad en cada detalle.",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      id: 2,
      title: "Diseño y construcción",
      text: "En Riise desarrollamos proyectos inmobiliarios desde su con- cepción hasta su ejecución final. Identificamos oportunidades estratégicas, analizamos el potencial de cada ubicación y dise- ñamos propuestas arquitectónicas que combinan calidad, fun- cionalidad y proyección de valor. Nuestro equipo técnico su- pervisa cada etapa de la obra para garantizar estándares constructivos elevados, cumplimiento de plazos y eficiencia en los procesos. Construimos con visión a largo plazo, priorizando solidez, diseño y sustentabilidad en cada detalle.",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      id: 3,
      title: "Diseño y construcción",
      text: "En Riise desarrollamos proyectos inmobiliarios desde su con- cepción hasta su ejecución final. Identificamos oportunidades estratégicas, analizamos el potencial de cada ubicación y dise- ñamos propuestas arquitectónicas que combinan calidad, fun- cionalidad y proyección de valor. Nuestro equipo técnico su- pervisa cada etapa de la obra para garantizar estándares constructivos elevados, cumplimiento de plazos y eficiencia en los procesos. Construimos con visión a largo plazo, priorizando solidez, diseño y sustentabilidad en cada detalle.",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
  ];

  return (
    <section className="scroll-m-20" id="services">
      <SliderServicios data={data} />
    </section>
  );
};

export default Servicios;
