import { useState } from "react";

type Finish = "carbon" | "inox";

const OPTIONS: { id: Finish; label: string; swatch: string; ring: string }[] = [
  { id: "carbon", label: "Aço Carbono Preto", swatch: "bg-[#0e0e10]", ring: "ring-foreground" },
  { id: "inox", label: "Inox 304 Escovado", swatch: "bg-gradient-to-br from-[#cfd5dc] via-[#9ea4ab] to-[#6b7077]", ring: "ring-foreground" },
];

export function TopFinishSwitcher({ image, alt }: { image: string; alt: string }) {
  const [finish, setFinish] = useState<Finish>("carbon");

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border bg-gradient-carbon">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover mix-blend-screen opacity-90"
        />
        {/* Tampo overlay — fica sobre o topo da lareira para simular o acabamento */}
        <div
          className={`pointer-events-none absolute left-[28%] right-[28%] top-[18%] h-[5%] rounded-[2px] border border-black/40 shadow-[0_4px_18px_rgba(0,0,0,0.45)] transition-all duration-500 ${
            finish === "carbon"
              ? "bg-[#0e0e10]"
              : "bg-gradient-to-b from-[#e6ebf0] via-[#a4abb3] to-[#7a8088]"
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-glow" />

        <div className="absolute left-4 top-4 rounded-sm border border-border/60 bg-background/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
          {OPTIONS.find((o) => o.id === finish)?.label}
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Configurador de tampo</p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Escolha o seu acabamento.
        </h3>
        <p className="mt-4 text-foreground/80">
          A TL 1000 pode receber o tampo em aço carbono preto fosco — visual industrial e monolítico — ou em inox 304
          escovado, que serve também como superfície quente para chaleira e fondue.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {OPTIONS.map((o) => {
            const active = o.id === finish;
            return (
              <button
                key={o.id}
                onClick={() => setFinish(o.id)}
                aria-pressed={active}
                className="group flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3 transition-colors hover:border-ember"
              >
                <span
                  className={`h-9 w-9 rounded-full border border-border/80 ${o.swatch} ${
                    active ? `ring-2 ring-offset-2 ring-offset-card ${o.ring}` : ""
                  }`}
                />
                <span className="text-sm font-medium">{o.label}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          * Visualização ilustrativa. A textura real do inox escovado tem reflexo direcional.
        </p>
      </div>
    </div>
  );
}
