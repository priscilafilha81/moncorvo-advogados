import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import estadualImage from "@/assets/process-consultation/justica-estadual.png";
import trabalhoImage from "@/assets/process-consultation/justica-do-trabalho.png";
import federalImage from "@/assets/process-consultation/justica-federal.png";

const portals = [
  {
    title: "Justiça Estadual",
    description: "Consulte seu processo no Tribunal de Justiça da Bahia.",
    href: "https://www.tjba.jus.br/portal/",
    image: estadualImage,
    imagePosition: "center",
    imageAlt: "Portal do Tribunal de Justiça da Bahia",
  },
  {
    title: "Justiça do Trabalho",
    description: "Consulte seu processo trabalhista.",
    href: "https://www.trt5.jus.br/",
    image: trabalhoImage,
    imagePosition: "center top",
    imageAlt: "Portal da Justiça do Trabalho da Bahia",
  },
  {
    title: "Justiça Federal",
    description: "Consulte seu processo na Justiça Federal.",
    href: "https://pje1g-consultapublica.trf1.jus.br/consultapublica/ConsultaPublica/listView.seam",
    image: federalImage,
    imagePosition: "left top",
    imageAlt: "Página oficial de consulta da Justiça Federal",
  },
];

function PortalCard({ portal, index }: { portal: (typeof portals)[number]; index: number }) {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="reveal-on-scroll group flex h-full min-h-[410px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-elev-1 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-premium"
    >
      <div className="aspect-video w-full overflow-hidden border-b border-border bg-secondary/40">
        <img
          src={portal.image}
          alt={portal.imageAlt}
          loading="lazy"
          width={1600}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          style={{ objectPosition: portal.imagePosition }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl text-primary sm:text-[1.75rem]">{portal.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {portal.description}
        </p>

        <a
          href={portal.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-elev-2"
        >
          Consultar processo
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function ConsultaProcessual() {
  return (
    <section id="consulte-processo" className="section-soft py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          title="Consulte seu processo"
          subtitle="Escolha abaixo onde deseja consultar seu processo."
          align="center"
        />

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {portals.map((portal, index) => (
            <PortalCard key={portal.title} portal={portal} index={index} />
          ))}
        </div>

        <p className="mx-auto mt-8 text-center text-sm text-muted-foreground">
          Você será direcionado para o site oficial de cada tribunal.
        </p>
      </div>
    </section>
  );
}
