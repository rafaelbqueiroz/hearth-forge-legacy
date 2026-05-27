import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/tecnologia", label: "Tecnologia" },
  { to: "/arquitetos", label: "Arquitetos" },
  { to: "/faq", label: "Ajuda" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-card">
            <Flame className="h-4 w-4 text-ember transition-transform group-hover:scale-110" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight">TOCHETTO</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Lareiras de Alto Rendimento</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20Tochetto"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-ember px-4 py-2 text-sm font-semibold text-ember-foreground transition-all hover:bg-rust hover:shadow-ember"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}
