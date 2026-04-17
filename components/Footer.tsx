"use client";
import { useState, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import Social from "./Social";
import { usePathname } from "next/navigation";
import Axios from "axios";
import { Project } from "@/types/types";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/projects",
      );
      const res = response.data;
      setProjects(res);
      setLoading(false);
    };
    fetchData();
  }, []);

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
                    className="font-bold text-lg cursor-pointer hover:text-secondary"
                  >
                    Acerca de
                  </button>
                ) : (
                  <Link
                    href="/#about"
                    className="font-bold text-lg hover:text-secondary"
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
                    className="font-bold text-lg cursor-pointer hover:text-secondary"
                  >
                    Servicios
                  </button>
                ) : (
                  <Link
                    href="/#services"
                    className="font-bold text-lg hover:text-secondary"
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
                    className="font-bold text-lg cursor-pointer hover:text-secondary"
                  >
                    Proyectos
                  </button>
                ) : (
                  <Link
                    href="/#projects"
                    className="font-bold text-lg hover:text-secondary"
                  >
                    Proyectos
                  </Link>
                )}
              </li>
              {!loading &&
                projects.map((item, index) => (
                  <li key={index} onClick={() => handleScroll(item.slug)}>
                    <Link
                      href={`/proyectos/${item.slug}`}
                      className="hover:text-secondary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-3 justify-start items-start">
            {isHome ? (
              <button
                onClick={() => handleScroll("news")}
                className="font-bold text-lg cursor-pointer hover:text-secondary"
              >
                Novedades
              </button>
            ) : (
              <Link
                href="/#news"
                className="font-bold text-lg hover:text-secondary"
              >
                Novedades
              </Link>
            )}
            {isHome ? (
              <button
                onClick={() => handleScroll("contact")}
                className="font-bold text-lg cursor-pointer hover:text-secondary"
              >
                Contacto
              </button>
            ) : (
              <Link
                href="/#contact"
                className="font-bold text-lg hover:text-secondary"
              >
                Contacto
              </Link>
            )}
            <div className="text-primary mt-2 mb-2">
              <Social />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
