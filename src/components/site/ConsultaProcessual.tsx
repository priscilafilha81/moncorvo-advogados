import { ArrowRight, ExternalLink, ShieldCheck, Zap, RefreshCw, Search, FileText, MousePointerClick, ListChecks, Lightbulb, Info, MessageCircle, Scale } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/contact";
import portalImg from "@/assets/tjba-portal.png";
import tjbaLogo from "@/assets/tjba-logo.png";

const TJBA_URL = "https://www.tjba.jus.br/portal/";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Você será direcionado para o sistema oficial do TJBA.",
  },
  {
    icon: Zap,
    title: "Praticidade",
    desc: "Consulta rápida utilizando CPF, número do processo, parte ou OAB.",
  },
  {
    icon: RefreshCw,
    title: "Informações atualizadas",
    desc: "Acompanhe diretamente as movimentações processuais oficiais.",
  },
];

const searchOptions = [
  { label: "Processo", desc: "informe o número completo do processo", highlight: true },
  { label: "CPF", desc: "informe o CPF da parte envolvida", highlight: true },
  { label: "Parte", desc: "informe o nome da parte" },
  { label: "Advogado (OAB)", desc: "informe o número da OAB" },
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal-on-scroll ${className}`}>
      {children}
    </div>
  );
}

export function ConsultaProcessual() {
  return (
    <section id="consulte-processo" className="py-24 sm:py-32 section-soft relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header + Benefits */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-divider" />
              <span className="text-xs tracking-[0.35em] uppercase text-gold font-medium">
                Consulte seu Processo
              </span>
            </div>

            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 mb-6">
              <Scale className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.05] text-primary">
              Acompanhe seu processo de forma{" "}
              <span className="text-gold italic">simples e rápida</span>.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Acesse o portal oficial do Tribunal de Justiça da Bahia (TJBA) e consulte seu
              processo de maneira segura, prática e gratuita.
            </p>

            {/* Banner clicável institucional */}
            <a
              href={TJBA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-gold/60 shadow-soft hover:shadow-elev-2 transition-all duration-500 hover:-translate-y-0.5"
            >
              <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-gold shadow-premium">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <p className="text-[13px] tracking-wider uppercase text-gold font-semibold mb-1">
                  Portal Oficial
                </p>
                <p className="text-sm sm:text-[15px] text-ink/85 leading-relaxed">
                  Você será redirecionado para o portal oficial do Tribunal de Justiça da Bahia (TJBA).
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-[13px] font-semibold tracking-wide shadow-soft group-hover:bg-primary/90 transition-all">
                Acessar portal oficial do TJBA
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>

          {/* Card de benefícios */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-3xl bg-card border border-border shadow-elev-2 p-7 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="gold-divider" />
                  <span className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold">
                    Por que consultar pelo TJBA
                  </span>
                </div>
                <ul className="space-y-6">
                  {benefits.map((b) => (
                    <li key={b.title} className="flex gap-4 group">
                      <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondary text-primary border border-border group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                        <b.icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <h4 className="font-display text-lg text-primary leading-tight mb-1">
                          {b.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tutorial */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex justify-center items-center gap-3 mb-5">
                <span className="gold-divider" />
                <span className="text-xs tracking-[0.35em] uppercase text-gold font-medium">
                  Tutorial
                </span>
                <span className="gold-divider" />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.08]">
                Como consultar seu processo
              </h3>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Siga o passo a passo abaixo para acessar rapidamente as informações do seu processo
                no portal oficial do TJBA.
              </p>
            </div>
          </Reveal>

          {/* Step 1 */}
          <Reveal delay={80} className="mt-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 lg:col-start-2">
                <StepBadge n="01" icon={MousePointerClick} />
                <h4 className="font-display text-2xl sm:text-3xl text-primary mt-5 mb-3">
                  Acesse o portal oficial do TJBA
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Você será direcionado ao portal oficial do Tribunal de Justiça do Estado da Bahia.
                </p>
                <a
                  href={TJBA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all shadow-soft hover:-translate-y-0.5"
                >
                  Acessar site do TJBA
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="lg:col-span-5 hidden lg:flex justify-center">
                <div className="w-full max-w-sm aspect-[4/3] rounded-2xl bg-gradient-primary p-1 shadow-premium group">
                  <div className="w-full h-full rounded-[14px] bg-white flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden transition-transform duration-500 group-hover:scale-[0.99]">
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                      <ShieldCheck className="w-3 h-3" strokeWidth={2} />
                      Site Oficial
                    </span>
                    <img
                      src={tjbaLogo}
                      alt="Logomarca oficial do Tribunal de Justiça do Estado da Bahia"
                      className="max-h-24 w-auto object-contain"
                      draggable={false}
                    />
                    <p className="font-display text-base text-primary mt-6 tracking-wide text-center">
                      Portal Oficial do TJBA
                    </p>
                    <span className="mt-1 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                      tjba.jus.br/portal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Step 2 — with annotated screenshot */}
          <Reveal delay={80} className="mt-20">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 lg:col-start-2">
                <StepBadge n="02" icon={Search} />
                <h4 className="font-display text-2xl sm:text-3xl text-primary mt-5 mb-3">
                  Localize a área de Consulta Processual
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Na página inicial do portal, vá até a seção{" "}
                  <span className="font-semibold text-primary">"Consulta Processual"</span>,
                  destacada na imagem ao lado.
                </p>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-elev-3 bg-card">
                  <img
                    src={portalImg}
                    alt="Tela inicial do portal TJBA com destaque para a área de Consulta Processual"
                    className="w-full h-auto block select-none"
                    draggable={false}
                    loading="lazy"
                  />

                  {/* Dim everything outside the highlight area */}
                  <div className="absolute inset-0 bg-primary/15 pointer-events-none mix-blend-multiply" />

                  {/* Premium highlight around CONSULTA PROCESSUAL box */}
                  <div
                    className="absolute pointer-events-none"
                    style={{ left: "6%", top: "52%", width: "46%", height: "25%" }}
                  >
                    {/* Outer glow */}
                    <div className="absolute -inset-2 rounded-2xl bg-gold/25 blur-xl animate-[pulse_2.4s_ease-in-out_infinite]" />
                    {/* Solid bright frame to "cut" through the dim layer */}
                    <div className="absolute inset-0 rounded-xl bg-transparent ring-[3px] ring-gold shadow-[0_0_0_8px_rgba(200,162,93,0.22),0_20px_60px_-10px_rgba(200,162,93,0.5)]" />
                    {/* Inner bright frame */}
                    <div className="absolute inset-1 rounded-lg ring-1 ring-gold/40" />

                    {/* "AQUI" badge */}
                    <span className="absolute -top-4 -right-3 sm:-right-4 inline-flex items-center gap-1.5 bg-gradient-gold text-gold-foreground text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full shadow-premium border border-gold-foreground/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-foreground animate-pulse" />
                      Consulte aqui
                    </span>
                  </div>

                </div>


                <p className="mt-4 text-xs text-muted-foreground text-center italic">
                  Imagem ilustrativa do portal oficial do TJBA.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Step 3 */}
          <Reveal delay={80} className="mt-20">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 lg:col-start-2">
                <StepBadge n="03" icon={ListChecks} />
                <h4 className="font-display text-2xl sm:text-3xl text-primary mt-5 mb-3">
                  Escolha a forma de consulta
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  No campo de consulta, você pode pesquisar utilizando uma das opções abaixo:
                </p>

                <ul className="space-y-3">
                  {searchOptions.map((opt) => (
                    <li
                      key={opt.label}
                      className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                        opt.highlight
                          ? "bg-gold/5 border-gold/40 shadow-soft"
                          : "bg-card border-border"
                      }`}
                    >
                      <div
                        className={`shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg ${
                          opt.highlight
                            ? "bg-gold text-gold-foreground"
                            : "bg-secondary text-primary"
                        }`}
                      >
                        <FileText className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display text-lg text-primary">{opt.label}</span>
                          {opt.highlight && (
                            <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-gold-foreground bg-gold px-2 py-0.5 rounded-full">
                              Mais usadas
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{opt.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:col-span-3 lg:sticky lg:top-28">
                <div className="rounded-2xl bg-gradient-primary text-primary-foreground p-6 shadow-premium relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full -translate-y-12 translate-x-12 blur-xl" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold text-gold-foreground mb-4">
                      <Lightbulb className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-2">
                      Dica
                    </p>
                    <p className="text-sm leading-relaxed text-primary-foreground/90">
                      As opções mais utilizadas normalmente são{" "}
                      <span className="text-gold font-semibold">"Processo"</span> ou{" "}
                      <span className="text-gold font-semibold">"CPF"</span>. Tenha essas
                      informações em mãos para facilitar sua busca.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </Reveal>

          {/* Step 4 */}
          <Reveal delay={80} className="mt-20">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 lg:col-start-2">
                <StepBadge n="04" icon={Search} />
                <h4 className="font-display text-2xl sm:text-3xl text-primary mt-5 mb-3">
                  Faça sua consulta
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Após selecionar o tipo de consulta e informar os dados solicitados, clique no
                  botão <span className="font-semibold text-primary">"Buscar"</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O sistema exibirá as movimentações e informações atualizadas do seu processo.
                </p>
              </div>

              <aside className="lg:col-span-3 lg:sticky lg:top-28">
                <div className="rounded-2xl bg-card border border-gold/40 p-6 shadow-soft relative overflow-hidden">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold mb-4 border border-gold/30">
                    <Info className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold mb-2">
                    Importante
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    As informações apresentadas são fornecidas diretamente pelo sistema oficial do
                    TJBA e podem sofrer atualizações conforme movimentações processuais.
                  </p>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>

        {/* CTA Final */}
        <Reveal delay={80} className="mt-24">
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-10 sm:p-14 relative overflow-hidden shadow-premium">
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
              <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
            </div>
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="gold-divider" />
                  <span className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold">
                    Suporte
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-primary-foreground leading-[1.1]">
                  Ainda precisa de <span className="text-gold italic">ajuda?</span>
                </h3>
                <p className="mt-4 text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
                  Nossa equipe está pronta para orientar você.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all shadow-premium hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com um Especialista
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepBadge({ n, icon: Icon }: { n: string; icon: typeof Search }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-gold font-display text-base shadow-premium">
        {n}
      </span>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold border border-gold/30">
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </span>
    </div>
  );
}
