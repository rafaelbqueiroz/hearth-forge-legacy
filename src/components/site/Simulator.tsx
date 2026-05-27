import { useMemo, useState } from "react";
import { recommendByArea } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Simulator() {
  const [area, setArea] = useState(55);
  const product = useMemo(() => recommendByArea(area), [area]);

  return (
    <div className="relative overflow-hidden rounded-sm border border-border bg-card p-8 lg:p-12 shadow-carbon">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-glow pointer-events-none" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ember">Simulador de Conforto Térmico</p>
        <h3 className="mt-3 font-display text-3xl font-semibold lg:text-4xl text-balance">
          Qual Tochetto aquece o seu ambiente?
        </h3>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Arraste para a metragem do seu cômodo. Indicamos o modelo da Série TL ideal — calculado pela engenharia, não pelo achismo.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Área a aquecer</span>
              <span className="font-display text-4xl font-semibold tabular-nums">
                {area}<span className="text-ember"> m²</span>
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={150}
              step={5}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-4 w-full appearance-none bg-transparent
                [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:bg-border [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-ember [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:shadow-ember [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-track]:h-1 [&::-moz-range-track]:bg-border [&::-moz-range-track]:rounded-full
                [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-ember [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full"
            />
            <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>10 m²</span><span>150 m²</span>
            </div>
          </div>

          <div className="border-l-0 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Modelo recomendado</p>
            <p className="mt-2 font-display text-3xl font-semibold text-ember">{product.model}</p>
            <p className="mt-1 max-w-[16rem] text-sm text-foreground/80">{product.tagline}</p>
            <Link
              to="/produtos"
              hash={product.slug}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-ember"
            >
              Ver ficha técnica <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
