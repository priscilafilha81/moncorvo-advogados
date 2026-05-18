import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", title: "Primeiro contato", desc: "Você fala diretamente conosco pelo WhatsApp ou formulário, sem barreiras nem burocracia." },
  { n: "02", title: "Análise detalhada do caso", desc: "Estudo aprofundado dos documentos, contexto e particularidades para entender exatamente o que está em jogo." },
  { n: "03", title: "Estratégia jurídica personalizada", desc: "Construção de um plano sob medida, com etapas, prazos e expectativas alinhadas com clareza." },
  { n: "04", title: "Acompanhamento contínuo", desc: "Atualizações periódicas, linguagem acessível e comunicação ativa em cada etapa do processo." },
];

function Step({ s, i }: { s: (typeof steps)[number]; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 100}ms` }}
      className="reveal-on-scroll relative pl-16 sm:pl-20 pb-12 last:pb-0 border-l border-gold/30 last:border-l-transparent ml-6"
    >
      <span className="absolute -left-[1.4rem] sm:-left-[1.65rem] top-0 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-gold font-display text-lg shadow-premium">
        {s.n}
      </span>
      <h3 className="font-display text-2xl text-primary mb-2">{s.title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
    </div>
  );
}

export function Process() {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Processo de Atendimento"
          title="Um caminho jurídico claro, do primeiro contato ao resultado."
          subtitle="Sabemos que decisões jurídicas geram dúvidas. Nosso processo foi desenhado para eliminar incertezas e gerar confiança a cada etapa."
        />
        <div className="mt-16 max-w-3xl">
          {steps.map((s, i) => (
            <Step key={s.n} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
