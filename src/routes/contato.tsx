import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato · Tochetto Lareiras" },
      { name: "description", content: "Fale direto com a fábrica Tochetto. Orçamento via WhatsApp, suporte para arquitetos e revendedores autorizados." },
      { property: "og:title", content: "Contato · Tochetto Lareiras" },
      { property: "og:description", content: "Solicite seu orçamento personalizado." },
    ],
  }),
  component: ContatoPage,
});

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp Vendas", value: "Resposta em até 1h útil", href: "https://wa.me/5500000000000" },
  { icon: Mail, label: "E-mail", value: "contato@tochetto.com.br", href: "mailto:contato@tochetto.com.br" },
  { icon: Phone, label: "Telefone", value: "+55 (54) 0000-0000", href: "tel:+550000000000" },
  { icon: MapPin, label: "Fábrica", value: "Rio Grande do Sul, Brasil", href: "#" },
];

function ContatoPage() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:px-10 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Fale com a fábrica</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-6xl text-balance">
            Pronto para um orçamento sob medida?
          </h1>
          <p className="mt-6 max-w-lg text-lg text-foreground/80">
            Conte sobre o seu projeto — metragem, tipo de instalação, prazo — e nosso time monta uma proposta com o modelo Tochetto ideal e canos de instalação.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border/60 sm:grid-cols-2">
            {CHANNELS.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="group flex items-start gap-4 bg-card p-6 transition-colors hover:bg-card/60">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-sm border border-border bg-background text-ember">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-medium group-hover:text-ember">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="rounded-sm border border-border bg-card p-8 lg:p-10 shadow-carbon h-fit"
        >
          <h2 className="font-display text-2xl font-semibold">Solicitar orçamento</h2>
          <p className="mt-2 text-sm text-muted-foreground">Preencha e responderemos em até 1 dia útil.</p>

          <div className="mt-8 space-y-5">
            <Field label="Nome" name="nome" />
            <Field label="E-mail" name="email" type="email" />
            <Field label="Cidade / Estado" name="cidade" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Mensagem</label>
              <textarea
                rows={4}
                placeholder="Conte sobre seu projeto — metragem, instalação livre ou embutida..."
                className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ember"
              />
            </div>
          </div>

          <button className="mt-8 w-full rounded-sm bg-ember px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-ember-foreground transition-colors hover:bg-rust">
            Enviar solicitação
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ember"
      />
    </div>
  );
}
