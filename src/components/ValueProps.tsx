import hero2 from "../assets/hero/hero-personaje-2.webp";

const POINTS = [
  {
    title: "Calidad que se nota",
    body: "Telas gruesas, costuras reforzadas y terminaciones pensadas para que la prenda aguante el uso diario, no solo la foto.",
  },
  {
    title: "Calce baggy real",
    body: "Nada de \"oversize\" a medias. Los calces están pensados para el volumen y la caída correcta, en todos los talles.",
  },
  {
    title: "100% unisex",
    body: "Cada prenda de la colección está pensada para cualquier cuerpo y cualquier persona. Sin secciones \"de hombre\" o \"de mujer\".",
  },
];

export default function ValueProps() {
  return (
    <section id="nosotros" className="bg-ink-soft px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative order-2 flex items-end justify-center overflow-hidden border-2 border-bone/10 bg-ink md:order-1">
          <span className="font-display absolute left-4 top-4 rotate-[-3deg] text-xs uppercase tracking-widest text-bone-dim sm:text-sm">
            Drifting — Tucumán
          </span>
          <img
            src={hero2}
            alt="Look Drifting en detalle"
            className="h-full max-h-[560px] w-auto object-contain"
          />
        </div>

        <div className="order-1 flex flex-col justify-center md:order-2">
          <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-acid">
            Propuesta de valor
          </p>
          <h2 className="font-display mb-8 text-4xl uppercase leading-[0.9] text-bone sm:text-6xl">
            Actitud, no
            <br />
            solo ropa.
          </h2>

          <div className="flex flex-col gap-8">
            {POINTS.map((point) => (
              <div key={point.title} className="border-l-2 border-flare pl-5">
                <h3 className="font-display mb-1 text-2xl uppercase text-bone">{point.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-bone-dim">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
