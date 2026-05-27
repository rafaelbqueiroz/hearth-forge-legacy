import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Shield, Wind, Layers, Award } from "lucide-react";
import heroImg from "@/assets/hero-fireplace.jpg";
import lifestyleImg from "@/assets/lifestyle-living.jpg";
import steelImg from "@/assets/steel-detail.jpg";
import productImg from "@/assets/product-tl1000.jpg";
import { Simulator } from "@/components/site/Simulator";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tochetto · A Força do Aço, o Calor do Lar" },
      { name: "description", content: "Lareiras e calefatores de alto rendimento com aço de até 12,7 mm, vedação Inconel e ventilação forçada. Herança vêneta, fabricado no Sul do Brasil." },
      { property: "og:title", content: "Tochetto · Lareiras de Alto Rendimento" },
      { property: "og:description", content: "Engenharia honesta para um calor que dura por gerações." },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Layers,
    eyebrow: "Robustez Industrial",
    title: "Aço de até 12,7 mm",
    body: "Estrutura em chapa de 4,75 mm e base de fogo de meia polegada. Inércia térmica que continua aquecendo muito depois de a chama virar brasa.",
  },
  {
    icon: Shield,
    eyebrow: "Vedação Absoluta",
    title: "Corda cerâmica com Inconel",
    body: "Liga metálica que resiste a 1260 °C dentro da gaxeta. Fumaça nunca volta para dentro de casa — nem hoje, nem em dez anos de uso.",
  },
  {
    icon: Wind,
    eyebrow: "Conforto Ativo",
    title: "Ventilação forçada de fábrica",
    body: "Ventoinhas silenciosas extraem o calor da câmara dupla e espalham ar quente uniforme pelo ambiente — consumo menor que uma lâmpada antiga.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Lareira Tochetto com chama viva atrás de vidro cerâmico Schott Robax"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-32 lg:px-10">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            <span className="h-px w-10 bg-ember" /> Desde o Vêneto · Forjado no Sul
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance md:text-7xl">
            A força do aço.<br />
            <span className="text-ember">O calor do lar.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85">
            Lareiras de alto rendimento construídas com aço industrial, vedação em Inconel e ventilação forçada ativa. Engenharia honesta para um calor que atravessa gerações.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/produtos"
              className="group inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-ember-foreground shadow-ember transition-all hover:bg-rust"
            >
              Conheça a Linha TL
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/tecnologia"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider backdrop-blur hover:border-ember hover:text-ember"
            >
              A ciência do calor
            </Link>
          </div>

          {/* Stats strip */}
          <dl className="mt-16 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border/60">
            {[
              { k: "12,7 mm", v: "Base de fogo" },
              { k: "1260 °C", v: "Vedação Inconel" },
              { k: "110 m²", v: "Aquecimento TL 3000" },
            ].map((s) => (
              <div key={s.v} className="bg-background/90 px-5 py-5 backdrop-blur">
                <dt className="font-display text-2xl font-semibold text-ember md:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Três pilares</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              O que separa uma Tochetto de uma lareira comum.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border/60 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="group flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-card/60 lg:p-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-background text-ember">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{p.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-foreground/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULATOR */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Simulator />
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Série TL</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
                Para cada ambiente, a engenharia certa.
              </h2>
            </div>
            <Link to="/produtos" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-ember">
              Ver linha completa <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                to="/produtos"
                hash={p.slug}
                className="group relative flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-card/60"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl font-semibold">{p.model}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.type}</span>
                </div>
                <p className="text-sm text-foreground/75">{p.tagline}</p>
                <div className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-4 text-xs">
                  <div>
                    <div className="text-muted-foreground">Aquece</div>
                    <div className="mt-0.5 font-semibold text-ember">{p.area}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Peso</div>
                    <div className="mt-0.5 font-semibold">{p.weight}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Aço</div>
                    <div className="mt-0.5 font-semibold">{p.steel.split(" / ")[0]}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE SPLIT */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-sm border border-border shadow-carbon">
            <img
              src={steelImg}
              alt="Chapa de aço industrial Tochetto com corte preciso a laser"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Origem do Nome</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Tochetto: de "toccare" — tocar, bater, forjar.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              O sobrenome nasce no Vêneto italiano, diminutivo carinhoso de quem trabalhava com as mãos para moldar objetos duradouros.
              Atravessou o Atlântico com a imigração para o Sul do Brasil — e segue, hoje, no aço de cada lareira que sai da nossa fábrica.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              É esse o nosso compromisso: <span className="text-foreground font-medium">feito para durar por gerações.</span>
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Award className="h-4 w-4 text-ember" />
              Engenharia gaúcha · Herança vêneta
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE CTA */}
      <section className="relative isolate overflow-hidden border-t border-border">
        <img
          src={lifestyleImg}
          alt="Família reunida em sala de estar com lareira Tochetto acesa ao entardecer"
          width={1600}
          height={1100}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <div className="max-w-2xl">
            <Flame className="h-7 w-7 text-ember" strokeWidth={2} />
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-6xl text-balance">
              Pronto para esquentar o seu inverno?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-foreground/85">
              Fale com a fábrica via WhatsApp e receba um orçamento personalizado para o seu projeto.
            </p>
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20Tochetto"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-sm bg-ember px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ember-foreground shadow-ember transition-all hover:bg-rust"
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
