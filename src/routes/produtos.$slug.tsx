import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS, type Product } from "@/lib/products";
import { Hotspots } from "@/components/site/Hotspots";
import { TopFinishSwitcher } from "@/components/site/TopFinishSwitcher";
import productImg from "@/assets/product-tl1000.jpg";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/produtos/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Produto · Tochetto Lareiras" }] };
    return {
      meta: [
        { title: `${p.model} · Tochetto Lareiras` },
        { name: "description", content: `${p.model} — ${p.tagline} Aquece ${p.area}. Aço ${p.steel}.` },
        { property: "og:title", content: `${p.model} · Tochetto Lareiras` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "product" },
        { property: "og:image", content: productImg },
        { property: "og:url", content: `/produtos/${params?.slug ?? p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/produtos/${params?.slug ?? p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `Tochetto ${p.model}`,
            brand: { "@type": "Brand", name: "Tochetto Lareiras de Alto Rendimento" },
            description: `${p.tagline} Calefator de alto rendimento — aquece ${p.area}, com chapa de aço ${p.steel}, peso ${p.weight}, instalação ${p.type}.`,
            image: productImg,
            category: "Lareiras / Calefatores a lenha",
            additionalProperty: [
              { "@type": "PropertyValue", name: "Área de aquecimento", value: p.area },
              { "@type": "PropertyValue", name: "Peso", value: p.weight },
              { "@type": "PropertyValue", name: "Espessura de aço", value: p.steel },
              { "@type": "PropertyValue", name: "Instalação", value: p.type },
            ],
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "BRL",
              url: `/produtos/${params?.slug ?? p.slug}`,
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">Modelo não encontrado</h1>
      <Link to="/produtos" className="mt-6 inline-block text-ember underline">
        Voltar para a linha TL
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Erro ao carregar o produto</h1>
      <button onClick={reset} className="mt-6 text-ember underline">Tentar novamente</button>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData() as { product: Product };

  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground hover:text-ember"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Linha TL
          </Link>
          <div className="mt-6 flex flex-wrap items-baseline gap-4">
            <h1 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
              {p.model}
            </h1>
            <span className="rounded-sm border border-ember/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ember">
              Aquece {p.area}
            </span>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-foreground/80">{p.tagline}</p>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border/60 md:grid-cols-4">
            <Spec label="Peso" value={p.weight} />
            <Spec label="Aço" value={p.steel} />
            <Spec label="Área" value={p.area} />
            <Spec label="Instalação" value={p.type} />
          </dl>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Hotspots image={productImg} alt={`Anatomia da ${p.model}`} />
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Destaques</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            O que define a {p.model}.
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border/60 md:grid-cols-3">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 bg-card p-6">
                <Check className="mt-0.5 h-5 w-5 flex-none text-ember" strokeWidth={2.5} />
                <span className="text-sm text-foreground/85">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/5500000000000?text=${encodeURIComponent(`Olá, gostaria de um orçamento para a ${p.model}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3.5 text-sm font-semibold text-ember-foreground hover:bg-rust"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar orçamento
            </a>
            <Link
              to="/tecnologia"
              className="inline-flex items-center rounded-sm border border-border px-6 py-3.5 text-sm font-medium hover:border-ember hover:text-ember"
            >
              Entender a tecnologia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-5 py-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}
