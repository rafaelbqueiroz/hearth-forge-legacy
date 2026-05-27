import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type Hotspot = {
  id: string;
  x: number; // 0-100 %
  y: number; // 0-100 %
  title: string;
  category: "Aço" | "Vedação" | "Vidro" | "Combustão";
  body: string;
  spec?: string;
};

export const DEFAULT_HOTSPOTS: Hotspot[] = [
  {
    id: "aco",
    x: 28,
    y: 72,
    category: "Aço",
    title: "Base em aço carbono 12,7 mm",
    body: "Chapa de meia polegada na base de fogo — três a quatro vezes mais espessa que o padrão de mercado. Garante inércia térmica, evita empenamento e prolonga a vida útil acima dos 20 anos.",
    spec: "ASTM A36 · 12,7 mm",
  },
  {
    id: "vedacao",
    x: 50,
    y: 50,
    category: "Vedação",
    title: "Cordão cerâmico Inconel 1260 °C",
    body: "Vedação trançada em fibra cerâmica reforçada com fio Inconel ao redor de todo o vidro e da porta. Mantém a câmara hermética mesmo em ciclos prolongados de alta temperatura.",
    spec: "Resistência contínua até 1260 °C",
  },
  {
    id: "vidro",
    x: 50,
    y: 30,
    category: "Vidro",
    title: "Vidro Schott Robax® autolimpante",
    body: "Vitrocerâmica alemã de 4 mm com tratamento autolimpante. Suporta choque térmico de até 760 °C e mantém a chama sempre visível sem fuligem aderida.",
    spec: "Schott Robax® · 760 °C",
  },
  {
    id: "combustao",
    x: 72,
    y: 58,
    category: "Combustão",
    title: "Dupla combustão com ar pré-aquecido",
    body: "Tubos superiores injetam ar secundário pré-aquecido, queimando os gases residuais. Resultado: mais calor por lenha, menos fumaça e menos creosoto na chaminé.",
    spec: "Eficiência ~75% · emissão reduzida",
  },
];

export function Hotspots({
  image,
  alt,
  hotspots = DEFAULT_HOTSPOTS,
}: {
  image: string;
  alt: string;
  hotspots?: Hotspot[];
}) {
  const [active, setActive] = useState<string>(hotspots[0]?.id ?? "");
  const current = hotspots.find((h) => h.id === active) ?? hotspots[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-gradient-carbon">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover opacity-90 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />

        {hotspots.map((h) => {
          const isActive = h.id === active;
          return (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h.id)}
              aria-label={`Ver detalhe: ${h.title}`}
              aria-pressed={isActive}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full border transition-all",
                  isActive
                    ? "border-ember bg-ember text-ember-foreground scale-110"
                    : "border-ember/60 bg-background/70 text-ember backdrop-blur hover:border-ember hover:bg-ember/20",
                )}
              >
                {!isActive && (
                  <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-ember/40" />
                )}
                <Plus className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">
          Anatomia da lareira
        </p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Toque nos pontos para explorar a engenharia.
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {hotspots.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h.id)}
              className={cn(
                "rounded-sm border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                h.id === active
                  ? "border-ember bg-ember/10 text-ember"
                  : "border-border text-muted-foreground hover:border-ember/50 hover:text-foreground",
              )}
            >
              {h.category}
            </button>
          ))}
        </div>

        {current && (
          <div
            key={current.id}
            className="mt-8 rounded-sm border border-border bg-card p-6 animate-fade-in"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ember">
              {current.category}
            </p>
            <h4 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              {current.title}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{current.body}</p>
            {current.spec && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-sm border border-ember/40 bg-ember/5 px-3 py-1.5 text-xs font-medium text-ember">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                {current.spec}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
