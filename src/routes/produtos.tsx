import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import productImg from "@/assets/product-tl1000.jpg";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos · Linha TL — Tochetto Lareiras" },
      { name: "description", content: "Conheça a Série TL: calefatores de livre posição e lareiras de embutir, de 40 m² a 110 m². Aço industrial, vedação Inconel e ventilação forçada." },
      { property: "og:title", content: "Linha TL · Tochetto Lareiras" },
      { property: "og:description", content: "Da TL 700 à TL 4000 — para cada ambiente, a engenharia certa." },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const livres = PRODUCTS.filter((p) => p.type === "Livre Posição");
  const embutir = PRODUCTS.filter((p) => p.type === "Embutir / Inserto");

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

      <ProductSection title="Calefatores de Livre Posição" eyebrow="TL 700 → TL 3000" items={livres} />
      <ProductSection title="Lareiras de Embutir / Inserto" eyebrow="TL 4000" items={embutir} />
    </>
  );
}

function ProductSection({ title, eyebrow, items }: { title: string; eyebrow: string; items: typeof PRODUCTS }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">{eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          </div>
        </div>

        <div className="space-y-px overflow-hidden rounded-sm border border-border bg-border/60">
          {items.map((p, i) => (
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
      </div>
    </section>
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
