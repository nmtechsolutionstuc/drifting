import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-drifting.webp";
import { BRAND, NAV_LINKS, whatsappLink } from "../lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
        <a href="#inicio" className="block h-8 w-28 sm:h-10 sm:w-36">
          <img src={logo} alt={BRAND.name} className="h-full w-full object-contain object-left" />
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest text-bone md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="misregister" data-text={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Hola! Quiero hacer una consulta")}
          target="_blank"
          rel="noreferrer noopener"
          className="hidden border-2 border-acid px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-acid transition hover:bg-acid hover:text-ink md:block"
        >
          WhatsApp
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-bone md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="grain absolute inset-x-0 top-full flex flex-col gap-6 bg-ink px-6 py-10 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl uppercase text-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hola! Quiero hacer una consulta")}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block w-fit border-2 border-acid px-5 py-3 font-mono text-sm font-bold uppercase tracking-widest text-acid"
          >
            Escribir por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
