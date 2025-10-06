import React, { useEffect, useState } from "react";
import logo from "../assets/Loomis_Logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Efeito de blur ao rolar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observa qual seção está visível
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll suave (rápido e sem pulo)
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - 70; // 70px p/ compensar navbar
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "sobre", label: "Sobre" },
    { id: "plataforma", label: "Plataforma" },
    { id: "planos", label: "Planos" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-white/40"
          : "bg-white/60 backdrop-blur-md border-b border-white/30"
      }`}
    >
      <div className="flex items-center gap-8 px-8 md:px-16 h-20">
        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center mr-6 focus:outline-none"
        >
          <img
            src={logo}
            alt="Loomis Logo"
            className="h-9 md:h-10 w-auto drop-shadow-sm transition-transform duration-300 hover:scale-[1.03]"
          />
        </button>

        {/* MENU */}
        <nav className="flex items-center gap-4 md:gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 shadow-sm ${
                activeSection === item.id
                  ? "text-white bg-blue-600 border border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.25)]"
                  : "text-blue-900 bg-white/70 border border-white/60 hover:bg-blue-100/70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
