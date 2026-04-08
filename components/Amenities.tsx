import { Pool, Sun, Fire, Hot, Car, Security } from "@/lib/icons";

const AmenitiesItem = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <article className="flex flex-col items-center gap-y-2 w-30 hover:text-secondary">
      <div className="bg-primary rounded-2xl flex items-center justify-center text-white w-13 h-13 text-xl shadow cursor-pointer hover:scale-105 transition-all">
        {icon}
      </div>
      <h3 className="text-center text-sm font-medium">{title}</h3>
    </article>
  );
};

const Amenities = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 items-center justify-center gap-2 mt-4 relative">
      <hr className="absolute border-primary right-0 w-full top-6 -z-1 " />

      <AmenitiesItem title="Piscina" icon={<Pool />} />
      <AmenitiesItem title="Solárium" icon={<Sun />} />
      <AmenitiesItem title="Quincho" icon={<Fire />} />
      <AmenitiesItem title="Calfacción" icon={<Hot />} />
      <AmenitiesItem title="Cochera" icon={<Car />} />
      <AmenitiesItem title="Seguridad" icon={<Security />} />
    </div>
  );
};

export default Amenities;
