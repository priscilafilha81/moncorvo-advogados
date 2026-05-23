import { Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
};

const team: Member[] = [
  {
    name: "Dr. Rafael Almeida",
    role: "Direito Trabalhista",
    bio: "Atuação estratégica em rescisões, vínculos empregatícios e contencioso trabalhista.",
    initials: "RA",
  },
  {
    name: "Dra. Camila Moura",
    role: "Direito Previdenciário",
    bio: "Especialista em aposentadorias, benefícios do INSS e revisões previdenciárias.",
    initials: "CM",
  },
  {
    name: "Dr. Felipe Santana",
    role: "Direito Bancário",
    bio: "Defesa em juros abusivos, renegociação de dívidas e revisão contratual bancária.",
    initials: "FS",
  },
  {
    name: "Dra. Juliana Costa",
    role: "Direito do Consumidor",
    bio: "Atuação em cobranças indevidas, fraudes, danos morais e conflitos de consumo.",
    initials: "JC",
  },
  {
    name: "Dr. André Carvalho",
    role: "Terceiro Setor",
    bio: "Consultoria para associações, fundações e institutos com foco em governança e compliance.",
    initials: "AC",
  },
];

function MemberCard({ m, i }: { m: Member; i: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${i * 80}ms` }}
      className="reveal-on-scroll group relative bg-card border border-border rounded-2xl p-7 sm:p-8 hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-premium overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-gold opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700" />

      <div className="relative">
        {/* Photo / placeholder */}
        <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-primary p-[2px] transition-transform duration-500 group-hover:scale-[1.03]">
            <div className="w-full h-full rounded-full bg-card overflow-hidden flex items-center justify-center">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span className="font-display text-3xl sm:text-4xl text-gold/80 tracking-wide select-none">
                  {m.initials}
                </span>
              )}
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gold border-4 border-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold font-medium mb-2">
            {m.role}
          </p>
          <h3 className="font-display text-xl sm:text-2xl text-primary leading-tight">
            {m.name}
          </h3>
          <div className="mt-4 mx-auto w-10 h-px bg-gold/40 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </span>
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Team() {
  return (
    <section id="equipe" className="py-24 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Equipe Jurídica"
          title="Profissionais especializados atuando com estratégia, ética e excelência."
          subtitle="Uma equipe multidisciplinar com experiência consolidada em diferentes áreas do direito, dedicada a oferecer soluções jurídicas sob medida."
          align="center"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
