const SIZES = [
  { size: "S", pecho: "104-110", largo: "68" },
  { size: "M", pecho: "111-117", largo: "70" },
  { size: "L", pecho: "118-124", largo: "72" },
  { size: "XL", pecho: "125-131", largo: "74" },
];

export default function SizeGuide() {
  return (
    <section id="talles" className="bg-ink-soft px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid">
            Antes de pedir
          </p>
          <h2 className="font-display mb-6 text-4xl uppercase leading-[0.9] text-bone sm:text-6xl">
            Guía de talles.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
            Todas las medidas son de referencia y están tomadas en centímetros, prenda extendida.
            Si estás entre dos talles o querés un calce más suelto, escribinos por WhatsApp antes
            de pedir y te ayudamos a elegir.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-bone/20 font-mono text-xs uppercase tracking-widest text-bone-dim">
                <th className="py-3 pr-4">Talle</th>
                <th className="py-3 pr-4">Contorno pecho (cm)</th>
                <th className="py-3">Largo total (cm)</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((row) => (
                <tr key={row.size} className="border-b border-bone/10">
                  <td className="py-4 pr-4 font-display text-2xl uppercase text-bone">{row.size}</td>
                  <td className="py-4 pr-4 text-sm text-bone-dim">{row.pecho}</td>
                  <td className="py-4 text-sm text-bone-dim">{row.largo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-bone-dim/70">
            Medidas de referencia — confirmá el talle exacto de cada prenda por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
