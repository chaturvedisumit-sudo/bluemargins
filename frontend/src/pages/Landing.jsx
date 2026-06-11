import { useEffect, useState } from "react";
import Nav from "@/components/poetry/Nav";
import Hero from "@/components/poetry/Hero";
import Books from "@/components/poetry/Books";
import Poems from "@/components/poetry/Poems";
import Shop from "@/components/poetry/Shop";
import Contact from "@/components/poetry/Contact";
import Footer from "@/components/poetry/Footer";

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

export default function Landing() {
  useReveal();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "books", "poems", "shop", "contact"];
    const handler = () => {
      const y = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= y) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="grain min-h-screen bg-[#040810] text-[#F1F5F9]" data-testid="landing-root">
      <Nav active={active} />
      <main>
        <Hero />
        <Books />
        <Poems />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
