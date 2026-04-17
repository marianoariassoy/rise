import TopSpace from "@/components/TopSpace";
import Container from "@/components/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news/${slug}`,
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
    `${process.env.NEXT_PUBLIC_API_URL}/news/${slug}`,
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
      <div
        className="w-full relative aspect-square lg:aspect-16/6 opacity-0 animate-fade-in"
        style={{
          backgroundImage: "url(" + data.image + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Container className="py-16 flex flex-col gap-y-4 lg:gap-y-8">
        <div>
          <h2 className="text-lg text-secondary">Novedades</h2>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <h1 className="text-4xl lg:text-6xl font-extrabold lg:mb-2">
              {data.title}
            </h1>
            {/* <h3 className="text-xl lg:text-2xl text-secondary shrink-0">
              {data.date}
            </h3> */}
          </div>
        </div>
        <p className="leading-tight text-lg whitespace-break-spaces">
          {data.text}
        </p>
      </Container>
    </section>
  );
};

export default page;
