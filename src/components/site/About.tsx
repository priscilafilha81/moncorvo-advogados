import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { num: "+800", label: "Clientes atendidos" },
  { num: "+10", label: "Anos de experiência" },
  { num: "98%", label: "Índice de satisfação" },
  { num: "24h", label: "Resposta média" },
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
              Atuamos lado a lado dos nossos clientes, com escuta atenta e estratégia personalizada,
              transformando demandas complexas em caminhos jurídicos claros e eficientes.
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
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-6">Nossos Números</p>
            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl sm:text-5xl text-gold">{s.num}</div>
                  <div className="mt-2 text-xs sm:text-sm text-primary-foreground/80 leading-tight">
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
