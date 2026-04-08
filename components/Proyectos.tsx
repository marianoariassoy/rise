import SliderProjects from "./SliderProjects";

const Proyectos = () => {
  const data = [
    {
      id: 1,
      title: "Italo II",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "01-05",
      percentage: 60,
    },
    {
      id: 2,
      title: "Dean Funes",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "11-02",
      percentage: 20,
    },
    {
      id: 3,
      title: "Belgrano",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
      date: "01-05",
      percentage: 90,
    },
  ];

  return (
    <section id="projects">
      <SliderProjects data={data} />
    </section>
  );
};

export default Proyectos;
