import { ArrowRight, Calendar, ShieldCheck, HeartHandshake, Eye, Target } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const pillars = [
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: ShieldCheck, label: "Presencial e online" },
  { icon: Eye, label: "Transparência em cada etapa" },
  { icon: Target, label: "Estratégia personalizada" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[680px] sm:min-h-[720px] lg:min-h-[760px] flex items-center hero-pattern overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 sm:right-1/4 w-[420px] h-[420px] rounded-full bg-primary/40 blur-[140px]" />
        <div className="absolute top-28 right-[8%] hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-gold/45 to-transparent" />
        <div className="absolute top-44 right-[calc(8%+0.25rem)] hidden lg:block w-20 h-px bg-gradient-to-r from-gold/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="text-primary-foreground reveal max-w-5xl">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="gold-divider" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] uppercase text-gold/90 font-medium">
              Advocacia em Salvador / BA
            </span>
          </div>

          <h1 className="font-display font-normal text-[2.65rem] leading-[1.01] sm:text-[4rem] lg:text-[5.15rem] xl:text-[5.8rem] xl:leading-[0.98] tracking-[-0.045em] text-primary-foreground max-w-5xl text-balance">
            Advocacia Estratégica
            <span className="block sm:inline"> e </span>
            <span className="text-gold italic font-light">Especializada</span>
            <span className="block text-primary-foreground/95">em Salvador.</span>
          </h1>

          <p className="mt-7 sm:mt-9 max-w-2xl text-[15px] sm:text-lg lg:text-xl text-primary-foreground/75 leading-[1.7] sm:leading-[1.75] font-light">
            Atendimento jurídico nas áreas trabalhista, previdenciária, bancária e do
            consumidor — com ética, transparência e excelência técnica.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse group inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-300 shadow-premium w-full sm:w-auto"
            >
              Falar com Dr. Ângelo
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground/90 px-7 py-4 rounded-full text-sm font-medium hover:bg-primary-foreground/5 hover:border-gold/60 hover:text-gold transition-all duration-300 w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4" />
              Agendar Atendimento
            </a>
          </div>

          <ul className="mt-10 sm:mt-14 pt-7 border-t border-primary-foreground/10 grid grid-cols-2 sm:grid-cols-4 gap-x-5 sm:gap-x-8 gap-y-5 max-w-4xl">
            {pillars.map((p) => (
              <li key={p.label} className="flex items-start gap-3 text-primary-foreground/80">
                <p.icon className="w-[18px] h-[18px] text-gold" strokeWidth={1.5} />
                <span className="text-xs sm:text-[13px] leading-snug font-light">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
