import Container from "./Container";
import NovedadesCards from "./NovedadesCards";

const Novedades = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/news", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <section className="bg-primary text-white scroll-m-20" id="news">
      <Container className="py-24">
        <h1 className="text-center text-secondary text-xl">Novedades</h1>
        <h1 className="text-center text-4xl lg:text-6xl font-bold mb-12 lg:mb-20">
          Nuestras ultimas noticias
        </h1>
        <NovedadesCards data={data} />
      </Container>
    </section>
  );
};

export default Novedades;
