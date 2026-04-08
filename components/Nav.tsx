import { nav } from "../lib/data";
import Link from "next/link";

interface Props {
  handleScroll: (id: string) => void;
  isHome: boolean;
}

const Nav = ({ handleScroll, isHome }: Props) => {
  return (
    <nav className="w-full lg:bg-primary text-white flex items-center justify-between px-10 py-10 lg:py-4 rounded-3xl lg:rounded-full lg:shadow-md">
      <div className="flex flex-col lg:flex-row gap-y-4 gap-x-8">
        {nav.map((item, index) =>
          isHome ? (
            <button
              key={item.tag}
              onClick={() => handleScroll(item.tag)}
              className={`cursor-pointer font-bold hover:text-secondary rounded ${index === nav.length - 1 ? "mt-8 lg:mt-0 lg:ml-20" : ""}`}
            >
              {item.title}
            </button>
          ) : (
            <Link
              key={index}
              href={"/#" + item.tag}
              className={`cursor-pointer font-bold hover:text-secondary  rounded ${index === nav.length - 1 ? "mt-8 lg:mt-0 lg:ml-20" : ""}`}
            >
              {item.title}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
};

export default Nav;
