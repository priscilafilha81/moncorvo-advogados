import { Users, Target, Eye, Award, Activity, HeartHandshake } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const reasons = [
  { icon: HeartHandshake, title: "Atendimento próximo", text: "Relação direta com o advogado responsável pelo seu caso, sem intermediários." },
  { icon: Target, title: "Estratégia personalizada", text: "Cada caso é estudado individualmente, com plano jurídico construído sob medida." },
  { icon: Eye, title: "Transparência jurídica", text: "Você acompanha cada etapa do processo, com linguagem clara e honesta." },
  { icon: Award, title: "Excelência técnica", text: "Equipe constantemente atualizada e dedicada à melhor solução jurídica possível." },
  { icon: Activity, title: "Acompanhamento contínuo", text: "Comunicação ativa e relatórios sobre andamento do processo, sem você precisar perguntar." },
  { icon: Users, title: "Atendimento humanizado", text: "Escuta empática, respeito ao seu tempo e cuidado verdadeiro com sua história." },
];

function Card({ icon: Icon, title, text, i }: { icon: typeof Users; title: string; text: string; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 60}ms` }}
      className="reveal-on-scroll group relative bg-card rounded-xl p-8 border border-border hover:border-gold/60 hover:shadow-premium transition-all duration-500"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary mb-6 group-hover:bg-gold group-hover:text-gold-foreground transition-colors duration-500">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-display text-xl text-primary mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Por que Moncorvo"
          title="Uma advocacia construída para gerar confiança e resultados."
          subtitle="Combinamos rigor técnico e atendimento próximo para entregar uma experiência jurídica que respeita seu tempo, seu caso e a sua história."
          align="center"
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Card key={r.title} {...r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
