import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import productImg from "@/assets/product-tl1000.jpg";
import { ArrowRight, Check, MessageCircle, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/produtos/")({
  head: () => ({
    meta: [
      { title: "Produtos · Linha TL — Tochetto Lareiras" },
      { name: "description", content: "Conheça a Série TL: calefatores de livre posição e lareiras de embutir, de 40 m² a 110 m². Aço industrial, vedação Inconel e ventilação forçada." },
      { property: "og:title", content: "Linha TL · Tochetto Lareiras" },
      { property: "og:description", content: "Da TL 700 à TL 4000 — para cada ambiente, a engenharia certa." },
      { property: "og:url", content: "/produtos" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: ProdutosPage,
});

type AreaBucket = "all" | "ate40" | "ate55" | "ate85" | "acima85";
type TypeFilter = "all" | "Livre Posição" | "Embutir / Inserto";

const AREA_BUCKETS: { id: AreaBucket; label: string; test: (max: number) => boolean }[] = [
  { id: "all", label: "Todas as áreas", test: () => true },
  { id: "ate40", label: "Até 40 m²", test: (m) => m <= 40 },
  { id: "ate55", label: "41 – 55 m²", test: (m) => m > 40 && m <= 55 },
  { id: "ate85", label: "56 – 85 m²", test: (m) => m > 55 && m <= 85 },
  { id: "acima85", label: "Acima de 85 m²", test: (m) => m > 85 },
];

const TYPE_FILTERS: { id: TypeFilter; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "Livre Posição", label: "Livre Posição" },
  { id: "Embutir / Inserto", label: "Embutir / Inserto" },
];

function ProdutosPage() {
  const [area, setArea] = useState<AreaBucket>("all");
  const [type, setType] = useState<TypeFilter>("all");

  const filtered = useMemo(() => {
    const areaTest = AREA_BUCKETS.find((b) => b.id === area)!.test;
    return PRODUCTS.filter((p) => (type === "all" || p.type === type) && areaTest(p.areaMax));
  }, [area, type]);

  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Série TL</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold tracking-tight md:text-6xl text-balance">
            Lareiras e calefatores que cabem em qualquer ambiente.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Da compacta TL 700 às grandes TL 3000 e TL 4000, toda a linha compartilha a mesma engenharia: aço industrial, dupla combustão, vidro autolimpante e vedação Inconel.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filtros
            </div>

            <FilterGroup label="Área de aquecimento">
              {AREA_BUCKETS.map((b) => (
                <Chip key={b.id} active={area === b.id} onClick={() => setArea(b.id)}>
                  {b.label}
                </Chip>
              ))}
            </FilterGroup>

            <FilterGroup label="Instalação">
              {TYPE_FILTERS.map((t) => (
                <Chip key={t.id} active={type === t.id} onClick={() => setType(t.id)}>
                  {t.label}
                </Chip>
              ))}
            </FilterGroup>

            <span className="ml-auto text-xs text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "modelo" : "modelos"}
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-foreground/70">
              Nenhum modelo combina com esses filtros. <button onClick={() => { setArea("all"); setType("all"); }} className="text-ember underline">Limpar filtros</button>
            </p>
          ) : (
            <div className="space-y-px overflow-hidden rounded-sm border border-border bg-border/60">
              {filtered.map((p, i) => (
                <article
                  id={p.slug}
                  key={p.slug}
                  className="grid gap-10 bg-card p-8 lg:grid-cols-[280px_1fr_auto] lg:items-center lg:gap-12 lg:p-12 scroll-mt-24"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border bg-gradient-carbon">
                    <img
                      src={productImg}
                      alt={`Lareira Tochetto modelo ${p.model}`}
                      width={1024}
                      height={1280}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover mix-blend-screen opacity-90"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-glow" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-display text-4xl font-semibold tracking-tight">{p.model}</h3>
                      <span className="rounded-sm border border-ember/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ember">
                        Aquece {p.area}
                      </span>
                    </div>
                    <p className="mt-3 text-foreground/85">{p.tagline}</p>

                    <ul className="mt-6 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-ember" strokeWidth={2.5} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border/60 text-sm">
                      <Spec label="Peso" value={p.weight} />
                      <Spec label="Aço" value={p.steel} />
                      <Spec label="Instalação" value={p.type} />
                    </dl>
                  </div>

                  <div className="flex flex-col gap-3 lg:w-44">
                    <a
                      href={`https://wa.me/5500000000000?text=${encodeURIComponent(`Olá, gostaria de um orçamento para a ${p.model}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-4 py-3 text-sm font-semibold text-ember-foreground transition-colors hover:bg-rust"
                    >
                      <MessageCircle className="h-4 w-4" /> Orçamento
                    </a>
                    <Link
                      to="/produtos/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 text-sm font-medium hover:border-ember hover:text-ember"
                    >
                      Ver detalhes <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}:</span>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-ember bg-ember text-ember-foreground"
          : "border-border bg-background text-foreground/80 hover:border-ember hover:text-ember"
      }`}
    >
      {children}
    </button>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}
