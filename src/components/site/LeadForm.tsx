import { useState } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { PRODUCTS, recommendByArea } from "@/lib/products";

const WHATSAPP_NUMBER = "5500000000000";

type Form = {
  nome: string;
  area: string;
  cidade: string;
  modelo: string;
};

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<Form>({ nome: "", area: "", cidade: "", modelo: "" });
  const [sent, setSent] = useState(false);

  const upd = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.cidade.trim()) return;

    const m2 = Number(form.area);
    const chosen =
      form.modelo && form.modelo !== "auto"
        ? PRODUCTS.find((p) => p.model === form.modelo)?.model
        : Number.isFinite(m2) && m2 > 0
          ? recommendByArea(m2).model
          : "indicação Tochetto";

    const msg = [
      `Olá, sou ${form.nome.trim()} (${form.cidade.trim()}).`,
      form.area ? `Ambiente de aproximadamente ${form.area} m².` : null,
      `Tenho interesse na ${chosen}.`,
      "Pode me passar um orçamento?",
    ]
      .filter(Boolean)
      .join(" ");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-sm border border-border bg-card p-8 text-center shadow-carbon h-fit">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-sm border border-ember/40 bg-ember/10 text-ember">
          <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold">Conversa aberta no WhatsApp</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Caso não tenha aberto automaticamente, verifique se o WhatsApp Web está conectado.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ nome: "", area: "", cidade: "", modelo: "" });
          }}
          className="mt-6 text-xs uppercase tracking-[0.18em] text-ember hover:underline"
        >
          Enviar novo contato
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-sm border border-border bg-card shadow-carbon h-fit ${compact ? "p-7" : "p-8 lg:p-10"}`}
    >
      <h3 className="font-display text-2xl font-semibold">Retorno por WhatsApp</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Preencha — abrimos a conversa com sua mensagem pronta.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <Field label="Nome *" name="nome" value={form.nome} onChange={upd("nome")} required />
        <Field label="Cidade / UF *" name="cidade" value={form.cidade} onChange={upd("cidade")} required />
        <Field
          label="Área do ambiente (m²)"
          name="area"
          type="number"
          value={form.area}
          onChange={upd("area")}
          placeholder="Ex.: 60"
        />
        <div>
          <label htmlFor="modelo" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Modelo preferido
          </label>
          <select
            id="modelo"
            name="modelo"
            value={form.modelo}
            onChange={upd("modelo")}
            className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ember"
          >
            <option value="auto">Sugerir pela metragem</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.model}>
                {p.model} — {p.area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ember px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-ember-foreground transition-colors hover:bg-rust">
        <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
      </button>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Resposta em até 1h em horário comercial.
      </p>
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
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        maxLength={120}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ember"
      />
    </div>
  );
}
