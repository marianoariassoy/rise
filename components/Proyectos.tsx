import SliderProjects from "./SliderProjects";

const Proyectos = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/projects", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <section id="projects">
      <SliderProjects data={data} />
    </section>
  );
};

export default Proyectos;
