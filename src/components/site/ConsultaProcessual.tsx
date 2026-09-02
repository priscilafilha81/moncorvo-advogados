import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import estadualImage from "@/assets/process-consultation/justica-estadual.png";
import trabalhoImage from "@/assets/process-consultation/justica-do-trabalho.png";
import federalImage from "@/assets/process-consultation/justica-federal.png";
import estadualLogo from "@/assets/process-consultation/logos/tjba.png";
import trabalhoLogo from "@/assets/process-consultation/logos/trt5.png";
import federalLogo from "@/assets/process-consultation/logos/justica-federal.jpg";

const portals = [
  {
    title: "Justiça Estadual",
    institution: "Tribunal de Justiça da Bahia",
    modalTitle: "Consulte seu processo na Justiça Estadual",
    href: "https://www.tjba.jus.br/portal/",
    image: estadualImage,
    imageAlt: "Portal do Tribunal de Justiça da Bahia com a consulta processual destacada",
    logo: estadualLogo,
    logoAlt: "Tribunal de Justiça do Estado da Bahia",
    marker: { left: "53.2%", top: "36.7%", width: "33.4%", height: "19%" },
  },
  {
    title: "Justiça do Trabalho",
    institution: "Tribunal Regional do Trabalho",
    modalTitle: "Consulte seu processo na Justiça do Trabalho",
    href: "https://www.trt5.jus.br/",
    image: trabalhoImage,
    imageAlt: "Portal da Justiça do Trabalho com a consulta processual destacada",
    logo: trabalhoLogo,
    logoAlt: "Tribunal Regional do Trabalho da 5ª Região",
    marker: { left: "8.2%", top: "37.4%", width: "13.5%", height: "7.5%" },
  },
  {
    title: "Justiça Federal",
    institution: "Consulta Processual Federal",
    modalTitle: "Consulte seu processo na Justiça Federal",
    href: "https://pje1g-consultapublica.trf1.jus.br/consultapublica/ConsultaPublica/listView.seam",
    image: federalImage,
    imageAlt: "Página oficial da Justiça Federal com o campo de processo destacado",
    logo: federalLogo,
    logoAlt: "Justiça Federal",
    marker: { left: "1.7%", top: "15.4%", width: "22.8%", height: "7%" },
  },
] as const;

type Portal = (typeof portals)[number];

function PortalPreview({ portal }: { portal: Portal }) {
  return (
    <DialogContent className="max-h-[92vh] w-[calc(100%-1.5rem)] max-w-6xl overflow-y-auto rounded-2xl border-gold/30 bg-card p-0 shadow-premium sm:w-[calc(100%-3rem)]">
      <DialogHeader className="border-b border-border px-6 pb-5 pt-7 pr-14 text-left sm:px-8 sm:pt-8">
        <DialogTitle className="font-display text-2xl leading-tight text-primary sm:text-3xl">
          {portal.modalTitle}
        </DialogTitle>
        <DialogDescription className="pt-2 text-sm leading-relaxed sm:text-base">
          Localize a opção <strong className="font-semibold text-primary">“Consulta Processual”</strong> no portal oficial.
        </DialogDescription>
      </DialogHeader>

      <div className="border-b border-border px-6 py-5 sm:px-8">
        <p className="text-sm text-muted-foreground">
          Você será direcionado para o site oficial.
        </p>
        <a
          href={portal.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
        >
          Abrir portal oficial
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="px-4 py-5 sm:px-8 sm:py-7">
        <div className="overflow-x-auto rounded-xl border border-border bg-secondary/30 shadow-soft">
          <div className="relative">
            <img
              src={portal.image}
              alt={portal.imageAlt}
              width={1882}
              height={909}
              className="block h-auto w-full select-none"
              draggable={false}
            />
            <div
              className="pointer-events-none absolute rounded-md border-2 border-gold bg-gold/10 shadow-[0_0_0_4px_rgba(200,162,93,0.22)]"
              style={portal.marker}
              aria-hidden="true"
            >
              <span className="absolute -right-2 -top-7 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold shadow-soft">
                Consulte aqui
              </span>
            </div>
          </div>
        </div>

      </div>
    </DialogContent>
  );
}

function PortalCard({ portal, index }: { portal: Portal; index: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <Dialog>
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
        <a
          href={portal.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary/75 transition-colors hover:text-gold"
        >
          Acessar portal oficial
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        <h3 className="mt-5 font-display text-2xl text-primary sm:text-[1.7rem]">{portal.title}</h3>
        <p className="mt-2 min-h-11 text-sm leading-relaxed text-muted-foreground">
          {portal.institution}
        </p>
        <DialogTrigger asChild>
          <button
            type="button"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Ver como consultar
          </button>
        </DialogTrigger>
      </article>
      <PortalPreview portal={portal} />
    </Dialog>
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
