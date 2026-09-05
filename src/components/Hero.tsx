import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hero1 from "../assets/hero/hero-personaje-1.webp";
import hero2 from "../assets/hero/hero-personaje-2.webp";
import hero3 from "../assets/hero/hero-personaje-3.webp";
import hero4 from "../assets/hero/hero-personaje-4.webp";
import { BRAND, whatsappLink } from "../lib/constants";

const LOOKS = [
  { src: hero1, tag: "LOOK 01", ink: "var(--color-flare)", sizeCorrection: 1 },
  { src: hero2, tag: "LOOK 02", ink: "var(--color-acid)", sizeCorrection: 0.937 },
  { src: hero3, tag: "LOOK 03", ink: "var(--color-rust)", sizeCorrection: 0.833 },
  { src: hero4, tag: "LOOK 04", ink: "var(--color-flare)", sizeCorrection: 0.833 },
];

type Role = "center" | "left" | "right" | "back";

function roleStyle(role: Role, isMobile: boolean, sizeCorrection: number): React.CSSProperties {
  const base: React.CSSProperties = {
    position: "absolute",
    aspectRatio: "0.6 / 1",
    transformOrigin: "bottom center",
    transition:
      "transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1)",
    willChange: "transform, filter, opacity",
  };

  switch (role) {
    case "center":
      return {
        ...base,
        left: "50%",
        bottom: isMobile ? "20%" : 0,
        height: isMobile ? "58%" : "92%",
        transform: `translateX(-50%) scale(${(isMobile ? 1.05 : 1.1) * sizeCorrection})`,
        filter: "blur(0px)",
        opacity: 1,
        zIndex: 20,
      };
    case "left":
      return {
        ...base,
        left: isMobile ? "16%" : "28%",
        bottom: isMobile ? "30%" : "12%",
        height: isMobile ? "15%" : "27%",
        transform: `translateX(-50%) scale(${sizeCorrection})`,
        filter: "blur(2px)",
        opacity: 0.75,
        zIndex: 10,
      };
    case "right":
      return {
        ...base,
        left: isMobile ? "84%" : "72%",
        bottom: isMobile ? "30%" : "12%",
        height: isMobile ? "15%" : "27%",
        transform: `translateX(-50%) scale(${sizeCorrection})`,
        filter: "blur(2px)",
        opacity: 0.75,
        zIndex: 10,
      };
    case "back":
      return {
        ...base,
        left: "50%",
        bottom: isMobile ? "30%" : "12%",
        height: isMobile ? "12%" : "21%",
        transform: `translateX(-50%) scale(${sizeCorrection})`,
        filter: "blur(4px)",
        opacity: 0.9,
        zIndex: 5,
      };
  }
}

const AUTOPLAY_MS = 7000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isAnimatingRef = useRef(false);
  const lockRef = useRef<number | null>(null);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    LOOKS.forEach((look) => {
      const img = new Image();
      img.src = look.src;
    });
  }, []);

  useEffect(() => () => {
    if (lockRef.current) window.clearTimeout(lockRef.current);
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
  }, []);

  function restartAutoplay() {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoplayRef.current = window.setInterval(() => navigate("next"), AUTOPLAY_MS);
  }

  useEffect(() => {
    restartAutoplay();
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function navigate(dir: "next" | "prev") {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setActiveIndex((prev) => (dir === "next" ? (prev + 1) % 4 : (prev + 3) % 4));
    lockRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, 650);
  }

  function handleManualNavigate(dir: "next" | "prev") {
    navigate(dir);
    restartAutoplay();
  }

  const center = activeIndex;
  const left = (activeIndex + 3) % 4;
  const right = (activeIndex + 1) % 4;
  const back = (activeIndex + 2) % 4;
  const roles: Record<number, Role> = { [center]: "center", [left]: "left", [right]: "right", [back]: "back" };

  return (
    <section
      id="inicio"
      className="grain relative w-full overflow-hidden bg-ink"
      style={{ height: "100svh", minHeight: 640 }}
    >
      {/* giant ghost claim, scattered like a cover masthead line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[10%] flex select-none flex-col items-center gap-0 sm:top-[14%]"
      >
        <span
          className="font-display uppercase text-bone/[0.06]"
          style={{ fontSize: "clamp(90px, 26vw, 360px)", lineHeight: 0.85, letterSpacing: "-0.02em" }}
        >
          FLOW
        </span>
      </div>

      {/* scattered cover-line callouts */}
      <div className="pointer-events-none absolute inset-0 z-40">
        <span
          className="absolute left-[6%] top-36 rotate-[-4deg] font-mono text-[10px] font-bold uppercase tracking-widest text-ink sm:top-40 sm:text-xs"
          style={{ background: LOOKS[activeIndex].ink, padding: "0.2em 0.5em" }}
        >
          {LOOKS[activeIndex].tag}
        </span>
        <div
          className="absolute right-[6%] top-[16%] hidden -rotate-6 font-mono text-xs font-bold uppercase tracking-widest text-ink sm:block"
          style={{ background: "var(--color-acid)", padding: "0.35em 0.7em" }}
        >
          Envíos a todo el país 🇦🇷
        </div>
        <div
          className="absolute left-[5%] top-[30%] rotate-3 font-mono text-[10px] font-bold uppercase tracking-widest text-ink sm:left-[8%] sm:top-[36%] sm:text-xs"
          style={{ background: "var(--color-flare)", padding: "0.35em 0.7em" }}
        >
          Nueva colección
        </div>
        <a
          href={whatsappLink("Hola! Quiero ver la colección de Drifting")}
          target="_blank"
          rel="noreferrer noopener"
          className="pointer-events-auto absolute right-[8%] top-[42%] hidden -rotate-3 border-2 border-bone px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-bone transition hover:bg-bone hover:text-ink md:block"
        >
          Comprar por WhatsApp →
        </a>
      </div>

      {/* carousel */}
      <div className="absolute inset-0 z-10">
        {LOOKS.map((look, i) => {
          const role = roles[i];
          if (!role) return null;
          return (
            <div key={look.tag} style={roleStyle(role, isMobile, look.sizeCorrection)}>
              <img
                src={look.src}
                alt={`Look Drifting ${look.tag}`}
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom center" }}
              />
            </div>
          );
        })}
      </div>

      {/* bottom-left: masthead claim + nav controls */}
      <div className="absolute bottom-6 left-4 z-40 max-w-[280px] sm:bottom-10 sm:left-8 sm:max-w-[360px]">
        <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acid sm:text-xs">
          {BRAND.location}
        </p>
        <p
          className="font-display mb-3 text-3xl uppercase leading-[0.95] text-bone sm:mb-4 sm:text-5xl"
          style={{ letterSpacing: "-0.01em" }}
        >
          {BRAND.claim}
          <br />
          {BRAND.claimSub}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleManualNavigate("prev")}
            aria-label="Look anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-bone text-bone transition hover:scale-105 hover:bg-bone/10 sm:h-14 sm:w-14"
          >
            <ArrowLeft size={22} strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={() => handleManualNavigate("next")}
            aria-label="Look siguiente"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-bone text-bone transition hover:scale-105 hover:bg-bone/10 sm:h-14 sm:w-14"
          >
            <ArrowRight size={22} strokeWidth={2.25} />
          </button>
        </div>
      </div>

      {/* bottom-right: collection link */}
      <a
        href="#coleccion"
        className="misregister font-display absolute bottom-6 right-4 z-40 flex items-center gap-2 text-2xl uppercase text-bone transition hover:text-acid sm:bottom-10 sm:right-10 sm:text-4xl"
        data-text="VER COLECCIÓN"
        style={{ letterSpacing: "-0.02em" }}
      >
        Ver colección
        <ArrowRight className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={2.25} />
      </a>
    </section>
  );
}
