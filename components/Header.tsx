"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Social from "./Social";
import TopButton from "./TopButton";
import { usePathname } from "next/navigation";
import HamburgerButton from "./HamburgerButton";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      // Header
      const next = scrollY > 10;
      setScrolled((prev) => (prev === next ? prev : next));

      // Botón scroll top (aparece después de 1 viewport aprox)
      const trigger = window.innerHeight * 0.5;
      setShowTopButton(scrollY > trigger);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed opacity-0 animate-fade-in top-0 w-full flex items-center gap-x-4 px-4 lg:px-12 z-50 transition-all from-black/50 to-transparent bg-linear-to-b ${scrolled || !isHome ? "py-5 " : "py-12"}`}
      >
        <div className="flex-1 z-30 animate-fade-right">
          <Link href="/" onClick={() => handleScroll("hero")}>
            <img
              src="/assets/logo.svg"
              alt="Logo Riise & Asoc"
              className={`transition-all ${scrolled || !isHome ? "h-12" : "h-17"}`}
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Nav
            handleScroll={handleScroll}
            isHome={isHome}
            pathname={pathname}
            setMenuOpen={setMenuOpen}
          />
        </div>
        <div
          className={`fixed w-full h-full opacity-0 top-0 left-0 bg-black/70 backdrop-blur z-20 ${menuOpen ? "block animate-fade-in" : "hidden"}`}
        >
          <div className="absolute left-1/2 -translate-1/2 top-1/2 shadow">
            <Nav
              handleScroll={handleScroll}
              isHome={isHome}
              pathname={pathname}
              setMenuOpen={setMenuOpen}
            />
          </div>
        </div>
        <div className="flex-1 justify-end hidden lg:flex animate-fade-left">
          <Social />
        </div>

        <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      <TopButton scrollToTop={scrollToTop} showTopButton={showTopButton} />
    </>
  );
};

export default Header;
