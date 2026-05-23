import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Practices } from "@/components/site/Practices";
import { Team } from "@/components/site/Team";
import { Process } from "@/components/site/Process";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ConsultaProcessual } from "@/components/site/ConsultaProcessual";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Moncorvo Advogados Associados — Advocacia Estratégica em Salvador / BA",
      },
      {
        name: "description",
        content:
          "Escritório de advocacia em Salvador com mais de 15 anos de experiência e 3.000 casos atendidos. Especializado em Direito Trabalhista, Previdenciário, do Consumidor, Bancário e assessoria ao Terceiro Setor.",
      },
      {
        name: "keywords",
        content:
          "advocacia em Salvador, escritório de advocacia em Salvador, advogado trabalhista em Salvador, advogado previdenciário em Salvador, advogado bancário Salvador, advogado consumidor Salvador, assessoria jurídica para terceiro setor, advogado terceiro setor Salvador, associações fundações institutos",
      },
      {
        property: "og:title",
        content: "Moncorvo Advogados Associados — Advocacia em Salvador",
      },
      {
        property: "og:description",
        content:
          "Advocacia estratégica, humanizada e especializada em Salvador / BA. Atendimento presencial e online com excelência técnica.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Moncorvo Advogados Associados",
          description:
            "Escritório de advocacia em Salvador / BA com mais de 15 anos de experiência e 3.000 casos atendidos. Especializado em Direito Trabalhista, Previdenciário, do Consumidor, Bancário e assessoria ao Terceiro Setor.",
          image: "/og-image.jpg",
          telephone: "+55-71-98863-4838",
          email: "moncorvoadvogados@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida ACM, Edf. Cidadela Center II",
            addressLocality: "Salvador",
            addressRegion: "BA",
            addressCountry: "BR",
          },
          areaServed: { "@type": "City", name: "Salvador" },
          priceRange: "$$",
          openingHours: "Mo-Fr 09:00-18:00",
          sameAs: ["https://instagram.com/moncorvo_advogados_associados"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Practices />
        <Team />
        <Process />
        <ConsultaProcessual />
        <Differentials />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
