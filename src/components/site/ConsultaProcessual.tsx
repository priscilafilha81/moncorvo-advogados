import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import estadualLogo from "@/assets/process-consultation/logos/tjba.png";
import trabalhoLogo from "@/assets/process-consultation/logos/trt5.png";
import federalLogo from "@/assets/process-consultation/logos/justica-federal.jpg";

const portals = [
  {
    title: "Justiça Estadual",
    institution: "Tribunal de Justiça da Bahia",
    href: "https://www.tjba.jus.br/portal/",
    logo: estadualLogo,
    logoAlt: "Tribunal de Justiça do Estado da Bahia",
  },
  {
    title: "Justiça do Trabalho",
    institution: "Tribunal Regional do Trabalho",
    href: "https://www.trt5.jus.br/",
    logo: trabalhoLogo,
    logoAlt: "Tribunal Regional do Trabalho da 5ª Região",
  },
  {
    title: "Justiça Federal",
    institution: "Consulta Processual Federal",
    href: "https://pje1g-consultapublica.trf1.jus.br/consultapublica/ConsultaPublica/listView.seam",
    logo: federalLogo,
    logoAlt: "Justiça Federal",
  },
] as const;

type Portal = (typeof portals)[number];

function PortalCard({ portal, index }: { portal: Portal; index: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="reveal-on-scroll flex h-full flex-col items-center rounded-2xl border border-border bg-card px-6 py-8 text-center shadow-elev-1 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 sm:px-8 sm:py-10"
    >
      <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-3">
        <img
          src={portal.logo}
          alt={portal.logoAlt}
          className={`max-h-full max-w-full object-contain ${
            portal.title === "Justiça Federal"
              ? "scale-[1.65]"
              : portal.title === "Justiça do Trabalho"
                ? "scale-[1.18]"
                : ""
          }`}
          loading="lazy"
        />
      </div>
      <div className="mt-4 h-[18px]" aria-hidden="true" />
      <h3 className="mt-5 font-display text-2xl text-primary sm:text-[1.7rem]">{portal.title}</h3>
      <p className="mt-2 min-h-11 text-sm leading-relaxed text-muted-foreground">
        {portal.institution}
      </p>
      <a
        href={portal.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Consulte seu processo
      </a>
    </article>
  );
}

export function ConsultaProcessual() {
  return (
    <section id="consulte-processo" className="section-soft py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          title="Consulte seu processo"
          subtitle="Escolha abaixo onde seu processo tramita para acessar o portal oficial."
          align="center"
        />

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {portals.map((portal, index) => (
            <PortalCard key={portal.title} portal={portal} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
