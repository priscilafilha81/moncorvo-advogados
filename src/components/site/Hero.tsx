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
    <section id="top" className="relative min-h-screen flex items-center hero-pattern overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-primary-foreground reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-divider" />
            <span className="text-xs tracking-[0.35em] uppercase text-gold">
              Advocacia em Salvador / BA
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-primary-foreground">
            Advocacia Estratégica
            <br />
            e <span className="text-gold italic">Especializada</span>
            <br />
            em Salvador.
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
            Atendimento jurídico nas áreas trabalhista, previdenciária, bancária e do
            consumidor, oferecendo soluções com ética, transparência e excelência técnica.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all shadow-premium"
            >
              Falar com um Especialista
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-4 rounded-full text-sm font-medium hover:bg-primary-foreground/10 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Agendar Atendimento
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {pillars.map((p) => (
              <li key={p.label} className="flex flex-col gap-2 text-primary-foreground/85">
                <p.icon className="w-5 h-5 text-gold" />
                <span className="text-xs sm:text-sm leading-tight">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block lg:col-span-5 reveal">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-full" />
            <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-gold/30 rounded-2xl p-10 shadow-premium">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">Excelência Jurídica</span>
                <span className="font-display text-gold text-4xl">M</span>
              </div>
              <p className="font-display italic text-2xl text-primary-foreground leading-snug">
                "O direito é a arte do bom e do justo — aplicada com estratégia e cuidado em cada caso."
              </p>
              <div className="mt-8 pt-6 border-t border-gold/20 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-display text-3xl text-gold">+10</div>
                  <div className="text-[10px] tracking-widest uppercase text-primary-foreground/70 mt-1">Anos</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-gold">+800</div>
                  <div className="text-[10px] tracking-widest uppercase text-primary-foreground/70 mt-1">Clientes</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-gold">98%</div>
                  <div className="text-[10px] tracking-widest uppercase text-primary-foreground/70 mt-1">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
