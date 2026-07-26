import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Seal from "@/components/bluemargins/Seal";
import { newsletter, site } from "@/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

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
    <section
      id="contact"
      className="relative border-t border-[#295A9B]/12 bg-[#EDF3F8]"
      data-testid="section-contact"
    >
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Newsletter */}
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl text-[#123A70]">
              {newsletter.heading}
            </h2>
            <p className="mt-4 font-body text-[1.05rem] leading-relaxed text-[#34383D] max-w-[46ch]">
              {newsletter.copy}
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-[520px]"
              data-testid="newsletter-form"
            >
              <label htmlFor="nl-email" className="sr-only">
                {newsletter.placeholder}
              </label>
              <input
                id="nl-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                className="flex-1 bg-[#FFFDF8] border border-[#295A9B]/30 focus:border-[#295A9B] focus:outline-none px-4 py-3 font-body text-[#123A70] placeholder-[#295A9B]/50"
                data-testid="newsletter-input-email"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#123A70] text-[#FBF8F1] hover:bg-[#0E2B52] disabled:opacity-60 transition-colors px-7 py-3 font-body text-[0.95rem] whitespace-nowrap"
                data-testid="newsletter-submit-btn"
              >
                {loading ? "Subscribing…" : newsletter.button}
              </button>
            </form>

            {/* Let's Connect */}
            <div className="mt-14">
              <h3 className="font-display text-2xl text-[#123A70] mb-4">Let’s Connect</h3>
              <ul className="space-y-2 font-body text-[1.02rem] text-[#34383D]">
                <li>
                  <span className="text-[#295A9B]">Email — </span>
                  <a
                    href={site.email.startsWith("[") ? "#contact" : `mailto:${site.email}`}
                    className="link-underline text-[#123A70]"
                    data-testid="contact-email"
                  >
                    {site.email}
                  </a>
                </li>
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <span className="text-[#295A9B]">{s.label} — </span>
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
                ))}
              </ul>
            </div>
          </div>

          {/* Seal */}
          <div className="md:col-span-5 flex md:justify-end">
            <Seal size={150} />
          </div>
        </div>
      </div>
    </section>
  );
}
