import { Award, Users, TrendingUp, Headset } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { icon: Award, num: "+15", label: "Anos de experiência" },
  { icon: Users, num: "+3000", label: "Casos atendidos" },
  { icon: TrendingUp, num: "98%", label: "Índice de satisfação" },
  { icon: Headset, num: "On/Off", label: "Atendimento presencial e online" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Sobre o Escritório"
            title="Um escritório construído sobre ética, técnica e proximidade."
          />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-ink/85 leading-relaxed reveal-on-scroll" ref={ref}>
            <p>
              O <strong className="text-primary">Moncorvo Advogados Associados</strong> nasceu com o
              propósito de oferecer atendimento jurídico estratégico, humanizado e acessível, atuando
              com ética, transparência e excelência técnica.
            </p>
            <p>
              Com mais de <strong className="text-primary">15 anos de experiência</strong> consolidada
              e mais de <strong className="text-primary">3.000 casos atendidos</strong>, atuamos lado a
              lado dos nossos clientes, transformando demandas complexas em caminhos jurídicos claros,
              seguros e eficientes.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4">
              {[
                "Atendimento personalizado",
                "Atuação estratégica",
                "Suporte próximo",
                "Soluções eficientes",
                "Compromisso com resultados",
                "Sigilo absoluto",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="bg-gradient-primary rounded-2xl p-8 sm:p-10 shadow-premium text-primary-foreground">
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-8">Nossos Números</p>
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              {stats.map((s) => (
                <div key={s.label} className="group">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 text-gold mb-4 transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-105">
                    <s.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="font-display text-4xl sm:text-5xl text-gold leading-none">{s.num}</div>
                  <div className="mt-3 text-xs sm:text-sm text-primary-foreground/75 leading-snug tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-gold/20">
              <p className="font-display italic text-lg leading-snug text-primary-foreground/90">
                "Cada cliente é único. Cada estratégia é construída para o seu caso."
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
