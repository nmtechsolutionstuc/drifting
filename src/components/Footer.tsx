import { AtSign, MapPin, MessageCircle } from "lucide-react";
import logo from "../assets/logo-drifting.webp";
import { BRAND, whatsappLink } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t-2 border-bone/10 bg-ink px-4 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <img src={logo} alt={BRAND.name} className="mb-4 h-9 w-32 object-contain object-left" />
          <p className="max-w-xs text-sm leading-relaxed text-bone-dim">
            Ropa unisex con estilo, actitud y flow. Con base en Tucumán, con envíos a todo el
            país.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-bone-dim">
              Contacto
            </p>
            <div className="flex flex-col gap-2 text-sm text-bone">
              <a
                href={whatsappLink("Hola! Quiero hacer una consulta")}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-acid"
              >
                <MessageCircle size={16} /> {BRAND.whatsappDisplay}
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-acid"
              >
                <AtSign size={16} /> @{BRAND.instagramHandle}
              </a>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-acid"
              >
                <MapPin size={16} /> {BRAND.location}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-bone-dim">
              Medios de pago
            </p>
            <p className="text-sm text-bone-dim">Transferencia, efectivo y coordinación por WhatsApp.</p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-bone-dim">
              Legal
            </p>
            <div className="flex flex-col gap-2 text-sm text-bone-dim">
              <span>Términos y condiciones</span>
              <span>Política de privacidad</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-bone/10 pt-6 font-mono text-[11px] uppercase tracking-widest text-bone-dim/60">
        © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
