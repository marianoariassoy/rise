import Slider from "@/components/Slider";

const Hero = () => {
  const data = [
    {
      id: 1,
      title: "Italo II",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      id: 2,
      title: "Dean Funes",
      image:
        "https://images.pexels.com/photos/31467609/pexels-photo-31467609.jpeg",
    },
    {
      id: 3,
      title: "Belgrano",
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      id: 4,
      title: "Ameghino",
      image:
        "https://images.pexels.com/photos/26987997/pexels-photo-26987997.jpeg",
    },
  ];

  return (
    <section id="hero">
      <Slider data={data} />
    </section>
  );
};

export default Hero;
