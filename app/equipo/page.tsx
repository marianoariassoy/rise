import TopSpace from "@/components/TopSpace";
import Container from "@/components/Container";
import Team from "@/components/Team";

export const metadata = {
  title: "Equipo",
};

const page = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/team", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <section>
      <TopSpace />

      <div className="gap-x-20 gap-y-8 grid grid-cols-1 lg:grid-cols-2 bg-primary text-white items-stretch">
        <div
          className="overflow-hidden h-full aspect-square lg:aspect-auto opacity-0 animate-fade-right"
          style={{
            backgroundImage:
              "url(https://backend.riiseyasociados.com.ar/images-static/equipo.jpg?v=15)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="py-8 lg:py-20 flex flex-col gap-y-8 relative max-w-xl px-4 lg:px-0 opacity-0 animate-fade-left">
          <div className="absolute -translate-y-10 lg:-translate-y-6 lg:-translate-x-8 text-4xl font-light text-secondary">
            +
          </div>
          <h1 className="text-3xl lg:text-5xl flex flex-col font-bold">
            Creemos en las alianzas que construyen futuro.
          </h1>
          <p className="text-xl leading-tight [&>strong]:font-extrabold">
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
