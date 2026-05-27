import { createFileRoute } from "@tanstack/react-router";
import { Flame, Wind, Shield, Sparkles, Thermometer, Layers } from "lucide-react";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnologia · A Ciência do Calor — Tochetto" },
      { name: "description", content: "Como funcionam a dupla combustão, a ventilação forçada ativa e o vidro autolimpante das lareiras Tochetto. Engenharia honesta, explicada." },
      { property: "og:title", content: "A Ciência do Calor · Tochetto" },
      { property: "og:description", content: "Dupla combustão, Inconel e cascata de ar — a engenharia que justifica cada quilo." },
    ],
  }),
  component: TecPage,
});

const TECHS = [
  {
    icon: Flame,
    title: "Dupla Combustão",
    body: "A queima primária consome a lenha. Os gases que sobem são reaquecidos numa segunda câmara e queimam novamente — extraindo até 30% mais calor da mesma lenha e reduzindo emissões.",
  },
  {
    icon: Wind,
    title: "Ventilação Forçada Ativa",
    body: "Ventoinhas silenciosas sugam o ar frio do chão, conduzem entre a câmara dupla e a carcaça, capturam calor do aço e devolvem ar quente uniforme ao ambiente. Consumo 40–60 W.",
  },
  {
    icon: Sparkles,
    title: "Vidro Autolimpante Schott Robax®",
    body: "Vitrocerâmica importada da Alemanha com fresta superior regulável: uma cascata de ar frio constante varre a face interna do vidro, impedindo o acúmulo de fuligem.",
  },
  {
    icon: Shield,
    title: "Vedação em Inconel",
    body: "Corda cerâmica reforçada com liga metálica Inconel, resistente a 1260 °C. Estanqueidade absoluta da porta: nem fumaça para dentro, nem ar parasita para fora.",
  },
  {
    icon: Layers,
    title: "Aço Industrial de até 12,7 mm",
    body: "Laterais em chapa de 4,75 mm e base de fogo em meia polegada. Sem empenamento térmico, com inércia que continua aquecendo muito depois da chama virar brasa.",
  },
  {
    icon: Thermometer,
    title: "Refratários e Manta Cerâmica",
    body: "Câmara revestida com refratários de alta densidade e, nos modelos de embutir, manta cerâmica de 38 mm — proteção térmica do entorno e melhor rendimento da queima.",
  },
];

function TecPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-card/30">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">A Ciência do Calor</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl text-balance">
            Engenharia que você não vê. Calor que você sente.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Cada tecnologia abaixo é o motivo de uma Tochetto pesar o dobro de uma lareira comum — e durar décadas a mais.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border/60 md:grid-cols-2">
            {TECHS.map((t) => (
              <div key={t.title} className="bg-card p-8 lg:p-12">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-background text-ember">
                  <t.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold">{t.title}</h2>
                <p className="mt-3 text-foreground/75 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Comparativo de Mercado</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Por que a TL 1000 pesa o dobro da concorrência?
          </h2>

          <div className="mt-12 overflow-x-auto rounded-sm border border-border">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-card text-left">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Critério</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ember">Tochetto Linha TL</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Concorrente de entrada</th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Premium importado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Espessura da chapa", "4,75 mm laterais · 12,7 mm base", "2,0 a 3,0 mm", "3,0 a 4,0 mm"],
                  ["Peso (modelo equivalente)", "100 kg (TL 1000)", "35 – 50 kg", "80 – 110 kg"],
                  ["Corda de vedação", "Cerâmica com miolo Inconel 1260 °C", "Fibra de vidro comum", "Fibra cerâmica padrão"],
                  ["Ventilação forçada", "De fábrica nos modelos médios/grandes", "Convecção natural", "Disponível em opcionais"],
                  ["Custo-benefício", "Excelente", "Baixo custo, baixa durabilidade", "Alto, foco em design"],
                ].map(([k, a, b, c]) => (
                  <tr key={k} className="bg-background/40">
                    <td className="px-5 py-4 font-medium">{k}</td>
                    <td className="px-5 py-4 text-foreground/90"><span className="font-semibold text-ember">{a}</span></td>
                    <td className="px-5 py-4 text-muted-foreground">{b}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
