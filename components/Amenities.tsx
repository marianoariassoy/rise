import { Pool, Sun, Fire, Hot, Car, Security } from "@/lib/icons";
import { Project } from "@/types/types";

const AmenitiesItem = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <article className="flex flex-col items-center gap-y-2 w-30 hover:text-secondary">
      <div className="bg-primary rounded-2xl flex items-center justify-center text-white w-12 h-12 text-xl shadow cursor-pointer hover:scale-105 transition-all">
        {icon}
      </div>
      <h3 className="text-center text-sm font-medium">{title}</h3>
    </article>
  );
};

const Amenities = ({ data }: { data: Project }) => {
  return (
    <div className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-2 mt-4 relative">
      <hr className="absolute border-primary right-0 w-full top-6 -z-1" />
      {data.pool ? <AmenitiesItem title="Piscina" icon={<Pool />} /> : null}
      {data.solarium ? <AmenitiesItem title="Solárium" icon={<Sun />} /> : null}
      {data.kitchen ? <AmenitiesItem title="Quincho" icon={<Fire />} /> : null}
      {data.heating ? (
        <AmenitiesItem title="Calfacción" icon={<Hot />} />
      ) : null}
      {data.garage ? <AmenitiesItem title="Cochera" icon={<Car />} /> : null}
      {data.security ? (
        <AmenitiesItem title="Seguridad" icon={<Security />} />
      ) : null}
    </div>
  );
};

export default Amenities;
