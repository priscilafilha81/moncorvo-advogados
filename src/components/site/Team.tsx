import { Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import rafaelPhoto from "@/assets/team/rafael-almeida.jpg";
import camilaPhoto from "@/assets/team/camila-moura.jpg";
import felipePhoto from "@/assets/team/felipe-santana.jpg";
import julianaPhoto from "@/assets/team/juliana-costa.jpg";
import andrePhoto from "@/assets/team/andre-carvalho.jpg";

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
};

// Placeholder photos — substitua o valor de `photo` por fotos reais quando disponíveis.
const team: Member[] = [
  {
    name: "Dr. Rafael Almeida",
    role: "Direito Trabalhista",
    bio: "Atuação estratégica em rescisões, vínculos empregatícios e contencioso trabalhista.",
    initials: "RA",
    photo: rafaelPhoto,
  },
  {
    name: "Dra. Camila Moura",
    role: "Direito Previdenciário",
    bio: "Especialista em aposentadorias, benefícios do INSS e revisões previdenciárias.",
    initials: "CM",
    photo: camilaPhoto,
  },
  {
    name: "Dr. Felipe Santana",
    role: "Direito Bancário",
    bio: "Defesa em juros abusivos, renegociação de dívidas e revisão contratual bancária.",
    initials: "FS",
    photo: felipePhoto,
  },
  {
    name: "Dra. Juliana Costa",
    role: "Direito do Consumidor",
    bio: "Atuação em cobranças indevidas, fraudes, danos morais e conflitos de consumo.",
    initials: "JC",
    photo: julianaPhoto,
  },
  {
    name: "Dr. André Carvalho",
    role: "Terceiro Setor",
    bio: "Consultoria para associações, fundações e institutos com foco em governança e compliance.",
    initials: "AC",
    photo: andrePhoto,
  },
];

function MemberCard({ m, i }: { m: Member; i: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${i * 80}ms` }}
      className="reveal-on-scroll group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-premium"
    >
      {/* Portrait frame */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
        {m.photo ? (
          <img
            src={m.photo}
            alt={`${m.name} — ${m.role}`}
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-primary">
            <span className="font-display text-5xl text-gold/80 tracking-wide select-none">
              {m.initials}
            </span>
          </div>
        )}

        {/* Warm gradient overlay for institutional feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Role badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-card/90 backdrop-blur-sm border border-gold/30 px-3 py-1.5 rounded-full text-[10px] tracking-[0.25em] uppercase text-primary font-medium">
            {m.role}
          </span>
        </div>

        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl text-primary-foreground leading-tight drop-shadow-sm">
            {m.name}
          </h3>
          <div className="mt-3 w-10 h-px bg-gold group-hover:w-20 transition-all duration-500" />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7">
        <p className="text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">
          {m.bio}
        </p>

        <div className="mt-5 flex items-center gap-2.5">
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

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((m, i) => (
            <MemberCard key={m.name} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
