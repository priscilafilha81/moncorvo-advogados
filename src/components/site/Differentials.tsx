import { Sparkles, Eye, Globe2, Target, ShieldCheck, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  { icon: Sparkles, title: "Atendimento humanizado", desc: "Escuta empática e respeito ao seu tempo." },
  { icon: Eye, title: "Transparência jurídica", desc: "Honestidade em cada análise e expectativa." },
  { icon: Globe2, title: "Presencial e online", desc: "Conveniência sem abrir mão da proximidade." },
  { icon: Target, title: "Estratégia personalizada", desc: "Cada caso recebe um plano sob medida." },
  { icon: ShieldCheck, title: "Compromisso ético", desc: "Postura íntegra e sigilo absoluto." },
  { icon: Award, title: "Excelência técnica", desc: "Profundidade e rigor em cada manifestação." },
];

function Item({ icon: Icon, title, desc, i }: { icon: typeof Sparkles; title: string; desc: string; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 60}ms` }}
      className="reveal-on-scroll flex gap-5 p-6 rounded-xl bg-primary-foreground/[0.04] border border-primary-foreground/10 hover:border-gold/50 transition-colors"
    >
      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold border border-gold/30">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-display text-lg text-primary-foreground mb-1">{title}</h3>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 sm:py-32 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="text-xs tracking-[0.35em] uppercase text-gold">Diferenciais</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-[1.1]">
            O que torna a Moncorvo uma escolha de confiança.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Item key={it.title} {...it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
