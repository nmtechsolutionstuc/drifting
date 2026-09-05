import { Plus } from "lucide-react";
import { useState } from "react";
import { BRAND } from "../lib/constants";

const FAQS = [
  {
    q: "¿Dónde están ubicados?",
    a: `Estamos en ${BRAND.location}. La venta es principalmente online, por WhatsApp e Instagram.`,
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí, enviamos a cualquier punto de Argentina 🇦🇷. El costo y tiempo de envío se coordinan por WhatsApp según tu localidad.",
  },
  {
    q: "¿Cuánto tarda en llegar mi pedido?",
    a: "Depende de la localidad y el correo. Te confirmamos el tiempo estimado apenas coordinamos el envío por WhatsApp.",
  },
  {
    q: "¿Puedo cambiar una prenda si no me queda?",
    a: "Sí, podés coordinar el cambio escribiéndonos por WhatsApp o Instagram dentro de los primeros días de recibido el pedido.",
  },
  {
    q: "¿Cómo pago?",
    a: "Coordinamos el medio de pago disponible directamente por WhatsApp al hacer el pedido.",
  },
  {
    q: "¿Cómo hago un pedido?",
    a: "Elegís la prenda en la web y nos escribís por WhatsApp o Instagram con el talle y color que te interesa. Nosotros te confirmamos stock, precio y envío.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-flare">
          Dudas frecuentes
        </p>
        <h2 className="font-display mb-10 text-4xl uppercase leading-[0.9] text-bone sm:mb-14 sm:text-6xl">
          Antes de escribirnos.
        </h2>

        <div className="flex flex-col divide-y-2 divide-bone/10 border-y-2 border-bone/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-xl uppercase leading-tight text-bone sm:text-2xl">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-acid transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 text-sm leading-relaxed text-bone-dim">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
