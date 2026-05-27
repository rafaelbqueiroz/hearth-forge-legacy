import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Central de Ajuda · Tochetto Lareiras" },
      { name: "description", content: "Dúvidas frequentes sobre lareiras Tochetto: vidro Schott Robax®, tampo inox, ventilação forçada, lenha ideal, diâmetros de chaminé por modelo e instalação." },
      { property: "og:title", content: "Central de Ajuda · Tochetto Lareiras" },
      { property: "og:description", content: "Respostas técnicas oficiais de fábrica para usar sua lareira Tochetto com segurança e máxima eficiência." },
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
        a: "Não é recomendado de forma alguma. O vidro é uma vitrocerâmica importada Schott Robax®, projetada para temperaturas extremas e choques térmicos elevados. Ainda assim, o contato direto com água fria ou vapor excessivo de lenha muito úmida sobre o vidro superaquecido cria tensões desnecessárias e pode manchar a superfície. A substituição por vidros comuns ou temperados é expressamente proibida pelo risco de estilhaçamento e acidentes graves.",
      },
      {
        q: "Por que o vidro fica limpo sozinho?",
        a: "As lareiras possuem um sistema de cascata de ar (barreira aerodinâmica). O ar frio entra por uma fresta regulável na parte superior da porta e desce rente à face interna do vidro cerâmico. Esse fluxo contínuo impede que os gases carregados de fuligem entrem em contato direto com o vidro, mantendo a visão do fogo desimpedida por muito mais tempo.",
      },
      {
        q: "A porta e as laterais esfriam rápido após o fogo apagar?",
        a: "Não, e é preciso ter cuidado. Devido à robustez das chapas de aço carbono de 4,75 mm nas laterais e de 12,7 mm (meia polegada) na câmara de combustão, os equipamentos possuem alta inércia térmica e continuam irradiando calor por um período prolongado mesmo após o fim das brasas. A porta, a tampa superior e a chaminé são as partes que mais acumulam calor e podem causar queimaduras se tocadas sem proteção durante ou logo após o uso.",
      },
    ],
  },
  {
    category: "Tampo & Acabamento",
    items: [
      {
        q: "Posso usar chaleira ou panela sobre o tampo de inox da TL 1000?",
        a: "Sim. O modelo TL 1000 com tampo opcional em aço inox escovado foi desenvolvido especificamente para essa finalidade. Nas lareiras com tampo de aço carbono pintado de preto, o gotejamento ou transbordamento de água fria sobre a superfície quente provoca choque térmico e mancha permanentemente a pintura de alta temperatura — por isso o uso de chaleiras é restrito ao opcional inox da TL 1000.",
      },
      {
        q: "O tampo preto risca com facilidade? Como devo limpar?",
        a: "A tinta siliconada de alta temperatura resiste a picos de até 650 °C, mas não tem a mesma resistência a riscos mecânicos que uma pintura automotiva. Nunca arraste objetos rígidos (panelas, ferramentas) sobre o tampo pintado. A limpeza externa deve ser feita somente com o calefator totalmente frio, usando apenas espanador e um pano macio levemente umedecido.",
      },
    ],
  },
  {
    category: "Ventilação Forçada",
    items: [
      {
        q: "Qual o consumo elétrico dos ventiladores? Eles gastam muito?",
        a: "O consumo é extremamente baixo. As lareiras com motores (TL 2000, TL 3000 e TL 4000) consomem no máximo entre 40 W e 60 W — equivalente a uma lâmpada residencial antiga de baixo consumo. Na prática, seriam necessárias cerca de 17 horas contínuas de uso para gerar um custo de energia irrisório no fim do mês.",
      },
      {
        q: "Os motores fazem barulho durante o funcionamento?",
        a: "Os ventiladores de fábrica são dimensionados para priorizar o conforto acústico no ambiente residencial. No TL 2000, por exemplo, o sistema conta com duas teclas independentes: você pode ligar apenas um motor para uma ventilação mais suave e silenciosa, ou ambos quando desejar aquecer o cômodo de forma rápida.",
      },
      {
        q: "Posso usar a lareira com a ventoinha desligada?",
        a: "Sim. O equipamento continuará aquecendo o ambiente por irradiação direta e convecção natural. A eficiência máxima de extração e distribuição homogênea do ar quente, no entanto, é atingida com os ventiladores ligados.",
      },
    ],
  },
  {
    category: "Lenha & Operação",
    items: [
      {
        q: "Que tipo de lenha devo usar para ativar a dupla combustão?",
        a: "A dupla combustão é espontânea e ocorre quando os gases da queima primária atingem 350 °C ou mais no topo da câmara. Para isso são necessários três fatores simultâneos: fogo ativo, brasa acumulada e lenha de boa qualidade. Use madeiras duras e muito bem secas (eucalipto, acácia, angico). Evite madeiras úmidas, tratadas, pintadas ou resinadas (como pinus em excesso) — produzem pouca caloria, deterioram a pintura e geram acúmulo perigoso de sujeira na chaminé.",
      },
      {
        q: "Qual o tamanho máximo das toras para cada modelo?",
        a: "Para garantir o fechamento hermético da porta e o fluxo correto de ar interno, respeite os limites de catálogo: TL 700 até 32 cm · TL 800 até 32 cm · TL 1000 até 39 cm · TL 2000 até 37 cm · TL 3000 até 46 cm.",
      },
      {
        q: "Como devo proceder nas primeiras queimas do equipamento?",
        a: "Toda lareira nova passa por um processo de cura. Nas primeiras duas ou três utilizações, faça um fogo moderado (pouca lenha) por cerca de uma a duas horas. Isso estabiliza as vedações cerâmicas e cura a pintura siliconada. Durante esse processo é normal liberar um leve odor de tinta sendo curada — basta manter o ambiente bem ventilado.",
      },
    ],
  },
  {
    category: "Instalação",
    items: [
      {
        q: "Qual o diâmetro correto da chaminé para o meu modelo?",
        a: "O diâmetro da tubulação de exaustão varia conforme o projeto de saída de gases de cada modelo para evitar retorno de fumaça: TL 700 — 110 mm · TL 800 — 120 mm · TL 2000 — 120 mm · TL 3000 — 150 mm. A instalação deve usar tubulação de inox comercial e respeitar a altura mínima de tiragem vertical indicada no manual. Usar diâmetro diferente do especificado compromete a tiragem e invalida a garantia.",
      },
      {
        q: "Preciso construir uma base especial de alvenaria no chão?",
        a: "Não. Diferente das lareiras tradicionais de alvenaria, as lareiras de alto rendimento Tochetto possuem isolamento térmico eficiente e não esquentam o chão. Em modelos como o TL 2000 o espaço inferior é inclusive projetado para armazenar lenha com segurança. Por precaução contra fagulhas ao abrir a porta para reposição, recomenda-se que a área imediatamente à frente do equipamento tenha piso não combustível (porcelanato, pedra ou chapa protetora de metal).",
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
            Vidro, lenha, ventilação, tampo, instalação. Respostas técnicas baseadas estritamente nos dados oficiais de
            fábrica.
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
