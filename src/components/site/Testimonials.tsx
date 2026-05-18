import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    name: "Ana Carolina S.",
    role: "Cliente — Área Previdenciária",
    text: "Profissionalismo excepcional. Fui acompanhada em todas as etapas com clareza e atenção. Conquistei meu benefício com tranquilidade.",
  },
  {
    name: "Roberto M.",
    role: "Cliente — Área Trabalhista",
    text: "Sentí segurança desde o primeiro contato. O Dr. explicou tudo com calma, sem juridiquês, e o resultado superou minhas expectativas.",
  },
  {
    name: "Juliana A.",
    role: "Cliente — Direito do Consumidor",
    text: "Atendimento humanizado e extremamente eficiente. Resolveram meu problema com agilidade e me mantiveram informada o tempo todo.",
  },
  {
    name: "Carlos E.",
    role: "Cliente — Direito Bancário",
    text: "Revisaram meu contrato e identificaram abusos que eu nem imaginava. Recomendo de olhos fechados a quem busca um escritório sério.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);

  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Depoimentos"
          title="A confiança de quem viveu a experiência Moncorvo."
          align="center"
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-secondary/50 border border-border rounded-2xl p-10 sm:p-14 text-center shadow-soft">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-gold/20" />
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-display italic text-xl sm:text-2xl lg:text-3xl text-primary leading-snug">
              "{t.text}"
            </p>
            <div className="mt-8">
              <p className="font-medium text-primary">{t.name}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-full border border-border hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Ir para depoimento ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-full border border-border hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
