import { Mail, Instagram, Linkedin } from "lucide-react";
import Seal from "@/components/bluemargins/Seal";
import { site, featuredQuote } from "@/content";

const MediumIcon = ({ size = 17, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <ellipse cx="6.5" cy="12" rx="4.5" ry="6" />
    <ellipse cx="16" cy="12" rx="2" ry="6" />
    <ellipse cx="21" cy="12" rx="1" ry="6" />
  </svg>
);

const iconFor = (label) => {
  const l = label.toLowerCase();
  if (l.includes("insta")) return Instagram;
  if (l.includes("linked")) return Linkedin;
  if (l.includes("medium")) return MediumIcon;
  return Mail;
};

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#DFEAF4]" data-testid="section-contact">
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Let's Connect */}
          <div className="md:col-span-6">
            <h2 className="font-display text-3xl md:text-[2.1rem] text-[#123A70]">
              Let’s Connect
            </h2>
            <div className="h-px w-14 bg-[#295A9B]/50 my-6" aria-hidden="true" />
            <p className="font-body text-[1rem] leading-relaxed text-[#34383D] max-w-[42ch] mb-6">
              For readings, collaborations, or simply to say hello — a note is always welcome.
            </p>
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
          <div className="md:col-span-6 md:border-l md:border-dotted md:border-[#295A9B]/35 md:pl-10 flex items-start gap-5">
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
