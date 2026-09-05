import { Star } from "lucide-react";

const EXAMPLES = [
  "\"Llegó bien empaquetado y el calce es tal cual la foto. Repito seguro.\"",
  "\"Buena tela, no se destiñe ni se deforma después de lavarlo varias veces.\"",
  "\"Consulté por WhatsApp y me ayudaron a elegir el talle. Todo rápido y sin vueltas.\"",
];

export default function SocialProof() {
  return (
    <section className="bg-ink px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-flare">
            Lo que dicen
          </p>
          <span className="border border-bone/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-bone-dim">
            Ejemplo — reemplazar por reseñas reales
          </span>
        </div>
        <h2 className="font-display mb-12 text-4xl uppercase leading-[0.9] text-bone sm:mb-16 sm:text-6xl">
          Directo de la calle.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {EXAMPLES.map((quote, i) => (
            <div key={i} className="flex flex-col gap-4 border-2 border-bone/10 bg-ink-soft p-6">
              <div className="flex gap-1 text-acid">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-bone-dim">{quote}</p>
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-bone/60">
                Cliente Drifting
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
