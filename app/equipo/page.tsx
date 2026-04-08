import TopSpace from "@/components/TopSpace";
import Container from "@/components/Container";
import Team from "@/components/Team";

export const metadata = {
  title: "Equipo",
};

const page = () => {
  const data = [
    {
      id: 1,
      title: "Ing. Nestor Riise",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      id: 2,
      title: "Arq.Lucio Marmol",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      id: 3,
      title: "Arq.Gabriel Layún",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      id: 4,
      title: "Ing. Patricio Cornejo",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
  ];

  return (
    <section>
      <TopSpace />

      <div className="gap-x-20 gap-y-8 grid grid-cols-1 lg:grid-cols-2 bg-primary text-white items-stretch">
        <div
          className="overflow-hidden h-full aspect-square lg:aspect-auto opacity-0 animate-fade-right"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="py-8 lg:py-20 flex flex-col gap-y-8 relative max-w-md px-4 lg:px-0 opacity-0 animate-fade-left">
          <div className="absolute -translate-y-10 lg:-translate-y-6 lg:-translate-x-8 text-4xl font-light text-secondary">
            +
          </div>
          <h1 className="text-3xl lg:text-5xl flex flex-col">
            <span className="font-bold">Creemos en las alianzas</span>
            <span>
              que <span className="font-black">construyen futuro.</span>
            </span>
          </h1>
          <p className="text-xl leading-tight [&>strong]:font-black">
            <strong>Más de tres décadas</strong> construyendo juntos proyectos
            que trascienden los planos. <br />
            <strong>Hoyseguimos creciendo</strong>, impulsados por la misma
            visión: desarrollar espacios que generen
            <strong> valor, confianza y bienestar.</strong>
            <br /> <br />
            <strong>Tres socios, una sola visión.</strong>
          </p>
          <p className="text-xl font-bold">
            Arq. Gabriel Layún <span className="text-secondary">+</span> Ing.
            Nestor Riise <span className="text-secondary">+</span> Arq,Lucio
            Marmol
          </p>
        </div>
      </div>

      <Container className="py-16 flex flex-col gap-y-12">
        <div className="absolute -translate-y-10 lg:-translate-y-6 lg:-translate-x-8 text-4xl font-light text-secondary">
          +
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold">Nuestro equipo</h1>

        <Team data={data} />
      </Container>
    </section>
  );
};

export default page;
