import baggiesPrint from "../assets/products/baggies-versatiles-1.webp";
import buzo from "../assets/products/buzos.webp";
import campera from "../assets/products/campera.webp";
import gorra from "../assets/products/gorra-3.webp";
import joggerRojo from "../assets/products/baggys-rusticos-2.webp";
import joggerRustico from "../assets/products/baggys-rusticos-1.webp";
import jeansBaggy from "../assets/products/jeans-baggy.webp";
import remera from "../assets/products/remeras-1.webp";
import { whatsappLink } from "../lib/constants";

const PRODUCTS = [
  { name: "Jean Baggy", tag: "MÁS PEDIDO", img: jeansBaggy, angle: "-rotate-2" },
  { name: "Jean Baggy Print", tag: "EDICIÓN LIMITADA", img: baggiesPrint, angle: "rotate-1" },
  { name: "Jogger Baggy Rústico", tag: "NUEVO", img: joggerRustico, angle: "rotate-2" },
  { name: "Jogger Baggy Rojo", tag: "COLOR", img: joggerRojo, angle: "-rotate-1" },
  { name: "Buzo Oversize", tag: "ABRIGO", img: buzo, angle: "rotate-1" },
  { name: "Campera Rompeviento", tag: "TEMPORADA", img: campera, angle: "-rotate-2" },
  { name: "Remera Oversize", tag: "UNISEX", img: remera, angle: "rotate-2" },
  { name: "Gorra Drifting", tag: "ACCESORIO", img: gorra, angle: "-rotate-1" },
];

export default function Collection() {
  return (
    <section id="coleccion" className="bg-ink px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-flare">
              Edición actual
            </p>
            <h2 className="font-display text-5xl uppercase leading-[0.9] text-bone sm:text-7xl">
              La colección
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-wide text-bone-dim">
            Piezas unisex, calce baggy y actitud. Todo con envío a cualquier punto del país.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={whatsappLink(`Hola! Me interesa el/la ${p.name} de Drifting`)}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex flex-col overflow-hidden border-2 border-bone/10 bg-ink-soft transition hover:border-acid"
            >
              <span
                className={`absolute left-2 top-2 z-10 ${p.angle} border border-bone/30 bg-ink/80 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-bone`}
              >
                {p.tag}
              </span>
              <div className="aspect-[4/5] overflow-hidden bg-bone/5">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 p-3 sm:p-4">
                <h3 className="font-display text-lg uppercase leading-tight text-bone sm:text-xl">
                  {p.name}
                </h3>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-acid opacity-0 transition group-hover:opacity-100">
                  Consultar por WhatsApp →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
