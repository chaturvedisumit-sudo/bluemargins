import { useEffect, useState } from "react";
import Nav from "@/components/bluemargins/Nav";
import Hero from "@/components/bluemargins/Hero";
import About from "@/components/bluemargins/About";
import Poems from "@/components/bluemargins/Poems";
import Books from "@/components/bluemargins/Books";
import Journal from "@/components/bluemargins/Journal";
import Contact from "@/components/bluemargins/Contact";
import Footer from "@/components/bluemargins/Footer";

export default function Landing() {
  const [active, setActive] = useState("home");

  /* ── Initial hash scroll ─────────────────────────────────────────
     When the page is opened with a #hash (e.g. /#books), the browser
     tries to scroll before React has rendered the target element.
     After mount, we read the hash and scroll to the section ourselves.
     Double-rAF ensures one paint cycle has completed so the element
     exists in the DOM. scrollIntoView respects each section's
     CSS scroll-margin-top, keeping headings clear of the sticky nav. */
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    let cancelled = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "instant" });
      });
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "poems", "books", "journal", "contact"];
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
        <Books />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
