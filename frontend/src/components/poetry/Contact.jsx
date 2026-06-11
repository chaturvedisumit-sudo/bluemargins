import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in every field of the letter.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Your letter has been sent. Thank you.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something stopped your letter mid-flight. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 border-t border-white/5 bg-[#06101F]"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-12 gap-10 md:gap-16">
        <div className="col-span-12 md:col-span-5 reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D4B886] mb-5">
            Send a letter
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight mb-8">
            Write to me,
            <br />
            <span className="italic">slowly.</span>
          </h2>
          <p className="text-slate-400 font-light leading-relaxed max-w-md">
            A note, a question, a favourite line, a request for signed copies —
            send anything that begins with <em className="font-serif-display text-slate-200">&ldquo;dear&rdquo;</em> and ends in
            patience.
          </p>

          <div className="mt-12 space-y-3 text-sm text-slate-500">
            <p>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400 block mb-1">
                Email
              </span>
              <span className="font-serif-display italic text-lg text-slate-200">
                hello@postcardsandpoetry.com
              </span>
            </p>
            <p className="pt-4">
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400 block mb-1">
                Letters take
              </span>
              <span className="font-serif-display italic text-lg text-slate-200">
                a few tides to reach the desk.
              </span>
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="col-span-12 md:col-span-6 md:col-start-7 reveal space-y-8"
          data-testid="contact-form"
        >
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 block mb-2">
              Your name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="who is writing?"
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-slate-600 focus:border-[#D4B886] focus:outline-none rounded-none px-0 py-3 transition-colors font-serif-display italic text-lg"
              data-testid="contact-input-name"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="where shall I write back?"
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-slate-600 focus:border-[#D4B886] focus:outline-none rounded-none px-0 py-3 transition-colors font-serif-display italic text-lg"
              data-testid="contact-input-email"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500 block mb-2">
              Your letter
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              placeholder="say anything. say it slowly."
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-slate-600 focus:border-[#D4B886] focus:outline-none rounded-none px-0 py-3 transition-colors font-serif-display italic text-lg resize-none"
              data-testid="contact-input-message"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-3 bg-[#D4B886] text-[#040810] hover:bg-[#E8CFA1] disabled:opacity-60 disabled:cursor-not-allowed transition-colors px-8 py-4 text-xs font-medium tracking-[0.25em] uppercase"
            data-testid="contact-submit-btn"
          >
            {loading ? "Sending…" : "Send the letter"}
            <Send
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
