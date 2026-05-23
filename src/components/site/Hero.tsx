import { ArrowRight, Calendar, ShieldCheck, HeartHandshake, Eye, Target } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import heroImage from "@/assets/hero-advogado.png";

const pillars = [
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: ShieldCheck, label: "Presencial e online" },
  { icon: Eye, label: "Transparência em cada etapa" },
  { icon: Target, label: "Estratégia personalizada" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center hero-pattern overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-primary/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 xl:col-span-7 text-primary-foreground reveal order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="gold-divider" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.4em] uppercase text-gold/90 font-medium">
              Advocacia em Salvador / BA
            </span>
          </div>

          <h1 className="font-display font-normal text-[2.15rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-[4.25rem] xl:leading-[1.08] text-primary-foreground max-w-2xl">
            Advocacia Estratégica
            <br />
            e <span className="text-gold italic font-light">Especializada</span>
            <br />
            <span className="text-primary-foreground/95">em Salvador.</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl text-[15px] sm:text-lg text-primary-foreground/75 leading-[1.7] sm:leading-[1.75] font-light">
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
              Falar com um Especialista
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

          <ul className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-5 sm:gap-x-6 gap-y-5 max-w-3xl">
            {pillars.map((p) => (
              <li key={p.label} className="flex flex-col gap-2.5 text-primary-foreground/80">
                <p.icon className="w-[18px] h-[18px] text-gold" strokeWidth={1.5} />
                <span className="text-xs sm:text-[13px] leading-snug font-light">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium photo */}
        <div className="lg:col-span-6 xl:col-span-5 reveal order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none group/hero">
            {/* gold frame accent */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-t border-l border-gold/50 rounded-tl-2xl pointer-events-none z-20" />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-b border-r border-gold/50 rounded-br-2xl pointer-events-none z-20" />

            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-gold/15 via-transparent to-primary/30 blur-2xl rounded-[2rem]" />

            <div className="relative overflow-hidden rounded-2xl shadow-premium ring-1 ring-gold/20">
              <img
                src={heroImage}
                alt="Dr. Ângelo Moncorvo, advogado fundador da Moncorvo Advogados Associados"
                className="w-full h-[340px] sm:h-[480px] lg:h-[600px] object-cover object-center animate-[heroZoom_18s_ease-in-out_infinite_alternate] transition-transform duration-700 ease-out group-hover/hero:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
              {/* warm side lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,rgba(200,162,93,0.18),transparent_55%)] mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/15 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/10" />

              {/* Founder card — desktop overlay */}
              <div className="hidden sm:block absolute bottom-5 left-5 right-5 lg:right-auto lg:max-w-[80%] z-10 animate-[founderFadeUp_900ms_ease-out_400ms_both]">
                <div className="relative rounded-xl border border-gold/25 bg-primary/55 backdrop-blur-md backdrop-saturate-150 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)] px-5 py-4">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
                  <div className="relative">
                    <h3 className="font-display font-semibold text-[1.15rem] leading-tight text-primary-foreground tracking-tight">
                      Dr. Ângelo Moncorvo
                    </h3>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-gold/90 font-medium">
                      Advogado Fundador
                    </p>
                    <div className="mt-3 pt-3 border-t border-gold/15">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/55 mb-1.5 font-medium">
                        Especialista em
                      </p>
                      <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[12px] text-primary-foreground/85 font-light">
                        <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-gold/80" />Trabalhista</li>
                        <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-gold/80" />Previdenciário</li>
                        <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-gold/80" />Bancário</li>
                        <li className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-gold/80" />Consumidor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder card — mobile (below image) */}
            <div className="sm:hidden mt-5 animate-[founderFadeUp_900ms_ease-out_400ms_both]">
              <div className="relative rounded-xl border border-gold/25 bg-primary/70 backdrop-blur-md shadow-premium px-5 py-4 text-center">
                <h3 className="font-display font-semibold text-lg text-primary-foreground">
                  Dr. Ângelo Moncorvo
                </h3>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-gold/90 font-medium">
                  Advogado Fundador
                </p>
                <div className="mt-3 pt-3 border-t border-gold/15">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/55 mb-2 font-medium">
                    Especialista em
                  </p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[12px] text-primary-foreground/85 font-light">
                    <li>Trabalhista</li>
                    <li>Previdenciário</li>
                    <li>Bancário</li>
                    <li>Consumidor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
