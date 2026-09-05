import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section className="grain relative overflow-hidden bg-ink-soft px-4 py-20 sm:px-8 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display uppercase text-bone/[0.05]"
        style={{ fontSize: "clamp(80px, 20vw, 260px)", lineHeight: 0.85 }}
      >
        DRIFT
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid">
          Sumate a la lista
        </p>
        <h2 className="font-display mb-4 text-4xl uppercase leading-[0.95] text-bone sm:text-6xl">
          10% off tu primer pedido
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-bone-dim">
          Dejanos tu mail y te mandamos el cupón, más los drops y lanzamientos antes que nadie.
        </p>

        {sent ? (
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-acid">
            ¡Listo! Revisá tu correo en los próximos minutos.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 border-2 border-bone/20 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-bone-dim/60 focus:border-acid focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 border-2 border-acid bg-acid px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-ink transition hover:bg-transparent hover:text-acid"
            >
              Quiero mi cupón
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
