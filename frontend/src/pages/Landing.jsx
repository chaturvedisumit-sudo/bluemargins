import { useEffect, useState } from "react";
import Nav from "@/components/bluemargins/Nav";
import Hero from "@/components/bluemargins/Hero";
import About from "@/components/bluemargins/About";
import Poems from "@/components/bluemargins/Poems";
import Journal from "@/components/bluemargins/Journal";
import FeaturedQuote from "@/components/bluemargins/FeaturedQuote";
import Contact from "@/components/bluemargins/Contact";
import Footer from "@/components/bluemargins/Footer";

export default function Landing() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "poems", "journal", "contact"];
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
    <div className="relative min-h-screen bg-[#FBF8F1]" data-testid="landing-root">
      {/* fixed blue page-margin rails */}
      <div className="margin-rails margin-rails-inner" aria-hidden="true" />
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Poems />
        <FeaturedQuote />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
