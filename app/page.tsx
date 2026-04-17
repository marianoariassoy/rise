import Hero from "@/components/Hero";
import Acercade from "@/components/Acercade";
import Banner from "@/components/Banner";
import Servicios from "@/components/Servicios";
import Proyectos from "@/components/Proyectos";
import Novedades from "@/components/Novedades";
import Map from "@/components/Map";
import Contacto from "@/components/Contacto";
import Whatsapp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <Hero />
      <Acercade />
      <Banner />
      <Servicios />
      <Proyectos />
      <Novedades />
      <Map />
      <Contacto />
      <Whatsapp />
    </>
  );
}
