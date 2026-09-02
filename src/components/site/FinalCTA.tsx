import { ArrowRight, Calendar } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section id="contato" className="py-24 sm:py-32 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="gold-divider" />
          <span className="text-xs tracking-[0.35em] uppercase text-gold">Próximo passo</span>
          <span className="gold-divider" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-primary-foreground">
          Conte com uma assessoria jurídica estratégica, transparente e comprometida com seus{" "}
          <span className="text-gold italic">resultados</span>.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Fale agora com um especialista e receba atendimento jurídico personalizado, com retorno
          rápido e total sigilo.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all shadow-premium"
          >
            Falar com Dr. Ângelo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 px-7 py-4 rounded-full text-sm font-medium hover:bg-primary-foreground/10 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Agendar Atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
