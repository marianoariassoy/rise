import Slider from "@/components/Slider";

const Hero = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/projects", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <section id="hero">
      <Slider data={data} />
    </section>
  );
};

export default Hero;
