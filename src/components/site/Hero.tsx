import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const specialties = [
  "Direito Trabalhista",
  "Direito Previdenciário",
  "Direito Bancário",
  "Direito do Consumidor",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden hero-pattern lg:min-h-[720px]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-primary/40 blur-[140px] sm:right-1/4" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="grid items-center gap-14 text-primary-foreground lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)] lg:gap-16 xl:gap-24">
          <div className="reveal max-w-3xl">
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="gold-divider" />
              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold/90 sm:text-[11px] sm:tracking-[0.4em]">
                Advocacia em Salvador / BA
              </span>
            </div>

            <h1 className="max-w-3xl text-balance font-display text-[2.65rem] font-normal leading-[1.04] tracking-[-0.04em] text-primary-foreground sm:text-[3.7rem] lg:text-[3.75rem] xl:text-[4rem]">
              Advocacia estratégica para{" "}
              <span className="font-light italic text-gold">proteger seus direitos.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] font-light leading-[1.7] text-primary-foreground/75 sm:mt-8 sm:text-lg sm:leading-[1.75]">
              Atuação nas áreas trabalhista, previdenciária, bancária e do consumidor, com
              atendimento próximo, transparência e excelência técnica.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-gold-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
              >
                Falar com Dr. Ângelo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#consulta-online"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-4 text-sm font-medium text-primary-foreground/90 transition-all duration-300 hover:border-gold/60 hover:bg-primary-foreground/5 hover:text-gold sm:w-auto"
              >
                Atendimento Online
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-primary-foreground/10 bg-primary-foreground/[0.035] p-7 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.5)] backdrop-blur-[2px] sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-5 -top-12 select-none font-display text-[10rem] font-semibold leading-none tracking-[-0.08em] text-primary-foreground/[0.045] sm:text-[12rem]">
              MAS
            </div>
            <div className="pointer-events-none absolute right-0 top-24 h-px w-3/4 bg-gradient-to-l from-gold/45 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-12 h-24 w-px bg-gradient-to-t from-gold/35 to-transparent" />

            <div className="relative">
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold/85 sm:text-[11px]">
                Atuação especializada
              </p>
              <div className="mt-8 h-px w-14 bg-gold/70" />

              <ol className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {specialties.map((specialty, index) => (
                  <li
                    key={specialty}
                    className="flex min-h-20 items-center gap-4 border-t border-primary-foreground/10 py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(2)]:border-t xl:[&:nth-child(2)]:border-t-0"
                  >
                    <span className="font-display text-sm text-gold/70">0{index + 1}</span>
                    <span className="text-sm font-light leading-snug text-primary-foreground/85 sm:text-[15px]">
                      {specialty}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
