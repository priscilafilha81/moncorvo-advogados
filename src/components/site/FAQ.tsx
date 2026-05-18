import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Como funciona o atendimento?",
    a: "O atendimento começa por um contato inicial via WhatsApp ou formulário. Fazemos uma análise prévia do seu caso e agendamos uma reunião — presencial em nosso escritório em Salvador ou online — para entender em profundidade sua demanda e desenhar a melhor estratégia jurídica.",
  },
  {
    q: "O escritório atende online?",
    a: "Sim. Oferecemos atendimento presencial em nosso escritório no Itaigara, em Salvador, e também atendimento 100% online por videoconferência, com o mesmo padrão de excelência, sigilo e proximidade.",
  },
  {
    q: "Quais áreas jurídicas o escritório atende?",
    a: "Atuamos com profundidade técnica em Direito Trabalhista, Direito Previdenciário, Direito do Consumidor e Direito Bancário, oferecendo soluções consultivas e contenciosas em cada uma dessas frentes.",
  },
  {
    q: "Como agendar atendimento?",
    a: "Basta clicar em qualquer botão de WhatsApp do site ou entrar em contato pelo telefone (71) 98863-4838. Retornamos rapidamente para entender sua demanda e agendar o melhor horário para você.",
  },
  {
    q: "O acompanhamento do processo é informado ao cliente?",
    a: "Sim. Mantemos comunicação ativa e transparente durante todo o processo, com atualizações sobre cada etapa e em linguagem clara — você nunca fica sem saber o que está acontecendo com o seu caso.",
  },
];

function Item({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-lg sm:text-xl text-primary group-hover:text-gold transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 mt-1 w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary transition-all duration-300 ${
            open ? "bg-gold border-gold text-gold-foreground rotate-45" : "group-hover:border-gold"
          }`}
        >
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed max-w-3xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Perguntas frequentes"
            title="Tire suas dúvidas antes do primeiro contato."
            subtitle="Reunimos as perguntas mais comuns sobre nosso atendimento, áreas e processo de trabalho."
          />
        </div>
        <div className="lg:col-span-7">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
