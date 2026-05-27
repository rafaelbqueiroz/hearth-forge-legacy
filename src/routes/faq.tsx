import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Central de Ajuda · Tochetto Lareiras" },
      { name: "description", content: "Dúvidas frequentes sobre lareiras Tochetto: choque térmico no vidro, uso de chaleira no tampo inox, consumo das ventoinhas e tipos de lenha." },
      { property: "og:title", content: "Central de Ajuda · Tochetto Lareiras" },
      { property: "og:description", content: "Respostas técnicas para usar sua lareira Tochetto com segurança e máxima eficiência." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.flatMap((g) => g.items).map((q) => ({
            "@type": "Question",
            name: q.q,
            acceptedAnswer: { "@type": "Answer", text: q.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    category: "Vidro & Segurança",
    items: [
      {
        q: "Posso jogar água ou colocar lenha úmida sem risco de quebrar o vidro?",
        a: "O vidro Schott Robax® das Tochetto é cerâmico, resiste a 760 °C contínuos. Mas evite choque térmico: nunca encoste objetos gelados ou molhados no vidro quente, e não pulverize água diretamente. Lenha úmida cria fuligem e reduz a eficiência — use sempre lenha com até 20% de umidade.",
      },
      {
        q: "Por que o vidro fica limpo sozinho?",
        a: "Existe uma abertura superior que injeta uma cascata fina de ar pré-aquecido sobre a face interna do vidro. Esse fluxo afasta a fumaça e queima micropartículas antes que elas grudem — é o sistema de autolimpeza por cortina de ar.",
      },
      {
        q: "Em quanto tempo a porta esfria depois de apagar o fogo?",
        a: "A puxadeira é fria ao toque mesmo em operação, mas a porta e o vidro permanecem quentes por 1 a 2 horas após o último ciclo. Mantenha crianças e animais afastados nesse intervalo.",
      },
    ],
  },
  {
    category: "Tampo & Acabamento",
    items: [
      {
        q: "Posso usar chaleira ou panela sobre o tampo de inox da TL 1000?",
        a: "Sim. O tampo opcional em aço inox 304 escovado da TL 1000 foi dimensionado para suportar uma chaleira de até 3 litros e atinge temperatura de fervura em 8–12 minutos com o fogo em regime. Evite arrastar a panela para preservar o acabamento escovado.",
      },
      {
        q: "O tampo preto risca com o uso?",
        a: "O tampo em aço carbono recebe pintura industrial de alta temperatura. Para limpeza, use pano seco e, se necessário, álcool isopropílico — nunca esponja abrasiva ou removedores agressivos.",
      },
    ],
  },
  {
    category: "Ventilação Forçada",
    items: [
      {
        q: "Qual o consumo elétrico dos ventiladores?",
        a: "Os ventiladores das TL 2000 e TL 3000 consomem entre 40 W e 60 W com os dois motores ligados — equivalente a uma lâmpada incandescente. Funcionam com tomada 110/220 V automática e podem ser desligados quando não desejado.",
      },
      {
        q: "Os motores fazem barulho?",
        a: "Não. Usamos motores de indução de baixa rotação com rolamentos selados. Em ambientes residenciais normais, o ruído fica abaixo de 30 dB no nível mais alto — mais silencioso que uma conversa em sussurro.",
      },
      {
        q: "Posso instalar a lareira sem usar a ventoinha?",
        a: "Sim. Toda a linha aquece por radiação e convecção natural mesmo desligada da tomada. A ventilação forçada acelera a distribuição do calor em ambientes integrados ou com pé-direito alto.",
      },
    ],
  },
  {
    category: "Lenha & Operação",
    items: [
      {
        q: "Que tipo de lenha devo usar?",
        a: "Lenhas duras e bem secas: eucalipto (mínimo 12 meses de secagem), angico, ipê e bracatinga rendem mais calor por ciclo. Evite pinus em excesso (queima rápido e gera muita fagulha) e lenhas com resina, tratadas ou pintadas.",
      },
      {
        q: "Qual o tamanho máximo das toras?",
        a: "TL 700: até 30 cm · TL 800/1000: até 35 cm · TL 2000: até 40 cm · TL 3000: até 46 cm · TL 4000: conforme nicho.",
      },
      {
        q: "Como faço a primeira queima?",
        a: "Nas três primeiras queimas, mantenha o fogo brando (carga reduzida) por 1–2 horas para curar a pintura e estabilizar a vedação cerâmica. É normal sentir leve odor de tinta nas primeiras horas — ventile o ambiente.",
      },
    ],
  },
  {
    category: "Instalação",
    items: [
      {
        q: "Qual o diâmetro da chaminé?",
        a: "Toda a linha TL usa chaminé de 6\" (152 mm) em aço inox 304 ou 430 com parede dupla nas travessias de laje e telhado. O comprimento mínimo recomendado é 4 metros verticais.",
      },
      {
        q: "Preciso de chão de alvenaria?",
        a: "Não necessariamente, mas é obrigatório um piso não combustível com avanço mínimo de 30 cm na frente da porta. Pedra, porcelanato técnico ou chapa metálica funcionam.",
      },
    ],
  },
];

function FaqPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return FAQS;
    const q = query.toLowerCase();
    return FAQS.map((g) => ({
      ...g,
      items: g.items.filter((i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)),
    })).filter((g) => g.items.length > 0);
  }, [query]);

  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Central de Ajuda</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-7xl text-balance">
            Perguntas frequentes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Vidro, lenha, ventilação, instalação. As dúvidas que mais chegam ao nosso suporte — respondidas pela própria
            equipe técnica de fábrica.
          </p>

          <div className="mt-10 flex max-w-xl items-center gap-3 rounded-sm border border-border bg-background px-4 py-3 focus-within:border-ember">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              maxLength={120}
              placeholder="Buscar por palavra-chave (vidro, lenha, motor...)"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          {filtered.length === 0 ? (
            <p className="text-center text-foreground/70">Nenhuma resposta encontrada para "{query}".</p>
          ) : (
            filtered.map((g) => (
              <div key={g.category} className="mb-14 last:mb-0">
                <h2 className="font-display text-2xl font-semibold tracking-tight">{g.category}</h2>
                <ul className="mt-6 space-y-px overflow-hidden rounded-sm border border-border bg-border/60">
                  {g.items.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="bg-card">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-card/60"
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 flex-none text-ember transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>
      {open && <div className="px-6 pb-6 text-sm leading-relaxed text-foreground/80">{a}</div>}
    </li>
  );
}
