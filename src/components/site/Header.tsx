import { Link } from "@tanstack/react-router";
import { Flame, Menu } from "lucide-react";

import { nav } from "@/lib/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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

        {/* Desktop nav */}
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

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20Tochetto"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-sm bg-ember px-4 py-2 text-sm font-semibold text-ember-foreground transition-all hover:bg-rust hover:shadow-ember"
          >
            Orçamento
          </a>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-l border-border/60 bg-background p-0">
              <div className="flex flex-col h-full">
                {/* Header do Sheet */}
                <div className="flex items-center gap-2.5 border-b border-border/60 px-6 py-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-card">
                    <Flame className="h-4 w-4 text-ember" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-display text-base font-semibold tracking-tight">TOCHETTO</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Menu</span>
                  </div>
                </div>

                {/* Links de navegação */}
                <nav className="flex-1 space-y-1 px-4 py-6">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        className="flex items-center rounded-sm px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        activeProps={{ className: "bg-accent/60 text-foreground font-semibold" }}
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* CTA no rodapé do sheet */}
                <div className="border-t border-border/60 px-6 py-5">
                  <a
                    href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20Tochetto"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-ember px-4 py-3 text-sm font-semibold text-ember-foreground transition-all hover:bg-rust"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
