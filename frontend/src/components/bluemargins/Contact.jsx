import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Instagram, BookOpen } from "lucide-react";
import Seal from "@/components/bluemargins/Seal";
import { newsletter, site, featuredQuote } from "@/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const iconFor = (label) => {
  const l = label.toLowerCase();
  if (l.includes("insta")) return Instagram;
  if (l.includes("press") || l.includes("book") || l.includes("substack")) return BookOpen;
  return Mail;
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/subscribe`, { email });
      toast.success("You’re in the margins. Thank you for subscribing.");
      setEmail("");
    } catch (err) {
      const status = err?.response?.status;
      if (status === 422) toast.error("That email doesn’t look right — try again.");
      else toast.error("Something went astray. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#DFEAF4]" data-testid="section-contact">
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Newsletter */}
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-[2.1rem] text-[#123A70]">
              {newsletter.heading}
            </h2>
            <p className="mt-3 font-body text-[1rem] leading-relaxed text-[#34383D] max-w-[34ch]">
              {newsletter.copy}
            </p>
            <form onSubmit={onSubmit} className="mt-6 flex gap-2 max-w-[420px]" data-testid="newsletter-form">
              <label htmlFor="nl-email" className="sr-only">{newsletter.placeholder}</label>
              <input
                id="nl-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                className="flex-1 bg-[#FFFDF8] border border-[#295A9B]/30 focus:border-[#295A9B] focus:outline-none px-4 py-2.5 font-body text-[#123A70] placeholder-[#295A9B]/50 text-[0.95rem]"
                data-testid="newsletter-input-email"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#123A70] text-[#FBF8F1] hover:bg-[#0E2B52] disabled:opacity-60 transition-colors px-5 py-2.5 font-body text-[0.9rem] whitespace-nowrap"
                data-testid="newsletter-submit-btn"
              >
                {loading ? "…" : newsletter.button}
              </button>
            </form>
          </div>

          {/* Let's Connect */}
          <div className="md:col-span-4 md:border-l md:border-dotted md:border-[#295A9B]/35 md:pl-10">
            <h3 className="font-display text-2xl text-[#123A70] mb-5">Let’s Connect</h3>
            <ul className="space-y-4 font-body text-[1rem] text-[#34383D]">
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-[#295A9B] shrink-0" strokeWidth={1.4} />
                <a
                  href={site.email.startsWith("[") ? "#contact" : `mailto:${site.email}`}
                  className="link-underline text-[#123A70]"
                  data-testid="contact-email"
                >
                  {site.email}
                </a>
              </li>
              {site.socials.map((s) => {
                const Icon = iconFor(s.label);
                return (
                  <li key={s.label} className="flex items-center gap-3">
                    <Icon size={17} className="text-[#295A9B] shrink-0" strokeWidth={1.4} />
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="link-underline text-[#123A70]"
                      data-testid={`contact-social-${s.label.toLowerCase()}`}
                    >
                      {s.handle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quote + BM seal */}
          <div className="md:col-span-4 md:border-l md:border-dotted md:border-[#295A9B]/35 md:pl-10 flex items-start gap-5">
            <blockquote className="flex-1">
              <span className="font-display text-4xl text-[#295A9B]/50 leading-none block mb-1" aria-hidden="true">&ldquo;</span>
              <p className="font-display italic text-[1.25rem] leading-snug text-[#123A70]">
                {featuredQuote}
              </p>
              <p className="font-hand text-xl text-[#295A9B] mt-3">— {site.name}</p>
            </blockquote>
            <Seal size={110} />
          </div>
        </div>
      </div>
    </section>
  );
}
