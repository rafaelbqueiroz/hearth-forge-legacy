import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

import { nav } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-card">
                <Flame className="h-4 w-4 text-ember" strokeWidth={2.5} />
              </div>
              <span className="font-display text-base font-semibold tracking-tight">TOCHETTO</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Lareiras e calefatores de alto rendimento. Engenharia honesta, aço industrial e calor que dura por gerações.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Desde o Vêneto. Forjado no Sul do Brasil.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-foreground/80 transition-colors hover:text-ember">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>Rio Grande do Sul, Brasil</li>
              <li>contato@tochetto.com.br</li>
              <li>WhatsApp Vendas</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Tochetto Lareiras. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">A Força do Aço · O Calor do Lar</p>
        </div>
      </div>
    </footer>
  );
}
