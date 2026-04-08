import TopSpace from "@/components/TopSpace";
import { Pin, WhatsApp, Forward } from "@/lib/icons";
import AvanceObra from "@/components/AvanceObra";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";

export const metadata = {
  title: "Proyectos",
};

const page = () => {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
    {
      image:
        "https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg",
    },
  ];

  return (
    <section>
      <TopSpace />

      <div className="gap-x-20 gap-y-8 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div
          className="overflow-hidden h-full relative lg:aspect-auto opacity-0 animate-fade-right"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/28822840/pexels-photo-28822840.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="absolute left-1/2 -translate-x-1/2 bottom-20 flex bg-secondary text-white items-center gap-x-4 pr-2 pl-6 py-2 rounded-full hover:gap-x-6 transition-all"
          >
            <span className="font-bold text-lg">Descargá brochure</span>
            <span className="bg-white text-secondary h-8 w-8 rounded-full flex items-center justify-center">
              <span className="rotate-90">
                <Forward />
              </span>
            </span>
          </a>
        </div>

        <div className="py-20 flex flex-col gap-y-4 relative max-w-md px-4 lg:px-0 opacity-0 animate-fade-left">
          <header className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-2">
            <div>
              <h2 className="text-lg text-secondary">Proyectos</h2>
              <h1 className="text-5xl lg:text-7xl font-extrabold">Italo II</h1>
            </div>
            <div className="flex items-end gap-x-2 pb-1">
              <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
                <Pin />
              </span>
              Belgrano 1541
            </div>
          </header>
          <p className="leading-tight text-sm">
            A solo unas cuadras del centro de la ciudad, ítalo II se destaca por
            su diseño moderno y su propuesta de confort integral. El edificio
            ofrece piscina, solárium, espacios verdes, quincho con asador,
            calefacción central, cocheras y seguridad, todo pensado para elevar
            tu inversión y calidad de vida. Con más de 50 unidades distribuidas
            en 8 niveles, presenta monoambientes y departamentos de 1 y 2
            dormitorios, todos con excelentes terminaciones y detalles de
            categoría.
          </p>

          <Amenities />

          <AvanceObra percentage={50} />

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col lg:text-2xl leading-tight">
              <div>
                <span className="font-bold">40%</span> anticipo
              </div>
              <div>
                <span className="font-bold">+36</span> cuotas
              </div>
            </div>
            <div>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex bg-secondary text-white items-center gap-x-4 pr-2 pl-6 py-2 rounded-full hover:gap-x-6 transition-all"
              >
                <span className="font-bold text-lg">Consultanos</span>
                <span className="bg-white text-secondary h-8 w-8 rounded-full flex items-center justify-center">
                  <WhatsApp />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Gallery data={data} />

      <Map />
    </section>
  );
};

export default page;
