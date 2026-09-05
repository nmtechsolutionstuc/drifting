import { Package, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Envíos a todo el país" },
  { icon: RefreshCcw, label: "Cambios sin drama" },
  { icon: ShieldCheck, label: "Calidad revisada" },
  { icon: Package, label: "Pedidos por WhatsApp" },
];

export default function TrustBar() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y-2 border-bone/10 bg-ink-soft py-4">
      <div className="flex w-max animate-marquee gap-12">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <item.icon className="h-4 w-4 text-acid" strokeWidth={2.5} />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bone/90">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
