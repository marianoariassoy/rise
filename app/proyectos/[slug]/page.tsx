import TopSpace from "@/components/TopSpace";
import { Pin, WhatsApp, Forward } from "@/lib/icons";
import AvanceObra from "@/components/AvanceObra";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: data.title,
    description: data.text,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `/${slug}`,
      title: data.name,
      description: data.text,
      images: [
        {
          url: data.image,
          width: 1080,
          height: 1080,
          alt: data.title,
        },
      ],
    },
  };
}

async function getServerSideProps(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${slug}`,
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getServerSideProps(slug);
  if (!data) return null;

  return (
    <section>
      <TopSpace />

      <div className="gap-x-20 gap-y-8 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div
          className="overflow-hidden h-full relative lg:aspect-auto opacity-0 animate-fade-right"
          style={{
            backgroundImage: "url(" + data.image + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {data.file !== null && (
            <a
              href={data.file}
              target="_blank"
              rel="noreferrer"
              className="absolute left-1/2 -translate-x-1/2 bottom-20 flex bg-secondary text-white items-center gap-x-4 pr-2 pl-6 py-2 rounded-full hover:gap-x-6 transition-all cursor-pointer"
            >
              <span className="font-bold text-lg">Descargá brochure</span>
              <span className="bg-white text-secondary h-8 w-8 rounded-full flex items-center justify-center">
                <span className="rotate-90">
                  <Forward />
                </span>
              </span>
            </a>
          )}
        </div>

        <div className="py-8 lg:py-20 flex flex-col gap-y-4 relative max-w-md px-4 lg:px-0 opacity-0 animate-fade-left">
          <header className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-y-2">
            <div>
              <h2 className="text-lg text-secondary">Proyectos</h2>
              <h1 className="text-4xl lg:text-6xl font-extrabold">
                {data.title}
              </h1>
            </div>
            <div className="flex items-end gap-x-2 pb-1">
              <span className="w-8 shrink-0 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
                <Pin />
              </span>
              <span className="font-medium leading-tight">{data.address}</span>
            </div>
          </header>
          <p className="leading-tight text-sm whitespace-break-spaces">
            {data.text}
          </p>

          <Amenities data={data} />

          <AvanceObra percentage={data.percent} />

          <div className="flex items-center justify-between mt-4">
            {data.advance !== null && (
              <div className="flex flex-col text-xl lg:text-2xl leading-tight">
                <div>
                  <span className="font-extrabold">{data.advance}%</span>{" "}
                  anticipo
                </div>
                <div>
                  <span className="font-extrabold">+{data.pays}</span> cuotas
                </div>
              </div>
            )}
            <div>
              <a
                href="https://wa.me/54938740660014"
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

      <Gallery data={data.images} />

      <Map />
    </section>
  );
};

export default page;
