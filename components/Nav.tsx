import { nav } from "../lib/data";
import Link from "next/link";

interface Props {
  handleScroll: (id: string) => void;
  isHome: boolean;
  pathname: string;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = ({ handleScroll, isHome, pathname, setMenuOpen }: Props) => {
  return (
    <nav className="w-full lg:bg-primary text-white flex items-center justify-between px-10 py-10 lg:py-4 rounded-3xl lg:rounded-full lg:shadow-md">
      <div className="flex flex-col items-center lg:flex-row gap-y-4 gap-x-8 font-medium">
        {nav.map((item, index) =>
          item.tag === "equipo" ? (
            <Link
              key={index}
              onClick={() => setMenuOpen(false)}
              href={"/equipo"}
              className={`cursor-pointer hover:text-secondary  rounded ${pathname === "/equipo" ? "text-secondary" : ""}`}
            >
              {item.title}
            </Link>
          ) : isHome ? (
            <button
              key={item.tag}
              onClick={() => handleScroll(item.tag)}
              className={`cursor-pointer hover:text-secondary rounded ${index === nav.length - 1 ? "mt-8 lg:mt-0 lg:ml-20" : ""}`}
            >
              {item.title}
            </button>
          ) : (
            <Link
              key={index}
              onClick={() => setMenuOpen(false)}
              href={"/#" + item.tag}
              className={`cursor-pointer hover:text-secondary  rounded ${index === nav.length - 1 ? "mt-8 lg:mt-0 lg:ml-20" : ""}`}
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
