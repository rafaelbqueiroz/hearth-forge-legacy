import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, FileText, Ruler, Box, FileCheck, Send, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/arquitetos")({
  head: () => ({
    meta: [
      { title: "Área do Arquiteto · Tochetto Lareiras" },
      { name: "description", content: "Downloads técnicos da linha Tochetto: fichas, dimensões, blocos 3D e memorial descritivo. Envie o briefing do seu projeto." },
      { property: "og:title", content: "Área do Arquiteto · Tochetto Lareiras" },
      { property: "og:description", content: "Material técnico para especificação e briefing de projeto." },
    ],
  }),
  component: ArquitetosPage,
});

const RESOURCES = [
  { icon: FileText, label: "Ficha técnica", desc: "PDF com especificações completas, peso, aço e área de aquecimento." },
  { icon: Ruler, label: "Desenhos dimensionais", desc: "Plantas, cortes e elevações em DWG e PDF para inserir no projeto." },
  { icon: Box, label: "Blocos 3D / BIM", desc: "Arquivos SKP, 3DS e RFA prontos para SketchUp, 3ds Max e Revit." },
  { icon: FileCheck, label: "Memorial descritivo", desc: "Texto técnico padrão para caderno de especificações da obra." },
] as const;

function ArquitetosPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Área do Arquiteto</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-7xl text-balance">
            Material técnico para projetar com precisão.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">
            Fichas técnicas, dimensões, blocos 3D e memorial descritivo de toda a linha TL. Tudo o que você precisa para
            especificar uma Tochetto no seu projeto — sem precisar pedir por e-mail.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">O que está disponível</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Quatro pastas, tudo em um clique.
          </h2>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border/60 md:grid-cols-2">
            {RESOURCES.map((r) => (
              <li key={r.label} className="flex items-start gap-4 bg-card p-8">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-sm border border-border bg-background text-ember">
                  <r.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">{r.label}</div>
                  <p className="mt-1 text-sm text-foreground/75">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Downloads por modelo</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Linha TL — pacotes completos.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.slug} className="flex flex-col gap-5 bg-card p-7">
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{p.model}</h3>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.area}</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/70 line-clamp-2">{p.tagline}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  {["PDF", "DWG", "SKP", "RFA"].map((ext) => (
                    <a
                      key={ext}
                      href={`#download-${p.slug}-${ext.toLowerCase()}`}
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors hover:border-ember hover:text-ember"
                    >
                      <Download className="h-3 w-3" strokeWidth={2.25} />
                      {ext}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            * Arquivos gerados automaticamente. Para a versão mais recente do BIM/RFA, solicite no briefing abaixo.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:px-10 lg:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Briefing de projeto</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-balance">
              Conte sobre o projeto — devolvemos a especificação certa.
            </h2>
            <p className="mt-6 max-w-md text-foreground/80">
              Nosso time técnico analisa o briefing e retorna em até 1 dia útil com o modelo Tochetto ideal, desenho de
              instalação, lista de canos e memorial pronto para o caderno de especificações.
            </p>

            <ul className="mt-10 space-y-3 text-sm text-foreground/85">
              {[
                "Resposta de engenheiro Tochetto em até 24h",
                "Compatibilidade com SketchUp, AutoCAD e Revit",
                "Suporte para instalação livre, embutida e em alvenaria",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-ember" strokeWidth={2.5} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <BriefingForm />
        </div>
      </section>
    </>
  );
}

function BriefingForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    escritorio: "",
    email: "",
    telefone: "",
    cidade: "",
    metragem: "",
    instalacao: "livre",
    modelo: "",
    formato: "DWG",
    prazo: "",
    descricao: "",
  });

  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  if (sent) {
    return (
      <div className="rounded-sm border border-border bg-card p-10 shadow-carbon h-fit text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm border border-ember/40 bg-ember/10 text-ember">
          <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold">Briefing recebido</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Em até 1 dia útil você recebe a proposta técnica no e-mail informado.
        </p>
        <button onClick={() => setSent(false)} className="mt-6 text-xs uppercase tracking-[0.18em] text-ember hover:underline">
          Enviar outro briefing
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-sm border border-border bg-card p-8 lg:p-10 shadow-carbon h-fit"
    >
      <h3 className="font-display text-2xl font-semibold">Briefing do projeto</h3>
      <p className="mt-2 text-sm text-muted-foreground">Campos com * são obrigatórios.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Arquiteto(a) *" name="nome" value={form.nome} onChange={upd("nome")} required />
        <Field label="Escritório" name="escritorio" value={form.escritorio} onChange={upd("escritorio")} />
        <Field label="E-mail *" name="email" type="email" value={form.email} onChange={upd("email")} required />
        <Field label="Telefone" name="telefone" value={form.telefone} onChange={upd("telefone")} />
        <Field label="Cidade / UF" name="cidade" value={form.cidade} onChange={upd("cidade")} />
        <Field label="Metragem do ambiente (m²)" name="metragem" type="number" value={form.metragem} onChange={upd("metragem")} />

        <SelectField label="Tipo de instalação" name="instalacao" value={form.instalacao} onChange={upd("instalacao")}>
          <option value="livre">Livre posição</option>
          <option value="embutir">Embutir / inserto</option>
          <option value="alvenaria">Alvenaria sob medida</option>
          <option value="indefinido">Ainda não definido</option>
        </SelectField>

        <SelectField label="Modelo de interesse" name="modelo" value={form.modelo} onChange={upd("modelo")}>
          <option value="">Sugerir o ideal</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={p.model}>{p.model} — {p.area}</option>
          ))}
        </SelectField>

        <SelectField label="Formato de arquivo desejado" name="formato" value={form.formato} onChange={upd("formato")}>
          <option value="DWG">DWG (AutoCAD)</option>
          <option value="SKP">SKP (SketchUp)</option>
          <option value="RFA">RFA (Revit / BIM)</option>
          <option value="PDF">PDF (apresentação)</option>
        </SelectField>

        <Field label="Prazo da obra" name="prazo" value={form.prazo} onChange={upd("prazo")} placeholder="Ex.: entrega em 6 meses" />
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Descrição do projeto
        </label>
        <textarea
          rows={4}
          value={form.descricao}
          onChange={upd("descricao")}
          maxLength={1000}
          placeholder="Pé-direito, posicionamento, tipo de obra, integração com mobiliário..."
          className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ember"
        />
      </div>

      <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ember px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-ember-foreground transition-colors hover:bg-rust">
        <Send className="h-4 w-4" /> Enviar briefing
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ember"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  children,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ember"
      >
        {children}
      </select>
    </div>
  );
}
