import SliderServicios from "./SliderServicios";

const Servicios = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/services", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <section className="scroll-m-20" id="services">
      <SliderServicios data={data} />
    </section>
  );
};

export default Servicios;
