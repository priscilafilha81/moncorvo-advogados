import { Briefcase, ShieldAlert, ShoppingBag, Landmark, HeartHandshake, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_URL } from "@/lib/contact";

const areas = [
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    desc: "Assessoria jurídica em rescisões, verbas trabalhistas, horas extras, reconhecimento de vínculo empregatício e ações trabalhistas.",
    bullets: ["Rescisões e verbas", "Horas extras", "Vínculo empregatício", "Ações trabalhistas"],
  },
  {
    icon: ShieldAlert,
    title: "Direito Previdenciário",
    desc: "Atendimento especializado em aposentadorias, benefícios do INSS, auxílio-doença e revisões previdenciárias.",
    bullets: ["Aposentadorias", "Benefícios INSS", "Auxílio-doença", "Revisões"],
  },
  {
    icon: ShoppingBag,
    title: "Direito do Consumidor",
    desc: "Defesa em cobranças indevidas, negativação irregular, fraudes, danos morais e conflitos de consumo.",
    bullets: ["Cobranças indevidas", "Negativação irregular", "Fraudes e golpes", "Danos morais"],
  },
  {
    icon: Landmark,
    title: "Direito Bancário",
    desc: "Atuação em juros abusivos, renegociação de dívidas, golpes financeiros e revisão contratual.",
    bullets: ["Juros abusivos", "Renegociação", "Golpes financeiros", "Revisão contratual"],
  },
  {
    icon: HeartHandshake,
    title: "Assessoria ao Terceiro Setor",
    desc: "Atuação estratégica e consultiva para associações, fundações, institutos e organizações do terceiro setor, com foco em regularização, governança, compliance e segurança institucional.",
    bullets: ["Regularização", "Governança", "Compliance", "Segurança institucional"],
  },
];

function AreaCard({ a, i }: { a: (typeof areas)[number]; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${i * 80}ms` }}
      className="reveal-on-scroll group relative bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-premium overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700" />
      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground group-hover:bg-gold group-hover:text-gold-foreground transition-colors duration-500">
            <a.icon className="w-6 h-6" />
          </div>
          <span className="font-display text-gold/30 text-3xl">0{i + 1}</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl text-primary mb-4">{a.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{a.desc}</p>
        <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
          {a.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-ink/80">
              <span className="w-1 h-1 rounded-full bg-gold" />
              {b}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-gold transition-colors"
        >
          Agendar Atendimento
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
}

export function Practices() {
  return (
    <section id="areas" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Áreas de Atuação"
          title="Especialização técnica em cinco frentes essenciais."
          subtitle="Atuação consultiva e contenciosa em áreas estratégicas, com mais de 15 anos de experiência defendendo direitos com profundidade técnica."
          align="center"
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {areas.map((a, i) => (
            <AreaCard key={a.title} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
