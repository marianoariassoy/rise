"use client";
import Container from "./Container";
import Link from "next/link";
import Social from "./Social";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white py-10">
      <Container className="flex flex-col gap-y-8">
        <div>
          <img src="/assets/iso.svg" alt="Isologo" className="h-10" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex gap-y-4 gap-x-20 flex-wrap">
            <ul>
              <li>
                {isHome ? (
                  <button
                    onClick={() => handleScroll("about")}
                    className="font-extrabold text-lg cursor-pointer hover:text-secondary"
                  >
                    Acerca de
                  </button>
                ) : (
                  <Link
                    href="/#about"
                    className="font-extrabold text-lg hover:text-secondary"
                  >
                    Acerca de
                  </Link>
                )}
              </li>
              <li>
                <Link href="equipo" className="hover:text-secondary">
                  Nuestro Equipo
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                {isHome ? (
                  <button
                    onClick={() => handleScroll("services")}
                    className="font-extrabold text-lg cursor-pointer hover:text-secondary"
                  >
                    Servicios
                  </button>
                ) : (
                  <Link
                    href="/#services"
                    className="font-extrabold text-lg hover:text-secondary"
                  >
                    Servicios
                  </Link>
                )}
              </li>
            </ul>
            <ul>
              <li>
                {isHome ? (
                  <button
                    onClick={() => handleScroll("projects")}
                    className="font-extrabold text-lg cursor-pointer hover:text-secondary"
                  >
                    Proyectos
                  </button>
                ) : (
                  <Link
                    href="/#projects"
                    className="font-extrabold text-lg hover:text-secondary"
                  >
                    Proyectos
                  </Link>
                )}
              </li>
              <li>
                <Link href="#" className="hover:text-secondary">
                  Italo II
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary">
                  Dean Funes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary">
                  Vicente Lopez
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3 justify-start items-start">
            {isHome ? (
              <button
                onClick={() => handleScroll("news")}
                className="font-extrabold text-lg cursor-pointer hover:text-secondary"
              >
                Novedades
              </button>
            ) : (
              <Link
                href="/#news"
                className="font-extrabold text-lg hover:text-secondary"
              >
                Novedades
              </Link>
            )}
            {isHome ? (
              <button
                onClick={() => handleScroll("contact")}
                className="font-extrabold text-lg cursor-pointer hover:text-secondary"
              >
                Contacto
              </button>
            ) : (
              <Link
                href="/#contact"
                className="font-extrabold text-lg hover:text-secondary"
              >
                Contacto
              </Link>
            )}
            <div className="text-primary mt-1">
              <Social />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
